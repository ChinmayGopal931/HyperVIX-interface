/**
 * Privy Provider Setup
 * 
 * This component sets up Privy authentication for the app.
 * Install @privy-io/react-auth and @privy-io/wagmi to enable full functionality.
 */

import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { privyConfig, wagmiConfig } from '@/lib/privy'

// Mock Privy Provider - replace with actual import once installed
const MockPrivyProvider = ({ children }: { children: ReactNode }) => {
  console.warn('Using mock Privy provider. Install @privy-io/react-auth for full functionality.')
  return <>{children}</>
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 3,
    },
    mutations: {
      retry: 1,
    },
  },
})

interface PrivyAppProviderProps {
  children: ReactNode
}

export function PrivyAppProvider({ children }: PrivyAppProviderProps) {
  return (
    <MockPrivyProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </MockPrivyProvider>
  )
}

/* 
// ACTUAL IMPLEMENTATION - Uncomment once Privy packages are installed:

import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider } from '@privy-io/wagmi'
import { createConfig } from 'wagmi'

const wagmiConfigFull = createConfig(wagmiConfig)

export function PrivyAppProvider({ children }: PrivyAppProviderProps) {
  return (
    <PrivyProvider
      appId={privyConfig.appId}
      config={privyConfig.config}
    >
      <WagmiProvider config={wagmiConfigFull}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </PrivyProvider>
  )
}
*/