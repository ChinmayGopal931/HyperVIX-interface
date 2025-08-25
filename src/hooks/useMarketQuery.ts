import { useQuery } from '@tanstack/react-query'
import { useContracts } from './useContracts'
import { fetchMarketData } from '@/services/contracts'

export function useMarketQuery() {
  const { contracts, isWrongNetwork, provider } = useContracts()

  return useQuery({
    queryKey: ['market-data'],
    queryFn: () => fetchMarketData(contracts!, provider!),
    enabled: Boolean(contracts && provider && !isWrongNetwork),
    staleTime: 30 * 1000,
    refetchInterval: 30 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
  })
}