import { useEffect, useCallback } from 'react'
import { useContracts } from './useContracts'
import { useTradingStore } from '@/store/trading'

export function useMarketData() {
  const { contracts } = useContracts()
  const { setMarketData, setLoading, setError } = useTradingStore()

  const fetchMarketData = useCallback(async () => {
    if (!contracts) return

    try {
      setLoading(true)
      setError(null)

      // --- 1. Fetch on-chain data and off-chain price in parallel ---
      const [
        onChainData,
        hyperliquidResponse
      ] = await Promise.all([
        // 🆕 NEW: Use comprehensive data fetching functions
        Promise.all([
          contracts.oracle.getAnnualizedVolatility(),
          contracts.perpetual.getMarkPrice(),
          contracts.oracle.getLastUpdateTime(),
          contracts.perpetual.vBaseAssetReserve(),
          contracts.perpetual.vQuoteAssetReserve(),
          contracts.perpetual.cumulativeFundingRate(),
          contracts.perpetual.lastFundingTime(),
          contracts.perpetual.fundingInterval(),
          contracts.perpetual.getTotalOpenInterest(), // 🆕 NEW: Returns [totalLongs, totalShorts, netExposure]
          contracts.perpetual.maxLeverage(),
          contracts.perpetual.maintenanceMarginRatio(),
          contracts.perpetual.liquidationFee(),
          contracts.perpetual.tradingFee()
        ]),
        // Fetch Hyperliquid price API
        fetch('https://api.hyperliquid.xyz/info', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'allMids' })
        })
      ]);

      // --- 2. Process the results ---
      const [
        volatility,
        markPrice,
        lastUpdate,
        vBaseReserve,
        vQuoteReserve,
        fundingRate,
        lastFundingTime,
        fundingInterval,
        openInterestData, // 🆕 NEW: [totalLongs, totalShorts, netExposure]
        maxLeverage,
        maintenanceMarginRatio,
        liquidationFee,
        tradingFee
      ] = onChainData;

      console.log(        volatility,
        markPrice,
        lastUpdate,
        vBaseReserve,
        vQuoteReserve,
        fundingRate,
        lastFundingTime,
        fundingInterval,
        openInterestData, // 🆕 NEW: [totalLongs, totalShorts, netExposure]
        maxLeverage,
        maintenanceMarginRatio,
        liquidationFee,
        tradingFee)

      const hyperliquidPrices = await hyperliquidResponse.json();
      // Note: The symbol might be 'UETH' or another remapped name.
      // Check the API response if 'ETH' doesn't work.
      const ethPrice = Number(hyperliquidPrices.ETH);

      // --- 3. Format and set the data ---
      console.log('Raw contract data:', {
        volatility: volatility.toString(),
        markPrice: markPrice.toString(),
        ethPrice,
        fundingRate: fundingRate.toString(),
        openInterestData: openInterestData,
        maxLeverage: maxLeverage.toString()
      })

      // 🆕 NEW: Process open interest data
      const [totalLongs, totalShorts, netExposure] = openInterestData
      const totalOpenInterest = Number(totalLongs) / 1e18 + Number(totalShorts) / 1e18

      const formattedData = {
        volatility: Number(volatility) / 1e18, // Remove * 100, should already be percentage
        vvolPrice: (markPrice).toString() , // 🔧 FIX: Mark price should be 18 decimals, not 6
        indexPrice: ethPrice, // ETH price from API
        lastUpdate: Number(lastUpdate),
        fundingRate: Number(fundingRate) / 1e18,
        nextFundingTime: Number(lastFundingTime) + Number(fundingInterval),
        volume24h: 0,
        totalLiquidity: {
          vvol: Number(vBaseReserve) / 1e18,
          usdc: Number(vQuoteReserve) / 1e6
        },
        // 🆕 NEW: Enhanced market metrics with open interest breakdown
        openInterest: totalOpenInterest, // Total of all positions
        openInterestBreakdown: {
          totalLongs: Number(totalLongs) / 1e18,
          totalShorts: Number(totalShorts) / 1e18,
          netExposure: Number(netExposure) / 1e18
        },
        maxLeverage: Number(maxLeverage) / 1e18, // Convert from wei to normal number
        maintenanceMargin: Number(maintenanceMarginRatio) / 1e18 * 100, // Convert to percentage
        liquidationFeeRate: Number(liquidationFee) / 1e18 * 100, // Convert to percentage
        tradingFeeRate: Number(tradingFee) / 1e18 * 100 // Convert to percentage
      }

      setMarketData(formattedData)
    } catch (error) {
      console.error('Error fetching market data:', error)
      setError(error instanceof Error ? error.message : 'Failed to fetch market data')
    } finally {
      setLoading(false)
    }
  }, [contracts, setMarketData, setLoading, setError])


  useEffect(() => {
    fetchMarketData()
    
    // Set up a single, faster polling interval for all market data
    const marketDataInterval = setInterval(fetchMarketData, 10000) // Every 10 seconds

    return () => {
      clearInterval(marketDataInterval)
    }
  }, [fetchMarketData])

  return {
    fetchMarketData
  }
}