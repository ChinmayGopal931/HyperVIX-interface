/**
 * Event listener hook for contract events using TanStack Query
 */

import { useEffect, useCallback } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { useContracts } from './useContracts'
import { useToast } from './useToast'
import { formatCurrency } from '@/lib/utils'

export function useEvents() {
  const { contracts } = useContracts()
  const { address } = useAccount()
  const queryClient = useQueryClient()
  const { toast } = useToast()

  // Invalidate queries to refresh data
  const invalidateUserData = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['user-data'] })
  }, [queryClient])

  const invalidateMarketData = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['market-data'] })
    queryClient.invalidateQueries({ queryKey: ['funding-rate'] })
  }, [queryClient])

  const handlePositionOpened = useCallback((trader: string, sizeDelta: bigint, marginDelta: bigint, averagePrice: bigint) => {
    if (trader.toLowerCase() === address?.toLowerCase()) {
      const size = Number(sizeDelta) / 1e18
      const margin = Number(marginDelta) / 1e18 // Updated to 18 decimals
      const price = Number(averagePrice) / 1e18
      const isLong = Number(sizeDelta) > 0
      
      toast({
        title: `${isLong ? 'Long' : 'Short'} Position Opened`,
        description: `Size: ${Math.abs(size).toFixed(6)} vVOL at ${formatCurrency(price)}`,
        variant: 'default'
      })
      
      invalidateUserData()
      invalidateMarketData()
    }
  }, [address, toast, invalidateUserData, invalidateMarketData])

  const handlePositionClosed = useCallback((trader: string, size: bigint, margin: bigint, pnl: bigint) => {
    if (trader.toLowerCase() === address?.toLowerCase()) {
      const pnlValue = Number(pnl) / 1e18 // Updated to 18 decimals
      const isProfitable = pnlValue > 0
      
      toast({
        title: 'Position Closed',
        description: `PnL: ${isProfitable ? '+' : ''}${formatCurrency(pnlValue)}`,
        variant: isProfitable ? 'default' : 'destructive'
      })
      
      invalidateUserData()
      invalidateMarketData()
    }
  }, [address, toast, invalidateUserData, invalidateMarketData])

  const handleVolatilityUpdated = useCallback((newVolatility: bigint, cumulativePrice: bigint, timestamp: bigint) => {
    // Refresh market data when volatility updates
    invalidateMarketData()
  }, [invalidateMarketData])

  const handleFundingSettled = useCallback((fundingRate: bigint, cumulativeFundingRate: bigint, timestamp: bigint) => {
    // Refresh all data when funding is settled
    invalidateMarketData()
    if (address) {
      invalidateUserData()
    }
  }, [invalidateMarketData, invalidateUserData, address])

  const handleLiquidated = useCallback((trader: string, liquidator: string, size: bigint, liquidationReward: bigint) => {
    if (trader.toLowerCase() === address?.toLowerCase()) {
      toast({
        title: 'Position Liquidated',
        description: 'Your position has been liquidated due to insufficient margin',
        variant: 'destructive',
        duration: 10000
      })
      
      invalidateUserData()
      invalidateMarketData()
    }
  }, [address, toast, invalidateUserData, invalidateMarketData])

  useEffect(() => {
    if (!contracts) return

    // Set up event listeners
    const oracleContract = contracts.oracle
    const perpetualContract = contracts.perpetual

    // Oracle events
    oracleContract.on('VolatilityUpdated', handleVolatilityUpdated)

    // Perpetual events
    perpetualContract.on('PositionOpened', handlePositionOpened)
    perpetualContract.on('PositionClosed', handlePositionClosed)
    perpetualContract.on('FundingSettled', handleFundingSettled)
    perpetualContract.on('Liquidated', handleLiquidated)

    // Cleanup function
    return () => {
      oracleContract.removeAllListeners('VolatilityUpdated')
      perpetualContract.removeAllListeners('PositionOpened')
      perpetualContract.removeAllListeners('PositionClosed')
      perpetualContract.removeAllListeners('FundingSettled')
      perpetualContract.removeAllListeners('Liquidated')
    }
  }, [
    contracts,
    handleVolatilityUpdated,
    handlePositionOpened,
    handlePositionClosed,
    handleFundingSettled,
    handleLiquidated
  ])

  return {
    // Event handlers are automatically set up
    // Expose manual refresh functions if needed
    refreshUserData: invalidateUserData,
    refreshMarketData: invalidateMarketData
  }
}