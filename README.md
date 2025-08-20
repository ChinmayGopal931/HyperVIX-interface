# HyperVIX - Decentralized Volatility Trading Interface ✅

A modern, professional trading interface for the HyperVIX volatility trading platform built on Hyperliquid L1. This frontend allows users to trade volatility as an asset through perpetual contracts with real-time data and comprehensive portfolio management.

**🎉 FULLY FUNCTIONAL** - All contracts are deployed and working on Hyperliquid Testnet!

## 🚀 Features

### Core Trading Features
- **Volatility Trading**: Long/short volatility positions with up to 10x leverage
- **Real-time Market Data**: Live volatility index, mark price, and funding rates
- **Position Management**: Open, monitor, and close positions with real-time PnL
- **Portfolio Overview**: Complete wallet and position tracking
- **Risk Management**: Liquidation warnings and margin requirements

### Technical Features
- **Web3 Integration**: MetaMask and WalletConnect support
- **Responsive Design**: Mobile-first design with desktop optimization
- **Real-time Updates**: WebSocket-like event listening for contract events
- **Professional UI**: Dark theme with shadcn/ui components
- **Type Safety**: Full TypeScript implementation

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Web3**: Wagmi + Ethers.js + Viem
- **State Management**: Zustand
- **Charts**: Recharts
- **UI Components**: Radix UI primitives

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- MetaMask or compatible Web3 wallet
- Access to Hyperliquid Testnet (Chain ID: 998)

## 🏗 Installation & Setup

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd hypervix-interface
npm install
```

2. **Configure environment** (optional):
```bash
# Create .env file for custom configurations
VITE_WALLETCONNECT_PROJECT_ID=your-walletconnect-project-id
```

3. **Start development server**:
```bash
npm run dev
```

4. **Build for production**:
```bash
npm run build
npm run preview
```

## 🌐 Network Configuration

The interface connects to Hyperliquid Testnet by default:

- **Chain ID**: 998
- **RPC URL**: https://rpc.hyperliquid-testnet.xyz/evm
- **Native Currency**: ETH
- **Block Explorer**: https://app.hyperliquid.xyz

## 📱 Usage Guide

### Getting Started
1. **Connect Wallet**: Click "Connect Wallet" and select MetaMask or WalletConnect
2. **Network Setup**: Ensure your wallet is connected to Hyperliquid Testnet
3. **Get Testnet Funds**: Acquire testnet ETH for gas and USDC for trading

### Trading Volatility
1. **Market Analysis**: View current volatility index and market conditions
2. **Choose Direction**: Select Long (expecting higher volatility) or Short (expecting lower volatility)
3. **Set Parameters**: Enter position size, margin, and desired leverage
4. **Execute Trade**: Approve USDC spending and open position
5. **Monitor Position**: Track real-time PnL and liquidation risk

### Portfolio Management
- **Balance Overview**: View available USDC, locked margin, and total portfolio value
- **Position Tracking**: Monitor open positions with real-time profit/loss
- **Risk Metrics**: Check liquidation risk and margin utilization
- **Transaction History**: Track all trading activity (via contract events)

## 🔧 Architecture Overview

### Contract Integration
```typescript
// Core contracts on Hyperliquid Testnet
const CONTRACTS = {
  VolatilityIndexOracle: "0x721241e831f773BC29E4d39d057ff97fD578c772",
  VolatilityPerpetual: "0x4578042882946486e8Be9CCb7fb1Fc1Cc75800B3", 
  HyperVIXKeeper: "0xb4ABB0ED6b885a229B04e30c2643E30f32074699",
  USDC: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
}
```

### Key Components
- **MarketOverview**: Real-time volatility and market statistics
- **VolatilityChart**: Interactive price and volatility charts
- **TradingForm**: Position opening interface with leverage controls
- **PositionManager**: Active position monitoring and management
- **PortfolioStats**: Comprehensive portfolio and risk metrics

### State Management
```typescript
// Zustand store for global state
interface TradingState {
  market: MarketData      // Current market conditions
  user: UserData         // Wallet and position info  
  tradeForm: FormData    // Trading form state
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Wallet connection and network switching
- [ ] Market data loading and real-time updates
- [ ] Position opening with various leverage levels
- [ ] Position closing and PnL realization
- [ ] Error handling for failed transactions
- [ ] Mobile responsiveness across devices
- [ ] Event listening for contract updates

### Contract Interaction Testing
```bash
# Test contract connectivity
npm run dev
# 1. Connect wallet to Hyperliquid Testnet
# 2. Verify market data loads correctly
# 3. Test position opening with small amounts
# 4. Monitor real-time updates
```

## 🔐 Security Considerations

- **Contract Verification**: All contract addresses are verified on Hyperliquid
- **Input Validation**: Form inputs are validated client-side and on-chain
- **Error Handling**: Comprehensive error catching and user feedback
- **Slippage Protection**: Mark price is used for position entry
- **Risk Warnings**: Clear liquidation and trading risk disclosures

## 📊 Risk Management Features

### Liquidation Protection
- Real-time liquidation price calculation
- Visual risk indicators for high-risk positions
- Automatic margin ratio monitoring

### Trading Safeguards
- Maximum leverage limits (10x)
- Minimum margin requirements
- Clear fee disclosure before trades
- Position size validation

## 🎨 UI/UX Features

### Responsive Design
- **Mobile-first**: Optimized for mobile trading
- **Desktop Enhanced**: Advanced layouts for larger screens
- **Touch-friendly**: Large buttons and intuitive gestures

### Professional Trading Interface
- **Dark Theme**: Eye-friendly for extended trading sessions
- **Real-time Updates**: Live price feeds and position tracking
- **Clear Information Hierarchy**: Important data prominently displayed
- **Intuitive Navigation**: Tab-based mobile layout, sidebar desktop layout

## 🔄 Real-time Features

### Contract Event Listening
- Position opened/closed notifications
- Volatility index updates
- Funding rate settlements
- Liquidation alerts

### Auto-refresh Data
- Market data: Every 30 seconds
- User positions: Every 10 seconds  
- Portfolio balance: On transaction completion

## 🐛 Troubleshooting

### Common Issues

**Wallet Connection Problems**:
- Ensure MetaMask is installed and unlocked
- Verify network is set to Hyperliquid Testnet
- Check if contract addresses are correct

**Transaction Failures**:
- Confirm sufficient ETH for gas fees
- Verify USDC balance and allowance
- Check if market conditions allow trading

**Data Loading Issues**:
- Refresh browser and reconnect wallet
- Check network connectivity
- Verify RPC endpoint availability

### Error Messages
- `"Insufficient allowance"` → Approve USDC spending first
- `"ExceedsMaxLeverage"` → Reduce leverage below 10x
- `"InvalidMargin"` → Increase margin amount
- `"NoPosition"` → No position exists to close

## 🚀 Deployment

### Production Build
```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

### Environment Configuration
- Set `VITE_WALLETCONNECT_PROJECT_ID` for WalletConnect
- Configure custom RPC endpoints if needed
- Update contract addresses for mainnet deployment

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues and questions:
- Check the troubleshooting section above
- Review contract documentation in `FRONTEND_INTEGRATION.md`
- Open an issue in the repository

---

**⚠️ Risk Warning**: Volatility trading involves significant financial risk. This software is provided for educational and testing purposes. Only trade with funds you can afford to lose.# HyperVIX-interface
