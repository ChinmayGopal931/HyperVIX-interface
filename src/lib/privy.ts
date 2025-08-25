/**
 * Privy configuration for wallet connection
 * Note: Install @privy-io/react-auth and @privy-io/wagmi when ready
 */

import { http } from 'wagmi'
import { defineChain } from 'viem'

export const hyperliquidTestnet = defineChain({
  id: 998,
  name: 'Hyperliquid Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.hyperliquid-testnet.xyz/evm'],
    },
  },
  blockExplorers: {
    default: { name: 'Hyperliquid', url: 'https://app.hyperliquid.xyz' },
  },
})

// Privy configuration
export const privyConfig = {
  appId: import.meta.env.VITE_PRIVY_APP_ID || 'insert-your-privy-app-id',
  config: {
    // Supported wallets
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'e4ad3f996b22e95e67357a293a238cb6',
    // UI configuration
    appearance: {
      theme: 'dark',
      accentColor: '#10B981',
      logo: '/hypervix-logo.png'
    },
    // Login methods
    loginMethods: ['wallet', 'email', 'sms'],
    // Default chain
    defaultChain: hyperliquidTestnet,
    // Supported chains
    supportedChains: [hyperliquidTestnet]
  }
}

// Wagmi configuration for use with Privy
export const wagmiConfig = {
  chains: [hyperliquidTestnet],
  transports: {
    [hyperliquidTestnet.id]: http()
  }
}