import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useMarketQuery } from '@/hooks/useMarketQuery'
import { useFundingRateQuery } from '@/hooks/useFundingRateQuery'
import { formatNumber, formatCurrency } from '@/lib/utils'
import { TrendingUp, Clock, DollarSign, Loader2 } from 'lucide-react'

export function MarketOverview() {
  const { data: market, isLoading: isMarketLoading, error: marketError } = useMarketQuery()
  const { data: fundingData } = useFundingRateQuery()


  if (isMarketLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading market data...</span>
      </div>
    )
  }

  if (marketError) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500">Error loading market data</p>
        <p className="text-sm text-muted-foreground mt-2">
          {marketError instanceof Error ? marketError.message : 'Unknown error'}
        </p>
      </div>
    )
  }

  if (!market) return null


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
      title: 'Volatility Annualized',
      value: `${(market.volatility * 100).toFixed(2)}`,
      icon: TrendingUp,
      change: market.volatility > 0 ? 'Live' : 'N/A',
      isPositive: market.volatility > 0
    },
    {
      title: 'vVOL Index',
      value: (market.vvolPrice),
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
      value: `${((fundingData?.predictedRate || 0) * 100).toFixed(4)}%`,
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

              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Details */}
      <div className="grid grid-cols-1 gap-6">
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

      </div>
    </div>
  )
}