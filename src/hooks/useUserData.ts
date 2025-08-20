import { useEffect, useCallback } from 'react'
import { useAccount } from 'wagmi'
import { useContracts } from './useContracts'
import { useTradingStore } from '@/store/trading'
import { calculateLiquidationPrice } from '@/lib/utils'

export function useUserData() {
  const { address } = useAccount()
  const { contracts } = useContracts()
  const { setUserData, setLoading, setError, market } = useTradingStore()

  const fetchUserData = useCallback(async () => {
    if (!contracts || !address) {
      setUserData({
        address: null,
        usdcBalance: 0,
        position: null,
        liquidationRisk: false
      })
      return
    }

    try {
      setLoading(true)
      setError(null)

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

      console.log('Raw position details:', positionDetails)

      // Format position data using the comprehensive position details
      const formattedPosition = positionDetails.size !== 0n ? {
        size: Number(positionDetails.size) / 1e18,
        margin: Number(positionDetails.margin) / 1e6, // USDC has 6 decimals
        entryPrice: Number(positionDetails.entryPrice) / 1e18,
        lastCumulativeFundingRate: 0, // Not in new struct, will get from separate call if needed
        isLong: Number(positionDetails.size) > 0,
        currentPnL: Number(positionDetails.unrealizedPnl) / 1e6, // USDC has 6 decimals
        liquidationPrice: Number(positionDetails.markPrice) / 1e18, // Mark price from contract
        // 🆕 NEW: Additional data from comprehensive function
        notionalValue: Number(positionDetails.notionalValue) / 1e6,
        leverage: Number(positionDetails.leverage) / 1e18,
        marginRatio: Number(positionDetails.marginRatio) / 1e18,
        markPrice: Number(positionDetails.markPrice) / 1e18
      } : null

      setUserData({
        address,
        usdcBalance: Number(usdcBalance) / 1e6,
        position: formattedPosition,
        liquidationRisk: positionDetails.isLiquidatable,
        // 🆕 NEW: Add allowance data
        allowance: Number(allowance) / 1e6
      })
    } catch (error) {
      console.error('Error fetching user data:', error)
      setError(error instanceof Error ? error.message : 'Failed to fetch user data')
    } finally {
      setLoading(false)
    }
  }, [contracts, address, setUserData, setLoading, setError])

  useEffect(() => {
    // Only fetch if we have contracts and address
    if (contracts && address) {
      fetchUserData()
    }
  }, [contracts, address, fetchUserData])

  useEffect(() => {
    // Set up less frequent polling to prevent flickering
    if (contracts && address) {
      const interval = setInterval(() => {
        // Only poll if we have contracts and address
        fetchUserData()
      }, 60000) // Every 60 seconds to reduce RPC calls
      return () => clearInterval(interval)
    }
  }, [contracts, address, fetchUserData])

  return {
    fetchUserData
  }
}