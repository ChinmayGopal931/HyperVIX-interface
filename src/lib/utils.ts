import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(
  value: number | string,
  options?: Intl.NumberFormatOptions
): string {
  const num = typeof value === 'string' ? parseFloat(value) : value
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
    ...options,
  }).format(num)
}

export function formatCurrency(value: number | string): string {
  return formatNumber(value, { style: 'currency', currency: 'USD' })
}

export function formatPercentage(value: number | string): string {
  return formatNumber(value, { style: 'percent', minimumFractionDigits: 2 })
}

export function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function calculateLeverage(positionSize: number, margin: number, markPrice: number): number {
  if (margin === 0) return 0
  const notional = Math.abs(positionSize) * markPrice
  return notional / margin
}

export function calculateLiquidationPrice(
  entryPrice: number,
  leverage: number,
  isLong: boolean,
  maintenanceMarginRatio: number = 0.05
): number {
  if (isLong) {
    return entryPrice * (1 - (1 / leverage) + maintenanceMarginRatio)
  } else {
    return entryPrice * (1 + (1 / leverage) - maintenanceMarginRatio)
  }
}