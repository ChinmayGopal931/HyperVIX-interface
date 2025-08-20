import { useEffect, useCallback } from 'react'
import { useContracts } from './useContracts'
import { useMarketData } from './useMarketData'
import { useUserData } from './useUserData'
import { useToast } from './useToast'
import { formatCurrency } from '@/lib/utils'

export function useEvents() {
  const { contracts, address } = useContracts()
  const { fetchMarketData } = useMarketData()
  const { fetchUserData } = useUserData()
  const { toast } = useToast()

  const handlePositionOpened = useCallback((trader: string, sizeDelta: bigint, marginDelta: bigint, averagePrice: bigint) => {
    if (trader.toLowerCase() === address?.toLowerCase()) {
      const size = Number(sizeDelta) / Math.pow(10, 18)
      const margin = Number(marginDelta) / Math.pow(10, 6)
      const price = Number(averagePrice) / Math.pow(10, 6)
      const isLong = Number(sizeDelta) > 0
      
      toast({
        title: `${isLong ? 'Long' : 'Short'} Position Opened`,
        description: `Size: ${Math.abs(size).toFixed(6)} vVOL at ${formatCurrency(price)}`,
        variant: 'default'
      })
      
      // Refresh user data
      fetchUserData()
    }
  }, [address, toast, fetchUserData])

  const handlePositionClosed = useCallback((trader: string, size: bigint, margin: bigint, pnl: bigint) => {
    if (trader.toLowerCase() === address?.toLowerCase()) {
      const positionSize = Number(size) / Math.pow(10, 18)
      const pnlValue = Number(pnl) / Math.pow(10, 6)
      const isProfitable = pnlValue > 0
      
      toast({
        title: 'Position Closed',
        description: `PnL: ${isProfitable ? '+' : ''}${formatCurrency(pnlValue)}`,
        variant: isProfitable ? 'default' : 'destructive'
      })
      
      // Refresh user data
      fetchUserData()
    }
  }, [address, toast, fetchUserData])

  const handleVolatilityUpdated = useCallback((newVariance: bigint, annualizedVolatility: bigint, timestamp: bigint) => {
    // Refresh market data when volatility updates
    fetchMarketData()
  }, [fetchMarketData])

  const handleFundingSettled = useCallback((fundingRate: bigint, cumulativeFundingRate: bigint, timestamp: bigint) => {
    // Refresh both market and user data when funding is settled
    fetchMarketData()
    if (address) {
      fetchUserData()
    }
  }, [fetchMarketData, fetchUserData, address])

  const handleLiquidated = useCallback((trader: string, liquidator: string, size: bigint, liquidationReward: bigint) => {
    if (trader.toLowerCase() === address?.toLowerCase()) {
      toast({
        title: 'Position Liquidated',
        description: 'Your position has been liquidated due to insufficient margin',
        variant: 'destructive',
        duration: 10000 // Show longer for important notifications
      })
      
      // Refresh user data
      fetchUserData()
    }
  }, [address, toast, fetchUserData])

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
    // You can expose manual trigger functions here if needed
  }
}