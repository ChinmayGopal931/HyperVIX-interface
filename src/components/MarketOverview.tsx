import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTradingStore } from '@/store/trading'
import { useFundingRate } from '@/hooks/useFundingRate'
import { formatNumber, formatCurrency } from '@/lib/utils'
import { TrendingUp, Clock, DollarSign } from 'lucide-react'

export function MarketOverview() {
  const { market } = useTradingStore()
  const { predictedRate } = useFundingRate()


  const formatTimeUntilNext = (timestamp: number) => {
    const now = Math.floor(Date.now() / 1000)
    const diff = timestamp - now
    
    if (diff <= 0) return 'Overdue'
    
    const hours = Math.floor(diff / 3600)
    const minutes = Math.floor((diff % 3600) / 60)
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`
    }
    return `${minutes}m`
  }


  const stats = [
    {
      title: 'Volatility Index',
      value: `${(market.volatility).toFixed(2)}`,
      icon: TrendingUp,
      change: market.volatility > 0 ? 'Live' : 'N/A',
      isPositive: market.volatility > 0
    },
    {
      title: 'vVOL Price',
      value: market.vvolPrice,
      icon: DollarSign,
      change: market.vvolPrice > 0 ? 'Live' : 'N/A',
      isPositive: market.vvolPrice > 0
    },
    {
      title: 'Index Price (ETH)',
      value: formatCurrency(market.indexPrice || 0),
      icon: TrendingUp,
      change: market.indexPrice > 0 ? 'Live' : 'N/A',
      isPositive: market.indexPrice > 0
    },
    {
      title: 'Predicted Funding Rate',
      value: `${(predictedRate * 100).toFixed(4)}%`,
      icon: Clock,
      subtitle: `Next: ${formatTimeUntilNext(market.nextFundingTime)}`,
      isNeutral: true
    }
  ]

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  {stat.subtitle && (
                    <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
                  )}
                  {stat.change && (
                    <p className={`text-xs mt-1 ${
                      stat.isPositive ? 'price-positive' : 'price-negative'
                    }`}>
                      {stat.change}
                    </p>
                  )}
                </div>
                <div className={`p-2 rounded-lg ${
                  stat.isNeutral 
                    ? 'bg-muted' 
                    : stat.isPositive 
                    ? 'bg-green-500/20' 
                    : 'bg-red-500/20'
                }`}>
                  <stat.icon className={`h-5 w-5 ${
                    stat.isNeutral 
                      ? 'text-muted-foreground' 
                      : stat.isPositive 
                      ? 'text-green-400' 
                      : 'text-red-400'
                  }`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Market Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Open Interest</span>
              <span className="font-medium">{market.openInterest ? formatNumber(market.openInterest) + ' vVOL' : 'N/A'}</span>
            </div>
            {market.openInterestBreakdown && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground ml-4">• Long Positions</span>
                  <span className="font-medium">{formatNumber(market.openInterestBreakdown.totalLongs)} vVOL</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground ml-4">• Short Positions</span>
                  <span className="font-medium">{formatNumber(market.openInterestBreakdown.totalShorts)} vVOL</span>
                </div>
              </>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Max Leverage</span>
              <span className="font-medium">{market.maxLeverage ? `${market.maxLeverage}x` : 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">24h Volume</span>
              <span className="font-medium">{formatCurrency(market.volume24h)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total vVOL Liquidity</span>
              <span className="font-medium">{formatNumber(market.totalLiquidity.vvol)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total USDC Liquidity</span>
              <span className="font-medium">{formatCurrency(market.totalLiquidity.usdc)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Last Oracle Update</span>
              <span className="font-medium">
                {market.lastUpdate ? new Date(market.lastUpdate * 1000).toLocaleTimeString() : 'N/A'}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Price Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mark Price</span>
                <span className="font-medium">{formatCurrency(market.vvolPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Index Price (ETH)</span>
                <span className="font-medium">{formatCurrency(market.indexPrice || 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Premium/Discount</span>
                <span className={`font-medium ${
                  market.indexPrice && market.vvolPrice > market.indexPrice / 1000 
                    ? 'price-positive' 
                    : 'price-negative'
                }`}>
                  {market.indexPrice 
                    ? `${(((market.vvolPrice - market.indexPrice / 1000) / (market.indexPrice / 1000)) * 100).toFixed(2)}%`
                    : 'N/A'
                  }
                </span>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="text-sm text-muted-foreground mb-2">Mark Price indicates the current trading price on HyperVIX platform</div>
              <div className="text-sm text-muted-foreground">Index Price shows the real ETH volatility reference</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}