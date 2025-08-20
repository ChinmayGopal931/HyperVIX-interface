import { useCallback } from 'react'
import { useContracts } from './useContracts'
import { useUserData } from './useUserData'
import { useTradingStore } from '@/store/trading'
import { parseUnits } from 'ethers'

export function useTrading() {
  const { contracts } = useContracts()
  const { fetchUserData } = useUserData()
  const { 
    tradeDirection, 
    tradeSize, 
    tradeMargin, 
    setLoading, 
    setError, 
    resetTradingForm 
  } = useTradingStore()

  const openPosition = useCallback(async () => {
    if (!contracts) {
      throw new Error('Contracts not initialized')
    }

    if (!tradeSize || !tradeMargin) {
      throw new Error('Please enter position size and margin')
    }

    try {
      setLoading(true)
      setError(null)

      const sizeValue = parseFloat(tradeSize)
      const marginValue = parseFloat(tradeMargin)

      // Convert to contract format
      const sizeDelta = parseUnits(sizeValue.toString(), 18)
      const marginDelta = parseUnits(marginValue.toString(), 6)

      // Make size negative for short positions
      const finalSizeDelta = tradeDirection === 'short' ? -sizeDelta : sizeDelta

      // Use write contracts for transactions
      const usdcWrite = contracts.usdcWrite || contracts.usdc
      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual

      // First approve USDC spending
      const approveTx = await usdcWrite.approve(
        contracts.perpetual.target,
        marginDelta
      )
      await approveTx.wait()

      // Open position
      const tx = await perpetualWrite.openPosition(finalSizeDelta, marginDelta)
      await tx.wait()

      // Refresh user data and reset form
      await fetchUserData()
      resetTradingForm()

      return tx
    } catch (error) {
      console.error('Error opening position:', error)
      setError(error instanceof Error ? error.message : 'Failed to open position')
      throw error
    } finally {
      setLoading(false)
    }
  }, [
    contracts,
    tradeDirection,
    tradeSize,
    tradeMargin,
    setLoading,
    setError,
    fetchUserData,
    resetTradingForm
  ])

  const closePosition = useCallback(async () => {
    if (!contracts) {
      throw new Error('Contracts not initialized')
    }

    try {
      setLoading(true)
      setError(null)

      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual
      const tx = await perpetualWrite.closePosition()
      await tx.wait()

      // Refresh user data
      await fetchUserData()

      return tx
    } catch (error) {
      console.error('Error closing position:', error)
      setError(error instanceof Error ? error.message : 'Failed to close position')
      throw error
    } finally {
      setLoading(false)
    }
  }, [contracts, setLoading, setError, fetchUserData])

  const liquidatePosition = useCallback(async (userAddress: string) => {
    if (!contracts) {
      throw new Error('Contracts not initialized')
    }

    try {
      setLoading(true)
      setError(null)

      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual
      const tx = await perpetualWrite.liquidate(userAddress)
      await tx.wait()

      // Refresh user data
      await fetchUserData()

      return tx
    } catch (error) {
      console.error('Error liquidating position:', error)
      setError(error instanceof Error ? error.message : 'Failed to liquidate position')
      throw error
    } finally {
      setLoading(false)
    }
  }, [contracts, setLoading, setError, fetchUserData])

  const calculateEstimatedValues = useCallback(() => {
    const sizeValue = parseFloat(tradeSize) || 0
    const marginValue = parseFloat(tradeMargin) || 0
    const { market } = useTradingStore.getState()
    
    // Use real market data for calculations
    const estimatedEntryPrice = market.vvolPrice
    const leverage = sizeValue > 0 && marginValue > 0 ? (sizeValue * estimatedEntryPrice) / marginValue : 1
    const isLong = tradeDirection === 'long'
    
    // Calculate liquidation price based on maintenance margin (5%)
    const maintenanceMargin = 0.05
    const estimatedLiquidationPrice = isLong 
      ? estimatedEntryPrice * (1 - (1 / leverage) + maintenanceMargin)
      : estimatedEntryPrice * (1 + (1 / leverage) - maintenanceMargin)
    
    return {
      estimatedEntryPrice,
      estimatedLiquidationPrice: Math.max(0, estimatedLiquidationPrice),
      tradingFee: marginValue * 0.001 // 0.1% trading fee from constants
    }
  }, [tradeSize, tradeMargin, tradeDirection])

  return {
    openPosition,
    closePosition,
    liquidatePosition,
    calculateEstimatedValues
  }
}