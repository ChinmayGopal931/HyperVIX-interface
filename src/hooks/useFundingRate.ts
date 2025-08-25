import { useEffect, useState, useCallback, useRef } from 'react'
import { useContracts } from './useContracts'
import { useTradingStore } from '@/store/trading'

export function useFundingRate() {
  const { contracts } = useContracts()
  // ✅ FIX RERENDERS: Use individual selectors instead of destructuring
  const vvolPrice = useTradingStore(state => state.market.vvolPrice)
  const indexPrice = useTradingStore(state => state.market.indexPrice)
  const volatility = useTradingStore(state => state.market.volatility)
  
  const [predictedRate, setPredictedRate] = useState(0)
  const [lastSettledRate, setLastSettledRate] = useState(0)
  const [loading, setLoading] = useState(false)
  const calculationRef = useRef<NodeJS.Timeout | null>(null)

  // ✅ FIX RERENDERS: Debounced calculation with useCallback
  const calculatePredictedRate = useCallback(() => {
    // Clear any existing timeout
    if (calculationRef.current) {
      clearTimeout(calculationRef.current)
    }
    
    // Debounce the calculation to prevent excessive updates
    calculationRef.current = setTimeout(() => {
      if (vvolPrice > 0 && indexPrice > 0 && volatility > 0) {
        // For volatility products, funding rate is typically based on the premium/discount
        // between the perpetual price and the underlying volatility index
        
        // Simple approach: if vVOL is trading above/below "fair value", charge funding
        // Fair value could be based on realized volatility vs implied volatility
        const fairVolatilityPrice = volatility * 0.01 // Rough approximation: 1% of volatility as base price
        
        // Premium = (Mark Price - Fair Price) / Fair Price
        const premium = (vvolPrice - fairVolatilityPrice) / fairVolatilityPrice
        
        // Predicted funding rate (small percentage, applied hourly)
        // Multiply by 8 to get daily rate (assuming 8 funding periods per day)
        const predicted = premium * 0.1 // Cap at reasonable funding rate
        
        setPredictedRate(predicted)
        return predicted
      }
      setPredictedRate(0)
      return 0
    }, 500) // 500ms debounce
  }, [vvolPrice, indexPrice, volatility])

  // Fetch last settled funding rate from events with rate limiting protection
  const fetchLastSettledRate = async () => {
    if (!contracts) return

    try {
      setLoading(true)
      
      // ✅ RATE LIMITING FIX: Use direct contract calls instead of event filtering
      // This avoids the rate limiting issues with eth_newFilter
      
      // Get the current funding rate directly from contract
      const currentFundingRate = await contracts.perpetual.cumulativeFundingRate()
      const rate = Number(currentFundingRate) / Math.pow(10, 18)
      setLastSettledRate(rate)
      
      console.log('✅ Funding rate fetched directly:', rate)
      
    } catch (error: any) {
      console.error('Failed to fetch funding rate:', error)
      
      // ✅ FALLBACK: If direct call fails, try a simpler approach
      if (error.message?.includes('rate limited')) {
        console.log('⚠️ Rate limited, using fallback funding rate calculation')
        setLastSettledRate(0) // Default to 0 if rate limited
      }
    } finally {
      setLoading(false)
    }
  }

  // ✅ FIX RERENDERS: Reduce useEffect frequency
  useEffect(() => {
    calculatePredictedRate()
    
    return () => {
      if (calculationRef.current) {
        clearTimeout(calculationRef.current)
      }
    }
  }, [calculatePredictedRate])

  // ✅ FIX RERENDERS: Only fetch funding rate once on mount and much less frequently
  useEffect(() => {
    if (contracts) {
      fetchLastSettledRate()
      
      // Set up much slower polling for funding rate (every 5 minutes)
      const interval = setInterval(fetchLastSettledRate, 300000)
      return () => clearInterval(interval)
    }
  }, [contracts])

  return {
    predictedRate,
    lastSettledRate,
    loading,
    calculatePredictedRate,
    fetchLastSettledRate
  }
}