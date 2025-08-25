import { useEffect, useCallback } from 'react'
import { useAccount } from 'wagmi'
import { useContracts } from './useContracts'
import { useTradingStore } from '@/store/trading'

export function useUserData() {
  const { address } = useAccount()
  const { contracts, isWrongNetwork, provider } = useContracts()
  const { setUserData, setLoading, setError } = useTradingStore()

  const fetchUserData = useCallback(async () => {
    if (!contracts || !address || !provider) {
      setUserData({
        address: null,
        usdcBalance: 0,
        position: null,
        liquidationRisk: false
      })
      return
    }

    if (isWrongNetwork) {
      setError('Please switch to Hyperliquid Testnet (Chain ID: 998)')
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)

      // ✅ NETWORK CHECK: Verify we're still on the right network before any calls
      const network = await provider.getNetwork()
      if (network.chainId !== BigInt(998)) {
        throw new Error(`Wrong network: Expected 998, got ${network.chainId}`)
      }

      // 🆕 Use new comprehensive data fetching approach
      const [
        positionDetails,
        usdcBalance,
        allowance
      ] = await Promise.all([
        contracts.perpetual.getPositionDetails(address),
        contracts.usdc.balanceOf(address),
        contracts.usdc.allowance(address, contracts.perpetual.target)
      ])

      
      // Format position data - need to handle mixed decimal formats
      // Old positions may have 6-decimal margin, new positions use 18-decimal margin
      const marginRaw = Number(positionDetails.margin)
      const unrealizedPnlRaw = Number(positionDetails.unrealizedPnl)
      const notionalValueRaw = Number(positionDetails.notionalValue)
      
      // Auto-detect format based on size - if values are huge, they're probably in wrong decimal format
      const marginConverted = marginRaw > 1e12 ? marginRaw / 1e18 : marginRaw / 1e6
      const pnlConverted = Math.abs(unrealizedPnlRaw) > 1e12 ? unrealizedPnlRaw / 1e18 : unrealizedPnlRaw / 1e6
      const notionalConverted = notionalValueRaw > 1e12 ? notionalValueRaw / 1e18 : notionalValueRaw / 1e6
      
      const formattedPosition = positionDetails.size !== 0n ? {
        size: Number(positionDetails.size) / 1e18,
        margin: marginConverted,
        entryPrice: Number(positionDetails.entryPrice) / 1e18,
        lastCumulativeFundingRate: 0, // Not in new struct, will get from separate call if needed
        isLong: Number(positionDetails.size) > 0,
        currentPnL: pnlConverted,
        liquidationPrice: Number(positionDetails.markPrice) / 1e18, // Mark price from contract
        // 🆕 NEW: Additional data from comprehensive function
        notionalValue: notionalConverted,
        leverage: Number(positionDetails.leverage) / 1e18,
        marginRatio: Number(positionDetails.marginRatio) / 1e18,
        markPrice: Number(positionDetails.markPrice) / 1e18
      } : null

      setUserData({
        address,
        usdcBalance: Number(usdcBalance) / 1e18,
        position: formattedPosition,
        liquidationRisk: positionDetails.isLiquidatable,
        // 🆕 NEW: Add allowance data
        allowance: Number(allowance) / 1e18
      })
    } catch (error: any) {
      console.error('Error fetching user data:', error)
      
      // ✅ ENHANCED ERROR HANDLING: Better network error detection
      if (error.code === 'NETWORK_ERROR' || error.message?.includes('network changed')) {
        setError('Network error: Please ensure you are connected to Hyperliquid Testnet (Chain ID: 998)')
      } else if (error.message?.includes('Wrong network')) {
        setError('Please switch to Hyperliquid Testnet (Chain ID: 998)')
      } else {
        setError(error instanceof Error ? error.message : 'Failed to fetch user data')
      }
    } finally {
      setLoading(false)
    }
  }, [contracts, address, provider, isWrongNetwork, setUserData, setLoading, setError])

  useEffect(() => {
    // ✅ NETWORK VALIDATION: Only fetch if we have contracts, address, and correct network
    if (contracts && address && provider && !isWrongNetwork) {
      fetchUserData()
    }
  }, [contracts, address, provider, isWrongNetwork, fetchUserData])

  useEffect(() => {
    // ✅ NETWORK VALIDATION: Set up polling only if network is correct
    if (contracts && address && provider && !isWrongNetwork) {
      const interval = setInterval(() => {
        // Only poll if still on correct network
        fetchUserData()
      }, 60000) // Every 60 seconds to reduce RPC calls
      return () => clearInterval(interval)
    }
  }, [contracts, address, provider, isWrongNetwork, fetchUserData])

  return {
    fetchUserData
  }
}