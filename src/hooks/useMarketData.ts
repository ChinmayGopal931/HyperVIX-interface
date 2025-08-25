/**
 * @deprecated Use useMarketQuery instead
 * This hook is kept for backward compatibility but should not be used in new code
 */

import { useEffect, useCallback, useRef } from 'react'
import { useContracts } from './useContracts'
import { useTradingStore } from '@/store/trading'

export function useMarketData() {
  const { contracts, isWrongNetwork, provider } = useContracts()
  const setMarketData = useTradingStore(state => state.setMarketData)
  const setLoading = useTradingStore(state => state.setLoading)
  const setError = useTradingStore(state => state.setError)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const fetchMarketData = useCallback(async () => {
    // ✅ NETWORK VALIDATION: Don't fetch if no contracts or wrong network
    if (!contracts || !provider) {
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


      // Test each contract call individually
      const volatility = await contracts.oracle.getAnnualizedVolatility()

      // Get vAMM reserves for manual mark price calculation
      const vBaseReserve = await contracts.perpetual.vBaseAssetReserve()
      const vQuoteReserve = await contracts.perpetual.vQuoteAssetReserve()
      
      // ✅ FIXED: Proper decimal handling for mark price calculation
      // Both vQuoteReserve and vBaseReserve are now in 18 decimals
      // Mark price = vQuoteReserve / vBaseReserve (both in 18 decimals)
      const markPrice = (vQuoteReserve * BigInt(1e18)) / vBaseReserve


      const lastUpdate = await contracts.oracle.getLastUpdateTime()

      const fundingRate = await contracts.perpetual.cumulativeFundingRate()

      const lastFundingTime = await contracts.perpetual.lastFundingTime()
      const fundingInterval = await contracts.perpetual.fundingInterval()

      // Get Open Interest data
      const totalLongSize = await contracts.perpetual.totalLongSize()
      const totalShortSize = await contracts.perpetual.totalShortSize()

      // Get system parameters
      const maxLeverage = await contracts.perpetual.maxLeverage()
      const maintenanceMarginRatio = await contracts.perpetual.maintenanceMarginRatio()
      const liquidationFee = await contracts.perpetual.liquidationFee()
      const tradingFee = await contracts.perpetual.tradingFee()

      // Fetch Hyperliquid price (with fallback)
      let ethPrice = 3000 // Default fallback
      try {
        const response = await fetch('https://api.hyperliquid.xyz/info', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'allMids' })
        })
        const prices = await response.json()
        ethPrice = Number(prices.ETH || prices.UETH || 3000)
      } catch (apiError) {
        console.warn('Hyperliquid API failed, using fallback price:', apiError)
      }

      // Calculate derived values
      const totalLongs = Number(totalLongSize) / 1e18
      const totalShorts = Number(totalShortSize) / 1e18
      const totalOpenInterest = totalLongs + totalShorts
      const netExposure = Math.abs(totalLongs - totalShorts)

      const formattedData = {
        // Volatility as percentage (already scaled correctly)
        volatility: Number(volatility) / 1e18,
        
        // ✅ FIXED: Use manually calculated mark price
        vvolPrice: Number(markPrice) / 1e18,
        
        // Index price from API
        indexPrice: ethPrice,
        
        lastUpdate: Number(lastUpdate),
        
        // Funding rate
        fundingRate: Number(fundingRate) / 1e18,
        nextFundingTime: Number(lastFundingTime) + Number(fundingInterval),
        
        volume24h: 0, // Not available on-chain
        
        totalLiquidity: {
          vvol: Number(vBaseReserve) / 1e18,
          usdc: Number(vQuoteReserve) / 1e18  // USDC now uses 18 decimals
        },
        
        // Open interest data
        openInterest: totalOpenInterest,
        openInterestBreakdown: {
          totalLongs,
          totalShorts,
          netExposure
        },
        
        // System parameters
        maxLeverage: Number(maxLeverage) / 1e18,
        maintenanceMargin: Number(maintenanceMarginRatio) / 1e18 * 100,
        liquidationFeeRate: Number(liquidationFee) / 1e18 * 100,
        tradingFeeRate: Number(tradingFee) / 1e18 * 100
      }

      setMarketData(formattedData)

    } catch (error: any) {
      console.error('❌ Error fetching market data:', error)
      
      // ✅ ENHANCED ERROR HANDLING: Better network error detection
      if (error.code === 'NETWORK_ERROR' || error.message?.includes('network changed')) {
        setError('Network error: Please ensure you are connected to Hyperliquid Testnet (Chain ID: 998)')
      } else if (error.code === 'CALL_EXCEPTION') {
        setError(`Contract call failed: ${error.data || 'Unknown selector'}. Check ABI compatibility.`)
      } else if (error.message?.includes('Wrong network')) {
        setError('Please switch to Hyperliquid Testnet (Chain ID: 998)')
      } else {
        setError(error instanceof Error ? error.message : 'Failed to fetch market data')
      }
    } finally {
      setLoading(false)
    }
  }, [contracts, provider, isWrongNetwork]) // ✅ FIXED: Include all dependencies

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // ✅ NETWORK VALIDATION: Only fetch if contracts are available and network is correct
    if (contracts && provider && !isWrongNetwork) {
      fetchMarketData()
      
      // ✅ REDUCE RERENDERS: Increase interval to reduce frequency
      intervalRef.current = setInterval(fetchMarketData, 30000) // Every 30 seconds instead of 15
    } 

    // Cleanup on unmount or contracts change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [contracts, provider, isWrongNetwork]) // ✅ REDUCE RERENDERS: Remove fetchMarketData from deps

  return {
    fetchMarketData
  }
}