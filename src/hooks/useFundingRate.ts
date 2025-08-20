import { useEffect, useState } from 'react'
import { useContracts } from './useContracts'
import { useTradingStore } from '@/store/trading'

export function useFundingRate() {
  const { contracts } = useContracts()
  const { market } = useTradingStore()
  const [predictedRate, setPredictedRate] = useState(0)
  const [lastSettledRate, setLastSettledRate] = useState(0)
  const [loading, setLoading] = useState(false)

  // Calculate predicted funding rate
  const calculatePredictedRate = () => {
    if (market.vvolPrice > 0 && market.indexPrice > 0 && market.volatility > 0) {
      // Calculate the theoretical fair value of vVOL based on ETH volatility
      // vVOL should track ETH's volatility, so fair value = volatility% * some base factor
      const theoreticalVVolPrice = market.volatility / 100 * 0.20 // Rough approximation: 20% of volatility as price
      
      // Premium = Mark Price - Theoretical Fair Price
      const premium = market.vvolPrice - theoreticalVVolPrice
      
      // Predicted funding rate = premium as percentage of mark price
      // This gets applied hourly, so small percentages are normal
      const predicted = (premium / market.vvolPrice) * 100
      
      setPredictedRate(predicted)
      return predicted
    }
    return 0
  }

  // Fetch last settled funding rate from events
  const fetchLastSettledRate = async () => {
    if (!contracts) return

    try {
      setLoading(true)
      
      // Get current block number
      const currentBlock = await contracts.perpetual.runner?.provider?.getBlockNumber()
      if (!currentBlock) throw new Error('Unable to get current block number')
      const chunkSize = 999 // Stay under 1000 block limit
      let fundingEvents: any[] = []
      
      // Search backwards in chunks until we find an event or reach reasonable limit
      for (let i = 0; i < 10; i++) { // Max 10 chunks (9990 blocks)
        const fromBlock = currentBlock - (chunkSize * (i + 1))
        const toBlock = currentBlock - (chunkSize * i)
        
        if (fromBlock < 0) break
        
        try {
          const chunkEvents = await contracts.perpetual.queryFilter(
            contracts.perpetual.filters.FundingSettled(),
            fromBlock,
            toBlock
          )
          
          if (chunkEvents.length > 0) {
            fundingEvents = chunkEvents
            break // Found events, stop searching
          }
        } catch (chunkError) {
          console.warn(`Failed to fetch events from block ${fromBlock} to ${toBlock}:`, chunkError)
          continue // Try next chunk
        }
      }

      console.log('Funding Events:', fundingEvents)

      if (fundingEvents.length > 0) {
        // Get the most recent event
        const lastEvent = fundingEvents[fundingEvents.length - 1]
        const rate = Number(lastEvent.args.fundingRate) / Math.pow(10, 18)
        setLastSettledRate(rate)
      }
    } catch (error) {
      console.error('Failed to fetch funding rate events:', error)
    } finally {
      setLoading(false)
    }
  }

  // Update predicted rate when market data changes
  useEffect(() => {
    calculatePredictedRate()
  }, [market.vvolPrice, market.indexPrice])

  // Fetch historical rate on mount
  useEffect(() => {
    fetchLastSettledRate()
  }, [contracts])

  return {
    predictedRate,
    lastSettledRate,
    loading,
    calculatePredictedRate,
    fetchLastSettledRate
  }
}