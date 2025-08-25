/**
 * Contract service for interacting with HyperVIX smart contracts
 */

import { fetchEthPrice } from './hyperliquid'
import type { MarketData } from '@/store/trading'

export interface ContractInstances {
  oracle: any
  perpetual: any
  usdc: any
  [key: string]: any
}

/**
 * Fetches comprehensive market data from contracts
 */
export async function fetchMarketData(
  contracts: ContractInstances,
  provider: any
): Promise<MarketData> {
  // Validate network
  const network = await provider.getNetwork()
  if (network.chainId !== BigInt(998)) {
    throw new Error(`Wrong network: Expected 998, got ${network.chainId}`)
  }

  

  // Fetch all contract data in parallel
  const [
    volatility,
    vBaseReserve,
    vQuoteReserve,
    lastUpdate,
    fundingRate,
    lastFundingTime,
    fundingInterval,
    totalLongSize,
    totalShortSize,
    maxLeverage,
    maintenanceMarginRatio,
    liquidationFee,
    tradingFee,
    ethPrice
  ] = await Promise.all([
    contracts.oracle.getAnnualizedVolatility(),
    contracts.perpetual.vBaseAssetReserve(),
    contracts.perpetual.vQuoteAssetReserve(),
    contracts.oracle.getLastUpdateTime(),
    contracts.perpetual.cumulativeFundingRate(),
    contracts.perpetual.lastFundingTime(),
    contracts.perpetual.fundingInterval(),
    contracts.perpetual.totalLongSize(),
    contracts.perpetual.totalShortSize(),
    contracts.perpetual.maxLeverage(),
    contracts.perpetual.maintenanceMarginRatio(),
    contracts.perpetual.liquidationFee(),
    contracts.perpetual.tradingFee(),
    fetchEthPrice()
  ])


  // Calculate mark price: vQuoteReserve / vBaseReserve
  const markPrice = (vQuoteReserve * BigInt(1e18)) / vBaseReserve

  // Calculate open interest metrics
  const totalLongs = Number(totalLongSize) / 1e18
  const totalShorts = Number(totalShortSize) / 1e18
  const totalOpenInterest = totalLongs + totalShorts
  const netExposure = Math.abs(totalLongs - totalShorts)

  return {
    volatility: Number(volatility) / 1e18,
    vvolPrice: Number(markPrice) / 1e18,
    indexPrice: ethPrice,
    lastUpdate: Number(lastUpdate),
    fundingRate: Number(fundingRate) / 1e18,
    nextFundingTime: Number(lastFundingTime) + Number(fundingInterval),
    volume24h: 0, // Not available on-chain
    totalLiquidity: {
      vvol: Number(vBaseReserve) / 1e18,
      usdc: Number(vQuoteReserve) / 1e18
    },
    openInterest: totalOpenInterest,
    openInterestBreakdown: {
      totalLongs,
      totalShorts,
      netExposure
    },
    maxLeverage: Number(maxLeverage) / 1e12,
    maintenanceMargin: Number(maintenanceMarginRatio) / 1e18 * 100,
    liquidationFeeRate: Number(liquidationFee) / 1e18 * 100,
    tradingFeeRate: Number(tradingFee) / 1e18 * 100
  }
}

/**
 * Fetches user-specific data from contracts
 */
export async function fetchUserData(
  contracts: ContractInstances,
  address: string,
  provider: any
) {
  // Validate network
  const network = await provider.getNetwork()
  if (network.chainId !== BigInt(998)) {
    throw new Error(`Wrong network: Expected 998, got ${network.chainId}`)
  }

  const [positionDetails, usdcBalance, allowance] = await Promise.all([
    contracts.perpetual.getPositionDetails(address),
    contracts.usdc.balanceOf(address),
    contracts.usdc.allowance(address, contracts.perpetual.target)
  ])

  const formattedPosition = positionDetails.size !== 0n ? {
    size: Number(positionDetails.size) / 1e18,
    margin: Number(positionDetails.margin) / 1e18,
    entryPrice: Number(positionDetails.entryPrice) / 1e18,
    lastCumulativeFundingRate: 0,
    isLong: Number(positionDetails.size) > 0,
    currentPnL: Number(positionDetails.unrealizedPnl) / 1e18,
    liquidationPrice: Number(positionDetails.markPrice) / 1e18,
    notionalValue: Number(positionDetails.notionalValue) / 1e18,
    // Calculate leverage manually: notionalValue / margin (both already scaled)
    leverage: Number(positionDetails.notionalValue) > 0 && Number(positionDetails.margin) > 0 
      ? (Number(positionDetails.notionalValue) / 1e18) / (Number(positionDetails.margin) / 1e18)
      : Number(positionDetails.leverage) / 1e18,
    marginRatio: Number(positionDetails.marginRatio) / 1e18,
    markPrice: Number(positionDetails.markPrice) / 1e18
  } : null

  return {
    address,
    usdcBalance: Number(usdcBalance) / 1e18,
    position: formattedPosition,
    liquidationRisk: positionDetails.isLiquidatable,
    allowance: Number(allowance) / 1e18
  }
}

/**
 * Fetches funding rate data from contracts
 */
export async function fetchFundingRateData(contracts: ContractInstances) {
  const [
    cumulativeFundingRate,
    lastFundingTime,
    fundingInterval,
    totalLongSize,
    totalShortSize
  ] = await Promise.all([
    contracts.perpetual.cumulativeFundingRate(),
    contracts.perpetual.lastFundingTime(),
    contracts.perpetual.fundingInterval(),
    contracts.perpetual.totalLongSize(),
    contracts.perpetual.totalShortSize()
  ])

  const totalLongs = Number(totalLongSize) / 1e18
  const totalShorts = Number(totalShortSize) / 1e18
  const imbalance = totalLongs - totalShorts
  const totalOI = totalLongs + totalShorts

  const imbalanceRatio = totalOI > 0 ? imbalance / totalOI : 0
  const predictedRate = imbalanceRatio * 0.0001

  return {
    currentRate: Number(cumulativeFundingRate) / 1e18,
    predictedRate,
    lastFundingTime: Number(lastFundingTime),
    nextFundingTime: Number(lastFundingTime) + Number(fundingInterval),
    fundingInterval: Number(fundingInterval),
    imbalanceRatio,
    totalLongs,
    totalShorts
  }
}