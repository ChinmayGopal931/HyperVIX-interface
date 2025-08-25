import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { useContracts } from './useContracts'
import { fetchUserData } from '@/services/contracts'

export function useUserQuery() {
  const { address } = useAccount()
  const { contracts, isWrongNetwork, provider } = useContracts()

  return useQuery({
    queryKey: ['user-data', address],
    queryFn: async () => {
      if (!contracts || !address || !provider || isWrongNetwork) {
        return {
          address: null,
          usdcBalance: 0,
          position: null,
          liquidationRisk: false,
          allowance: 0
        }
      }

      return fetchUserData(contracts, address, provider)
    },
    enabled: Boolean(contracts && address && provider && !isWrongNetwork),
    staleTime: 10 * 1000,
    refetchInterval: 60 * 1000,
    retry: 3
  })
}