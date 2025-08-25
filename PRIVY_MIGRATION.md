# Privy Migration Guide

This guide shows how to migrate from RainbowKit to Privy for better wallet management and user experience.

## 1. Install Privy Packages

```bash
npm install @privy-io/react-auth @privy-io/wagmi --legacy-peer-deps
```

## 2. Environment Variables

Add these to your `.env` file:

```env
VITE_PRIVY_APP_ID=your-privy-app-id-here
VITE_WALLETCONNECT_PROJECT_ID=your-existing-wc-project-id
```

## 3. Update App.tsx

Replace the RainbowKit setup with Privy:

```tsx
// OLD - RainbowKit
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// NEW - Privy
import { PrivyAppProvider } from './components/PrivyProvider'
import { PrivyConnectButton } from './components/PrivyConnectButton'

function App() {
  return (
    <PrivyAppProvider>
      <AppContent />
    </PrivyAppProvider>
  )
}

// In AppContent, replace ConnectButton with PrivyConnectButton
<PrivyConnectButton />
```

## 4. Update Hooks (if needed)

Privy is compatible with existing Wagmi hooks, so minimal changes needed:

```tsx
// These continue to work as before
import { useAccount, useBalance } from 'wagmi'

// Optional: Use Privy-specific hooks for enhanced features
import { usePrivy, useWallets } from '@privy-io/react-auth'
```

## 5. Benefits of Privy

- **Enhanced Authentication**: Email, SMS, social login options
- **Better UX**: Smoother onboarding for non-crypto users  
- **Account Abstraction**: Built-in smart wallet features
- **Multi-Chain Support**: Easy cross-chain wallet management
- **Security**: Enhanced key management and recovery
- **Analytics**: Better user insights and engagement tracking

## 6. Privy Features to Leverage

### Multi-Login Methods
```tsx
const { login } = usePrivy()

// Users can connect via:
// - Traditional wallets (MetaMask, etc.)
// - Email + password
// - Phone number + SMS
// - Social logins (Google, Twitter, etc.)
```

### Smart Wallet Features
```tsx
import { useWallets } from '@privy-io/react-auth'

const { wallets } = useWallets()
const smartWallet = wallets.find(wallet => wallet.walletClientType === 'privy')
```

### Enhanced User Management
```tsx
const { user, authenticated, ready } = usePrivy()

// Access user profile, preferences, etc.
if (authenticated && user) {
  console.log('User ID:', user.id)
  console.log('Email:', user.email?.address)
  console.log('Wallets:', user.linkedAccounts)
}
```

## 7. Migration Checklist

- [ ] Install Privy packages
- [ ] Set up environment variables
- [ ] Replace RainbowKit provider with Privy
- [ ] Update connect button component
- [ ] Test wallet connection flow
- [ ] Configure additional login methods
- [ ] Set up user analytics (optional)
- [ ] Test on different devices and networks

## 8. Configuration Options

The Privy config in `src/lib/privy.ts` supports:

```tsx
export const privyConfig = {
  appId: 'your-app-id',
  config: {
    appearance: {
      theme: 'dark',
      accentColor: '#10B981',
      logo: '/hypervix-logo.png'
    },
    loginMethods: ['wallet', 'email', 'sms', 'google', 'twitter'],
    defaultChain: hyperliquidTestnet,
    supportedChains: [hyperliquidTestnet],
    // Advanced features
    embeddedWallets: {
      createOnLogin: 'users-without-wallets'
    }
  }
}
```

## 9. Testing

After migration, test:

- [ ] Wallet connection via MetaMask/other wallets
- [ ] Email login flow  
- [ ] SMS login flow
- [ ] Social login flows
- [ ] Wallet switching
- [ ] Transaction signing
- [ ] Network switching to Hyperliquid testnet

The prepared components will automatically work once the packages are installed!