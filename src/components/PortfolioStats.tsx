import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAccount } from 'wagmi'
import { useUserQuery } from '@/hooks/useUserQuery'
import { formatCurrency } from '@/lib/utils'
import { USDCFaucet } from '@/components/USDCFaucet'
import { Wallet, TrendingUp, Shield, DollarSign, Loader2 } from 'lucide-react'

export function PortfolioStats() {
  const { isConnected } = useAccount()
  const { data: user, isLoading: isUserLoading } = useUserQuery()

  if (!isConnected) {
    return (
      <Card className="trading-card">
        <CardHeader>
          <CardTitle className="text-xl">Portfolio Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Wallet className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Connect your wallet to view portfolio</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isUserLoading) {
    return (
      <Card className="trading-card">
        <CardHeader>
          <CardTitle className="text-xl">Portfolio Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 mx-auto animate-spin mb-4" />
            <p className="text-muted-foreground">Loading portfolio data...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!user) return null

  const totalValue = user.usdcBalance + (user.position?.margin || 0) + (user.position?.currentPnL || 0)
  const availableBalance = user.usdcBalance
  const lockedMargin = user.position?.margin || 0
  const unrealizedPnL = user.position?.currentPnL || 0

  const portfolioStats = [
    {
      title: 'Total Portfolio Value',
      value: formatCurrency(totalValue),
      icon: DollarSign,
      description: 'Available + Locked + PnL',
      isMain: true
    },
    {
      title: 'Available Balance',
      value: formatCurrency(availableBalance),
      icon: Wallet,
      description: 'Ready to trade USDC',
      color: 'text-blue-400'
    },
    {
      title: 'Locked Margin',
      value: formatCurrency(lockedMargin),
      icon: Shield,
      description: 'Securing open positions',
      color: 'text-yellow-400'
    },
    {
      title: 'Unrealized PnL',
      value: unrealizedPnL >= 0 ? `+${formatCurrency(unrealizedPnL)}` : formatCurrency(unrealizedPnL),
      icon: TrendingUp,
      description: 'Open position profit/loss',
      color: unrealizedPnL >= 0 ? 'text-green-400' : 'text-red-400'
    }
  ]

  return (
    <Card className="trading-card">
      <CardHeader>
        <CardTitle className="text-xl">Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Portfolio Value */}
        <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-green-500/10 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Total Portfolio Value</p>
          <p className="text-3xl font-bold gradient-text">{formatCurrency(totalValue)}</p>
        </div>

        {/* Portfolio Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {portfolioStats.slice(1).map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-secondary ${stat.color}`}>
                  <stat.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground truncate">{stat.title}</p>
                  <p className={`text-sm font-bold ${stat.color || 'text-foreground'}`}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Allocation */}
        {(lockedMargin > 0 || unrealizedPnL !== 0) && (
          <div className="space-y-4">
            <h4 className="font-medium">Portfolio Allocation</h4>
            
            {/* Visual allocation bar */}
            <div className="space-y-2">
              <div className="flex h-2 rounded-full overflow-hidden bg-secondary">
                <div 
                  className="bg-blue-500 transition-all"
                  style={{ width: `${(availableBalance / totalValue) * 100}%` }}
                />
                <div 
                  className="bg-yellow-500 transition-all"
                  style={{ width: `${Math.max(0, (lockedMargin / totalValue) * 100)}%` }}
                />
                <div 
                  className={`transition-all ${unrealizedPnL >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${Math.abs(unrealizedPnL / totalValue) * 100}%` }}
                />
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Available: {((availableBalance / totalValue) * 100).toFixed(1)}%</span>
                <span>Locked: {((lockedMargin / totalValue) * 100).toFixed(1)}%</span>
                <span>PnL: {((Math.abs(unrealizedPnL) / totalValue) * 100).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Risk Metrics */}
        {user.position && (
          <div className="space-y-3 pt-4 border-t">
            <h4 className="font-medium">Risk Metrics</h4>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Position Risk</span>
                <span className={user.liquidationRisk ? 'text-red-400' : 'text-green-400'}>
                  {user.liquidationRisk ? 'High' : 'Normal'}
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Margin Usage</span>
                <span>{((lockedMargin / totalValue) * 100).toFixed(1)}%</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Max Additional Position</span>
                <span>{formatCurrency(availableBalance * 0.8)}</span>
              </div>
            </div>
          </div>
        )}

        {/* USDC Faucet - Show if balance is low */}
        {availableBalance < 100 && (
          <div className="pt-4 border-t">
            <USDCFaucet />
          </div>
        )}

        {/* Quick Actions */}
        <div className="pt-4 border-t">
          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Available balance can be used for new positions</p>
            <p>• Locked margin secures your open position</p>
            <p>• PnL updates in real-time based on mark price</p>
            {availableBalance < 100 && (
              <p className="text-green-600">• Use the faucet above to get free test USDC</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}