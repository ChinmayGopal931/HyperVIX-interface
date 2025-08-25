import { ethers } from 'ethers'

export const NETWORK_CONFIG = {
  chainId: 998,
  name: "Hyperliquid Testnet",
  rpcUrl: "https://rpc.hyperliquid-testnet.xyz/evm",
  blockExplorer: "https://app.hyperliquid.xyz/",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH", 
    decimals: 18
  }
}

    // VolatilityIndexOracle: "0x7C5a46B28047A05CE52C63b3414A2B561Ab78240",
    // VolatilityPerpetual:   "0x31D155389269560815c890fb88405aFE8dFb3E2D",
    // HyperVIXKeeper:        "0x25A887aB88eae505E2E90ab92F5F24DB7F019Cc1",
    // MockUSDC:              "0x54d9067Fb4d81986Fb88fC1A6D4f67F3ff285B1B"

export const CONTRACTS = {
  L1Read: "0xA4Ff3884260a944cfdEFAd872e7af7772e9eD167",
  VolatilityIndexOracle: "0x42336C82c4e727D98d37C626edF24eC44794157a", // 🆕 Updated deployment
  VolatilityPerpetual: "0x4734c15878ff8f7EFd4a7D81A316B348808Ee7D7",   // 🆕 Updated deployment
  HyperVIXKeeper: "0xEe2722216acaC9700cebFe4F8998E29d4a16CeE7",        // 🆕 Updated deployment
  USDC: "0xeA852122fFcADE7345761317b5465776a85Caa39"               // 🆕 Updated MockUSDC
}

export const ORACLE_ABI = [
  // 🆕 UPDATED: Simplified oracle functions
  "function getAnnualizedVolatility() external view returns (uint256)",
  "function getVolatilityState() external view returns (uint256 cumulativePrice, uint256 lastUpdate)",
  "function getLastUpdateTime() external view returns (uint256)",
  
  // Events
  "event VolatilityUpdated(uint256 newVolatility, uint256 cumulativePrice, uint256 timestamp)"
]

export const PERPETUAL_ABI = [
  // 🆕 NEW: Comprehensive position management
  "function getPositionDetails(address trader) external view returns (tuple(int256 size, uint256 margin, uint256 entryPrice, int256 unrealizedPnl, uint256 notionalValue, uint256 leverage, uint256 marginRatio, bool isLiquidatable, uint256 markPrice))",
  "function getPositionValue(address trader) external view returns (int256)",
  "function isLiquidatable(address trader) external view returns (bool)",
  "function getLiquidationPrice(address trader) external view returns (uint256)",
  
  // 🆕 NEW: Trading preview functions
  "function getTradePreview(int256 sizeDelta) external view returns (uint256 averagePrice, uint256 priceImpact, uint256 tradingFeeCost)",
  "function getRequiredMargin(int256 sizeDelta) external view returns (uint256)",
  
  // Market data
  "function getMarkPrice() public view returns (uint256)",
  
  // ✅ FIXED: Individual OI tracking (use these instead of getTotalOpenInterest)
  "function totalLongSize() external view returns (uint256)",
  "function totalShortSize() external view returns (uint256)",
  
  // Trading functions
  "function openPosition(int256 sizeDelta, uint256 marginDelta) external",
  "function closePosition() external",
  
  // System parameters
  "function maxLeverage() external view returns (uint256)",
  "function maintenanceMarginRatio() external view returns (uint256)",
  "function tradingFee() external view returns (uint256)",
  "function liquidationFee() external view returns (uint256)",
  "function fundingInterval() external view returns (uint256)",
  
  // Funding rate
  "function cumulativeFundingRate() external view returns (int256)",
  "function lastFundingTime() external view returns (uint256)",
  
  // vAMM reserves
  "function vBaseAssetReserve() external view returns (uint256)",
  "function vQuoteAssetReserve() external view returns (uint256)",
  
  // Events
  "event PositionOpened(address indexed trader, int256 sizeDelta, uint256 marginDelta, uint256 averagePrice, uint256 timestamp)",
  "event PositionClosed(address indexed trader, int256 size, uint256 margin, int256 pnl, uint256 timestamp)",
  "event FundingSettled(int256 fundingRate, int256 cumulativeFundingRate, uint256 timestamp)",
  "event Liquidated(address indexed trader, address indexed liquidator, int256 size, uint256 liquidationReward, uint256 timestamp)"
]

export const KEEPER_ABI = [
  "function isOracleUpdateDue() view returns (bool)",
  "function isFundingUpdateDue() view returns (bool)", 
  "function getNextOracleUpdate() view returns (uint256)",
  "function getNextFundingUpdate() view returns (uint256)",
  "function updateOracle()",
  "function settleFunding()",
  "function updateBoth()",
  "event OracleUpdated(uint256 timestamp)",
  "event FundingSettled(uint256 timestamp)"
]

export const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address owner) view returns (uint256)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function faucet(address to, uint256 amount)", // 🎁 FREE USDC FAUCET
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)"
]

export const CONSTANTS = {
  PRICE_DECIMALS: 6,
  POSITION_DECIMALS: 18,
  VOLATILITY_DECIMALS: 18,
  ETH_ASSET_ID: 1,
  BTC_ASSET_ID: 3,
  ORACLE_UPDATE_INTERVAL: 3600,
  FUNDING_INTERVAL: 3600,
  MAX_LEVERAGE: 10,
  MAINTENANCE_MARGIN_RATIO: 0.05,
  LIQUIDATION_FEE: 0.01,
  TRADING_FEE: 0.001
}

export const helpers = {
  formatPrice: (price: number) => (price / Math.pow(10, CONSTANTS.PRICE_DECIMALS)).toFixed(6),
  formatPosition: (size: number) => (size / Math.pow(10, CONSTANTS.POSITION_DECIMALS)).toFixed(6),
  formatVolatility: (vol: number) => ((vol / Math.pow(10, CONSTANTS.VOLATILITY_DECIMALS)) * 100).toFixed(2) + '%',
  
  parsePrice: (price: number) => Math.floor(price * Math.pow(10, CONSTANTS.PRICE_DECIMALS)),
  parsePosition: (size: number) => (size * Math.pow(10, CONSTANTS.POSITION_DECIMALS)).toString(),
  
  calculateLeverage: (positionSize: number, margin: number, markPrice: number) => {
    const notional = positionSize * markPrice / Math.pow(10, CONSTANTS.POSITION_DECIMALS)
    const marginUSD = margin / Math.pow(10, CONSTANTS.PRICE_DECIMALS)
    return notional / marginUSD
  },
  
  formatTimestamp: (timestamp: number) => new Date(timestamp * 1000).toLocaleString(),
  isLongPosition: (size: number) => size > 0,
  calculateFundingRate: (cumulativeRate: number, lastRate: number) => (cumulativeRate - lastRate) / Math.pow(10, CONSTANTS.VOLATILITY_DECIMALS)
}

export const initializeContracts = (provider: ethers.Provider, signer?: ethers.Signer) => {
  // Use provider for read operations, signer for write operations
  const runnerForReads = provider
  const runnerForWrites = signer || provider

  const contracts = {
    oracle: new ethers.Contract(
      CONTRACTS.VolatilityIndexOracle,
      ORACLE_ABI,
      runnerForReads
    ),
    perpetual: new ethers.Contract(
      CONTRACTS.VolatilityPerpetual, 
      PERPETUAL_ABI,
      runnerForReads
    ),
    keeper: new ethers.Contract(
      CONTRACTS.HyperVIXKeeper,
      KEEPER_ABI,
      runnerForReads
    ),
    usdc: new ethers.Contract(
      CONTRACTS.USDC,
      ERC20_ABI,
      runnerForReads
    ),
    // Write-enabled versions (only when signer is available)
    ...(signer && {
      oracleWrite: new ethers.Contract(
        CONTRACTS.VolatilityIndexOracle,
        ORACLE_ABI,
        signer
      ),
      perpetualWrite: new ethers.Contract(
        CONTRACTS.VolatilityPerpetual, 
        PERPETUAL_ABI,
        signer
      ),
      keeperWrite: new ethers.Contract(
        CONTRACTS.HyperVIXKeeper,
        KEEPER_ABI,
        signer
      ),
      usdcWrite: new ethers.Contract(
        CONTRACTS.USDC,
        ERC20_ABI,
        signer
      )
    })
  }
  
  return contracts
}