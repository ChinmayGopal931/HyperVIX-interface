import { http } from 'wagmi'
import { defineChain } from 'viem'

export const CHAIN_CONFIG = defineChain({
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

// export const wagmiConfig = getDefaultConfig({
//   appName: 'HyperVIX',
//   projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'e4ad3f996b22e95e67357a293a238cb6',
//   chains: [CHAIN_CONFIG],
//   ssr: false,
// })

// Keep backwards compatibility
// export const config = wagmiConfig
// export const hyperliquidTestnet = CHAIN_CONFIG

// declare module 'wagmi' {
//   interface Register {
//     config: typeof config
//   }
// }