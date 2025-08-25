import { useCallback } from 'react'
import { useAccount } from 'wagmi'
import { useContracts } from './useContracts'
import { useUserData } from './useUserData'
import { useTradingStore } from '@/store/trading'
import { parseUnits } from 'ethers'

export function useTrading() {
  const { address } = useAccount()
  const { contracts } = useContracts()
  const { fetchUserData } = useUserData()
  const { 
    tradeDirection, 
    tradeSize, 
    tradeMargin, 
    setLoading, 
    setError, 
    resetTradingForm 
  } = useTradingStore()

  const openPosition = useCallback(async () => {
    if (!contracts) {
      throw new Error('Contracts not initialized')
    }

    if (!tradeSize || !tradeMargin) {
      throw new Error('Please enter position size and margin')
    }

    try {
      setLoading(true)
      setError(null)

      const sizeValue = parseFloat(tradeSize)
      const marginValue = parseFloat(tradeMargin)

      // ✅ FIX CONTRACT ERROR: Validate inputs and add better error handling
      if (sizeValue <= 0 || marginValue <= 0) {
        throw new Error('Position size and margin must be greater than 0')
      }

      // ✅ FIX DECIMALS: Ensure proper precision for contract calls
      // Both size and margin should be in 18 decimals (vVOL and USDC now both use 18 decimals)
      const sizeDelta = parseUnits(sizeValue.toString(), 18)
      const marginDelta = parseUnits(marginValue.toString(), 18)
      
      console.log('Decimal check:', {
        sizeValue,
        marginValue,
        sizeDelta: sizeDelta.toString(),
        marginDelta: marginDelta.toString(),
        sizeInVVOL: Number(sizeDelta) / 1e18,
        marginInUSDC: Number(marginDelta) / 1e18
      })

      // Make size negative for short positions
      const finalSizeDelta = tradeDirection === 'short' ? -sizeDelta : sizeDelta

      console.log('Opening position with:', {
        finalSizeDelta: finalSizeDelta.toString(),
        marginDelta: marginDelta.toString(),
        direction: tradeDirection
      })

      // Use write contracts for transactions
      const usdcWrite = contracts.usdcWrite || contracts.usdc
      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual

      // ✅ FIX: Check allowance first and only approve if needed
      if (!address) throw new Error('Wallet not connected')
      
      const currentAllowance = await contracts.usdc.allowance(
        address,
        contracts.perpetual.target
      )
      
      if (currentAllowance < marginDelta) {
        console.log('Approving USDC spending...')
        const approveTx = await usdcWrite.approve(
          contracts.perpetual.target,
          marginDelta * BigInt(2) // Approve double to avoid repeated approvals
        )
        await approveTx.wait()
        console.log('✅ USDC approved')
      }

      // ✅ FIX: Add comprehensive validation before transaction
      console.log('About to check contract requirements...')
      
      // Check user's USDC balance
      const userBalance = await contracts.usdc.balanceOf(address)
      if (userBalance < marginDelta) {
        throw new Error(`Insufficient USDC balance. Need ${Number(marginDelta) / 1e18} USDC, have ${Number(userBalance) / 1e18}`)
      }
      
      // ✅ NEW: Use contract preview functions to validate trade
      try {
        console.log('Checking trade preview...')
        const tradePreview = await contracts.perpetual.getTradePreview(finalSizeDelta)
        console.log('Trade preview:', {
          averagePrice: tradePreview.averagePrice.toString(),
          priceImpact: tradePreview.priceImpact.toString(),
          tradingFeeCost: tradePreview.tradingFeeCost.toString()
        })
        
        // ✅ CHECK PRICE IMPACT: Reject trades with excessive price impact
        const priceImpactPercent = Number(tradePreview.priceImpact) / 1e18
        if (priceImpactPercent > 0.1) { // Reject if price impact > 10%
          throw new Error(`Price impact too high: ${(priceImpactPercent * 100).toFixed(2)}%. Try a smaller position size or check market liquidity.`)
        }
        
        const requiredMargin = await contracts.perpetual.getRequiredMargin(finalSizeDelta)
        console.log('Required margin:', requiredMargin.toString(), 'Provided margin:', marginDelta.toString())
        
        if (marginDelta < requiredMargin) {
          throw new Error(`Insufficient margin. Required: ${Number(requiredMargin) / 1e18} USDC, Provided: ${Number(marginDelta) / 1e18} USDC`)
        }
      } catch (previewError: any) {
        console.error('Trade preview failed:', previewError)
        throw new Error(`Trade validation failed: ${previewError.message || 'Position parameters are invalid'}`)
      }
      
      // ✅ FIX: Add gas estimation before actual call  
      let tx: any
      try {
        const estimatedGas = await perpetualWrite.openPosition.estimateGas(finalSizeDelta, marginDelta)
        console.log('Estimated gas:', estimatedGas.toString())
        
        // Open position with increased gas limit
        tx = await perpetualWrite.openPosition(finalSizeDelta, marginDelta, {
          gasLimit: estimatedGas * BigInt(120) / BigInt(100) // 20% buffer
        })
        await tx.wait()
        console.log('✅ Position opened successfully')
      } catch (gasError: any) {
        console.error('Gas estimation failed:', gasError)
        
        // ✅ BETTER ERROR HANDLING: More specific error messages
        if (gasError.data === '0x6979bd5a') {
          throw new Error('Position would be invalid. This could be due to: insufficient margin, position too large, or market conditions. Try reducing position size or increasing margin.')
        }
        throw new Error(`Transaction would fail: ${gasError.reason || gasError.message || 'Unknown error'}`)
      }

      // Refresh user data and reset form
      await fetchUserData()
      resetTradingForm()

      return tx
    } catch (error: any) {
      console.error('Error opening position:', error)
      
      // ✅ ENHANCED ERROR HANDLING: Better error messages
      let errorMessage = 'Failed to open position'
      
      if (error.code === 'CALL_EXCEPTION') {
        if (error.data === '0x6979bd5a') {
          errorMessage = 'Insufficient balance or margin. Please check your USDC balance and try a smaller position.'
        } else {
          errorMessage = `Contract error: ${error.reason || 'Transaction would revert'}`
        }
      } else if (error.message?.includes('user rejected')) {
        errorMessage = 'Transaction rejected by user'
      } else if (error.message?.includes('insufficient funds')) {
        errorMessage = 'Insufficient funds for gas or transaction'
      } else {
        errorMessage = error.message || 'Failed to open position'
      }
      
      setError(errorMessage)
      throw error
    } finally {
      setLoading(false)
    }
  }, [
    contracts,
    tradeDirection,
    tradeSize,
    tradeMargin,
    setLoading,
    setError,
    fetchUserData,
    resetTradingForm
  ])

  const closePosition = useCallback(async () => {
    if (!contracts) {
      throw new Error('Contracts not initialized')
    }

    try {
      setLoading(true)
      setError(null)

      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual
      const tx = await perpetualWrite.closePosition()
      await tx.wait()

      // Refresh user data
      await fetchUserData()

      return tx
    } catch (error) {
      console.error('Error closing position:', error)
      setError(error instanceof Error ? error.message : 'Failed to close position')
      throw error
    } finally {
      setLoading(false)
    }
  }, [contracts, setLoading, setError, fetchUserData])

  const liquidatePosition = useCallback(async (userAddress: string) => {
    if (!contracts) {
      throw new Error('Contracts not initialized')
    }

    try {
      setLoading(true)
      setError(null)

      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual
      const tx = await perpetualWrite.liquidate(userAddress)
      await tx.wait()

      // Refresh user data
      await fetchUserData()

      return tx
    } catch (error) {
      console.error('Error liquidating position:', error)
      setError(error instanceof Error ? error.message : 'Failed to liquidate position')
      throw error
    } finally {
      setLoading(false)
    }
  }, [contracts, setLoading, setError, fetchUserData])

  const calculateEstimatedValues = useCallback(() => {
    const sizeValue = parseFloat(tradeSize) || 0
    const marginValue = parseFloat(tradeMargin) || 0
    const { market } = useTradingStore.getState()
    
    // Use real market data for calculations
    const estimatedEntryPrice = market.vvolPrice
    const leverage = sizeValue > 0 && marginValue > 0 ? (sizeValue * estimatedEntryPrice) / marginValue : 1
    const isLong = tradeDirection === 'long'
    
    // Calculate liquidation price based on maintenance margin (5%)
    const maintenanceMargin = 0.05
    const estimatedLiquidationPrice = isLong 
      ? estimatedEntryPrice * (1 - (1 / leverage) + maintenanceMargin)
      : estimatedEntryPrice * (1 + (1 / leverage) - maintenanceMargin)
    
    return {
      estimatedEntryPrice,
      estimatedLiquidationPrice: Math.max(0, estimatedLiquidationPrice),
      tradingFee: marginValue * 0.001 // 0.1% trading fee from constants
    }
  }, [tradeSize, tradeMargin, tradeDirection])

  return {
    openPosition,
    closePosition,
    liquidatePosition,
    calculateEstimatedValues
  }
}