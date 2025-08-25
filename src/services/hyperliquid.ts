/**
 * Hyperliquid API service for fetching external price data
 */

export interface HyperliquidPriceResponse {
  ETH?: string
  UETH?: string
  [key: string]: string | undefined
}

const HYPERLIQUID_API_URL = 'https://api.hyperliquid.xyz/info'
const DEFAULT_ETH_PRICE = 3000
const REQUEST_TIMEOUT = 5000

/**
 * Fetches current ETH price from Hyperliquid API
 * @returns Promise<number> ETH price in USD
 */
export async function fetchEthPrice(): Promise<number> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)

    const response = await fetch(HYPERLIQUID_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'allMids' }),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const prices: HyperliquidPriceResponse = await response.json()
    const ethPrice = Number(prices.ETH || prices.UETH || DEFAULT_ETH_PRICE)

    if (isNaN(ethPrice) || ethPrice <= 0) {
      throw new Error('Invalid price data received')
    }

    return ethPrice
  } catch (error) {
    console.warn('Hyperliquid API error:', error)
    return DEFAULT_ETH_PRICE
  }
}