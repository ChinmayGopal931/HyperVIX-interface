/**
 * Hook for fetching historical trade data from contract events
 */

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useContracts } from './useContracts'

export interface TradeDataPoint {
  timestamp: number
  time: string
  markPrice: number
  indexPrice: number
  size: number
  side: 'buy' | 'sell'
  trader: string
}

export interface ChartDataPoint {
  timestamp: number
  time: string
  markPrice: number
  indexPrice: number
  volume: number
}

const DEPLOYMENT_BLOCK = 0 // Replace with actual deployment block
const CHUNK_SIZE = 1000
const MAX_BLOCKS = 5000 // Reduced for better performance

async function fetchHistoricalTrades(contracts: any): Promise<TradeDataPoint[]> {
  if (!contracts) return []

  try {
    const provider = contracts.perpetual.runner?.provider
    if (!provider) throw new Error('Provider not available')

    const currentBlock = await provider.getBlockNumber()
    const startBlock = Math.max(DEPLOYMENT_BLOCK, currentBlock - MAX_BLOCKS)

    console.log(`Fetching trades from block ${startBlock} to ${currentBlock}`)

    const tradeEvents = []
    
    // Fetch in chunks to avoid RPC limits
    for (let fromBlock = startBlock; fromBlock < currentBlock; fromBlock += CHUNK_SIZE) {
      const toBlock = Math.min(fromBlock + CHUNK_SIZE - 1, currentBlock)
      
      try {
        const events = await contracts.perpetual.queryFilter(
          contracts.perpetual.filters.PositionOpened(),
          fromBlock,
          toBlock
        )
        tradeEvents.push(...events)
      } catch (error) {
        console.warn(`Failed to fetch chunk ${fromBlock}-${toBlock}:`, error)
      }
    }

    // Get corresponding volatility data for index price
    const volatilityEvents = await contracts.oracle.queryFilter(
      contracts.oracle.filters.VolatilityUpdated(),
      startBlock,
      currentBlock
    ).catch(() => [])

    // Process trade events
    const trades: TradeDataPoint[] = []
    
    for (const event of tradeEvents.slice(-100)) { // Limit to recent trades
      try {
        const block = await event.getBlock()
        const args = (event as any).args
        
        // Find closest volatility reading for index price
        const closestVolEvent = volatilityEvents
          .filter(ve => ve.blockNumber <= event.blockNumber)
          .pop()
        
        const indexPrice = closestVolEvent 
          ? Number((closestVolEvent as any).args?.newVolatility || 0) / 1e18 * 100
          : 0

        trades.push({
          timestamp: block.timestamp * 1000,
          time: new Date(block.timestamp * 1000).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
          }),
          markPrice: Number(args.averagePrice) / 1e18,
          indexPrice,
          size: Math.abs(Number(args.sizeDelta)) / 1e18,
          side: Number(args.sizeDelta) > 0 ? 'buy' : 'sell',
          trader: args.trader
        })
      } catch (error) {
        console.warn('Failed to process trade event:', error)
      }
    }

    return trades.sort((a, b) => a.timestamp - b.timestamp)
  } catch (error) {
    console.error('Error fetching historical trades:', error)
    return []
  }
}

export function useTradeHistory() {
  const { contracts } = useContracts()
  const queryClient = useQueryClient()
  const [liveTrades, setLiveTrades] = useState<TradeDataPoint[]>([])

  // Fetch historical data
  const { data: historicalTrades, isLoading, error } = useQuery({
    queryKey: ['trade-history'],
    queryFn: () => fetchHistoricalTrades(contracts),
    enabled: Boolean(contracts),
    staleTime: 60 * 1000, // 1 minute
    retry: 2
  })

  // Listen for real-time trades
  useEffect(() => {
    if (!contracts) return

    const handleNewTrade = async (trader: string, sizeDelta: bigint, marginDelta: bigint, averagePrice: bigint, timestamp: bigint) => {
      try {
        // Get current index price
        const currentVolatility = await contracts.oracle.getAnnualizedVolatility()
        const indexPrice = Number(currentVolatility) / 1e18 * 100

        const newTrade: TradeDataPoint = {
          timestamp: Number(timestamp) * 1000,
          time: new Date(Number(timestamp) * 1000).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
          }),
          markPrice: Number(averagePrice) / 1e18,
          indexPrice,
          size: Math.abs(Number(sizeDelta)) / 1e18,
          side: Number(sizeDelta) > 0 ? 'buy' : 'sell',
          trader
        }

        setLiveTrades(prev => [...prev.slice(-49), newTrade]) // Keep last 50 trades
        
        // Update cache
        queryClient.setQueryData(['trade-history'], (oldData: TradeDataPoint[] | undefined) => {
          if (!oldData) return [newTrade]
          return [...oldData.slice(-99), newTrade] // Keep last 100 total
        })
      } catch (error) {
        console.error('Error processing new trade:', error)
      }
    }

    contracts.perpetual.on('PositionOpened', handleNewTrade)

    return () => {
      contracts.perpetual.off('PositionOpened', handleNewTrade)
    }
  }, [contracts, queryClient])

  // Combine historical and live data
  const allTrades = [...(historicalTrades || []), ...liveTrades]

  // Convert to chart data points (aggregate by time intervals)
  const chartData: ChartDataPoint[] = []
  const timeInterval = 5 * 60 * 1000 // 5 minute intervals

  if (allTrades.length > 0) {
    const startTime = allTrades[0].timestamp
    const endTime = Date.now()
    
    for (let time = startTime; time <= endTime; time += timeInterval) {
      const tradesInInterval = allTrades.filter(
        trade => trade.timestamp >= time && trade.timestamp < time + timeInterval
      )

      if (tradesInInterval.length > 0) {
        const lastTrade = tradesInInterval[tradesInInterval.length - 1]
        const totalVolume = tradesInInterval.reduce((sum, trade) => sum + trade.size, 0)

        chartData.push({
          timestamp: time,
          time: new Date(time).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit'
          }),
          markPrice: lastTrade.markPrice,
          indexPrice: lastTrade.indexPrice,
          volume: totalVolume
        })
      }
    }
  }

  return {
    trades: allTrades,
    chartData,
    isLoading,
    error
  }
}