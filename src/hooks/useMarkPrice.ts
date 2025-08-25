/**
 * Hook for real-time mark price updates
 */

import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useContracts } from './useContracts'

export function useMarkPrice() {
  const { contracts } = useContracts()
  const [livePrice, setLivePrice] = useState<number | null>(null)

  // Fetch initial mark price
  const { data: initialPrice } = useQuery({
    queryKey: ['mark-price'],
    queryFn: async () => {
      if (!contracts) return null
      const price = await contracts.perpetual.getMarkPrice()
      return Number(price) / 1e18
    },
    enabled: Boolean(contracts),
    refetchInterval: 10 * 1000 // Fallback polling every 10 seconds
  })

  // Listen for real-time price updates from trades
  useEffect(() => {
    if (!contracts) return

    const handleTradeUpdate = (trader: string, sizeDelta: bigint, marginDelta: bigint, averagePrice: bigint) => {
      const newPrice = Number(averagePrice) / 1e18
      setLivePrice(newPrice)
    }

    contracts.perpetual.on('PositionOpened', handleTradeUpdate)

    return () => {
      contracts.perpetual.off('PositionOpened', handleTradeUpdate)
    }
  }, [contracts])

  return livePrice ?? initialPrice ?? 0
}