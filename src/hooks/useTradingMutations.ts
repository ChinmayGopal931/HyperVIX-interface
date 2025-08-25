import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { useContracts } from './useContracts'
import { parseUnits } from 'ethers'

export function useTradingMutations() {
  const { address } = useAccount()
  const { contracts } = useContracts()
  const queryClient = useQueryClient()

  const openPositionMutation = useMutation({
    mutationFn: async ({ 
      direction, 
      size, 
      margin 
    }: { 
      direction: 'long' | 'short'
      size: string
      margin: string 
    }) => {
      if (!contracts) {
        throw new Error('Contracts not initialized')
      }

      if (!size || !margin) {
        throw new Error('Please enter position size and margin')
      }

      const sizeValue = parseFloat(size)
      const marginValue = parseFloat(margin)

      if (sizeValue <= 0 || marginValue <= 0) {
        throw new Error('Position size and margin must be greater than 0')
      }

      const sizeDelta = parseUnits(sizeValue.toString(), 18)
      const marginDelta = parseUnits(marginValue.toString(), 18)
      const finalSizeDelta = direction === 'short' ? -sizeDelta : sizeDelta

      const usdcWrite = contracts.usdcWrite || contracts.usdc
      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual

      if (!address) throw new Error('Wallet not connected')

      // Check allowance first
      const currentAllowance = await contracts.usdc.allowance(
        address,
        contracts.perpetual.target
      )

      if (currentAllowance < marginDelta) {
        const approveTx = await usdcWrite.approve(
          contracts.perpetual.target,
          marginDelta * BigInt(2)
        )
        await approveTx.wait()
      }

      // Validate trade
      const userBalance = await contracts.usdc.balanceOf(address)
      if (userBalance < marginDelta) {
        throw new Error(`Insufficient USDC balance. Need ${Number(marginDelta) / 1e18} USDC, have ${Number(userBalance) / 1e18}`)
      }

      const tradePreview = await contracts.perpetual.getTradePreview(finalSizeDelta)
      const priceImpactPercent = Number(tradePreview.priceImpact) / 1e18
      if (priceImpactPercent > 0.1) {
        throw new Error(`Price impact too high: ${(priceImpactPercent * 100).toFixed(2)}%`)
      }

      const requiredMargin = await contracts.perpetual.getRequiredMargin(finalSizeDelta)
      if (marginDelta < requiredMargin) {
        throw new Error(`Insufficient margin. Required: ${Number(requiredMargin) / 1e18} USDC`)
      }

      const estimatedGas = await perpetualWrite.openPosition.estimateGas(finalSizeDelta, marginDelta)
      const tx = await perpetualWrite.openPosition(finalSizeDelta, marginDelta, {
        gasLimit: estimatedGas * BigInt(120) / BigInt(100)
      })
      
      return await tx.wait()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-data'] })
      queryClient.invalidateQueries({ queryKey: ['market-data'] })
    }
  })

  const closePositionMutation = useMutation({
    mutationFn: async () => {
      if (!contracts) {
        throw new Error('Contracts not initialized')
      }

      if (!address) throw new Error('Wallet not connected')

      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual
      
      // Check if user has a position using getPositionDetails
      const positionDetails = await contracts.perpetual.getPositionDetails(address)
      console.log('Position details before close:', positionDetails)
      
      if (positionDetails.size === 0n) {
        throw new Error('No position to close')
      }

      // Check AMM reserves
      const baseReserve = await contracts.perpetual.vBaseAssetReserve()
      const quoteReserve = await contracts.perpetual.vQuoteAssetReserve()
      console.log('AMM reserves:', { baseReserve: baseReserve.toString(), quoteReserve: quoteReserve.toString() })

      // Check if position would result in invalid reserves
      const positionSize = positionDetails.size
      console.log('Position size to close:', positionSize.toString())
      
      // Calculate what reserves would be after closing
      const newBaseReserve = BigInt(baseReserve) + BigInt(positionSize)
      console.log('New base reserve would be:', newBaseReserve.toString())
      
      if (newBaseReserve <= 0n) {
        throw new Error('Cannot close position: Would result in invalid AMM reserves')
      }

      try {
        // Try to execute without gas estimation first
        const tx = await perpetualWrite.closePosition()
        return await tx.wait()
      } catch (error: any) {
        console.log('Close position error details:', error)
        // Handle specific contract errors
        if (error.code === 'CALL_EXCEPTION') {
          if (error.data === '0xe450d38c') {
            throw new Error('Cannot close position: Invalid reserves state')
          } else if (error.reason) {
            throw new Error(`Contract error: ${error.reason}`)
          } else {
            throw new Error('Transaction would fail: Check your position status')
          }
        }
        throw error
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-data'] })
      queryClient.invalidateQueries({ queryKey: ['market-data'] })
    },
    onError: (error) => {
      console.error('Error closing position:', error)
    }
  })

  const liquidatePositionMutation = useMutation({
    mutationFn: async (userAddress: string) => {
      if (!contracts) {
        throw new Error('Contracts not initialized')
      }

      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual
      const tx = await perpetualWrite.liquidate(userAddress)
      return await tx.wait()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-data'] })
      queryClient.invalidateQueries({ queryKey: ['market-data'] })
    }
  })

  return {
    openPosition: openPositionMutation,
    closePosition: closePositionMutation,
    liquidatePosition: liquidatePositionMutation
  }
}