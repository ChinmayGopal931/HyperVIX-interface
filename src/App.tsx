import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '@/lib/web3'
import { Toaster } from '@/components/Toaster'
import { WalletConnect } from '@/components/WalletConnect'
import { MarketOverview } from '@/components/MarketOverview'
import { TradingForm } from '@/components/TradingForm'
import { PortfolioStats } from '@/components/PortfolioStats'
import { NetworkCheck } from '@/components/NetworkCheck'

import { useMarketData } from '@/hooks/useMarketData'
import { useUserData } from '@/hooks/useUserData'
import { useEvents } from '@/hooks/useEvents'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Activity, BarChart3, Briefcase } from 'lucide-react'
import { PositionInfo } from './components/PositionInfo'

const queryClient = new QueryClient()

function AppContent() {
  
  // Initialize data hooks
  useMarketData()
  useUserData()
  useEvents()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Activity className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold gradient-text">HyperVIX</h1>
              </div>
              <div className="hidden sm:block text-sm text-muted-foreground">
                Decentralized Volatility Trading
              </div>
            </div>
            <div className="flex items-center gap-4">
              <WalletConnect />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Network Status */}
          <NetworkCheck />
          

          {/* Market Overview */}
          <MarketOverview />

          {/* Mobile/Desktop Layout Toggle */}
          <div className="block lg:hidden">
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chart" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Chart</span>
                </TabsTrigger>
                <TabsTrigger value="trade" className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  <span className="hidden sm:inline">Trade</span>
                </TabsTrigger>
                <TabsTrigger value="portfolio" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Portfolio</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="chart" className="mt-6">
                {/* <VolatilityChart /> */}
              </TabsContent>
              
              <TabsContent value="trade" className="mt-6">
                <TradingForm />
              </TabsContent>
              
              <TabsContent value="portfolio" className="mt-6">
                <PortfolioStats />
              </TabsContent>
            </Tabs>
            
            {/* Position Info - Full Width on Mobile */}
            <div className="mt-6">
              <PositionInfo />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Chart */}
              <div className="lg:col-span-2">
                {/* <VolatilityChart /> */}
              </div>

              {/* Right Column - Trading */}
              <div>
                <TradingForm />
              </div>
            </div>

            {/* Position Info - Full Width Below Chart and Trading */}
            <div className="mt-6">
              <PositionInfo />
            </div>

            {/* Bottom Row - Portfolio Stats */}
            <div className="mt-6">
              <PortfolioStats />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4" />
              <span>HyperVIX - Built on Hyperliquid Testnet</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Chain ID: 998</span>
              <span>•</span>
              <span>Risk Warning: Trading involves significant risk</span>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App