import { create } from 'zustand'

export interface Position {
  size: number
  margin: number
  entryPrice: number
  lastCumulativeFundingRate: number
  isLong: boolean
  currentPnL: number
  liquidationPrice: number
  // 🆕 NEW: Additional position data from comprehensive function
  notionalValue?: number
  leverage?: number
  marginRatio?: number
  markPrice?: number
}

export interface MarketData {
  volatility: number
  vvolPrice: number
  indexPrice: number
  lastUpdate: number
  fundingRate: number
  nextFundingTime: number
  volume24h: number
  totalLiquidity: {
    vvol: number
    usdc: number
  }
  // New market metrics
  openInterest?: number // Total vVOL positions
  openInterestBreakdown?: {
    totalLongs: number
    totalShorts: number
    netExposure: number
  }
  maxLeverage?: number
  maintenanceMargin?: number // Percentage
  liquidationFeeRate?: number // Percentage  
  tradingFeeRate?: number // Percentage
}

export interface UserData {
  address: string | null
  usdcBalance: number
  position: Position | null
  liquidationRisk: boolean
  // 🆕 NEW: USDC allowance for trading
  allowance?: number
}

interface TradingState {
  // Market data
  market: MarketData
  user: UserData
  
  // UI state
  loading: boolean
  error: string | null
  selectedTimeframe: string
  
  // Trading form
  tradeDirection: 'long' | 'short'
  tradeSize: string
  tradeMargin: string
  tradeLeverage: number
  
  // Actions
  setMarketData: (data: Partial<MarketData>) => void
  setUserData: (data: Partial<UserData>) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setTradeDirection: (direction: 'long' | 'short') => void
  setTradeSize: (size: string) => void
  setTradeMargin: (margin: string) => void
  setTradeLeverage: (leverage: number) => void
  updateTradingForm: (data: { size?: string; margin?: string; leverage?: number }) => void
  resetTradingForm: () => void
}

export const useTradingStore = create<TradingState>((set, get) => ({
  // Initial state
  market: {
    volatility: 0,
    vvolPrice: 0,
    indexPrice: 0,
    lastUpdate: 0,
    fundingRate: 0,
    nextFundingTime: 0,
    volume24h: 0,
    totalLiquidity: {
      vvol: 0,
      usdc: 0
    }
  },
  
  user: {
    address: null,
    usdcBalance: 0,
    position: null,
    liquidationRisk: false
  },
  
  loading: false,
  error: null,
  selectedTimeframe: '24h',
  
  tradeDirection: 'long',
  tradeSize: '',
  tradeMargin: '',
  tradeLeverage: 1,
  
  // Actions
  setMarketData: (data) => set((state) => ({
    market: { ...state.market, ...data }
  })),
  
  setUserData: (data) => set((state) => ({
    user: { ...state.user, ...data }
  })),
  
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  
  setTradeDirection: (direction) => set({ tradeDirection: direction }),
  setTradeSize: (size) => set({ tradeSize: size }),
  setTradeMargin: (margin) => set({ tradeMargin: margin }),
  setTradeLeverage: (leverage) => set({ tradeLeverage: leverage }),
  
  updateTradingForm: (data) => {
    // Simple direct updates to prevent re-render loops
    const updates: any = {}
    if (data.size !== undefined) updates.tradeSize = data.size
    if (data.margin !== undefined) updates.tradeMargin = data.margin
    if (data.leverage !== undefined) updates.tradeLeverage = data.leverage
    
    if (Object.keys(updates).length > 0) {
      set(updates)
    }
  },
  
  resetTradingForm: () => set({
    tradeSize: '',
    tradeMargin: '',
    tradeLeverage: 1
  })
}))