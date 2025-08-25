import { useQuery } from '@tanstack/react-query'
import { useContracts } from './useContracts'
import { fetchFundingRateData } from '@/services/contracts'

export function useFundingRateQuery() {
  const { contracts, isWrongNetwork, provider } = useContracts()

  return useQuery({
    queryKey: ['funding-rate'],
    queryFn: () => fetchFundingRateData(contracts!),
    enabled: Boolean(contracts && provider && !isWrongNetwork),
    staleTime: 30 * 1000,
    refetchInterval: 30 * 1000,
    retry: 3
  })
}