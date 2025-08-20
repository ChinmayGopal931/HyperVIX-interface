import { http, createConfig } from 'wagmi'
import { defineChain } from 'viem'
import { metaMask, walletConnect } from 'wagmi/connectors'

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

export const config = createConfig({
  chains: [hyperliquidTestnet],
  connectors: [
    metaMask(),
    walletConnect({ 
      projectId: 'your-walletconnect-project-id' // Replace with actual project ID
    }),
  ],
  transports: {
    [hyperliquidTestnet.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}