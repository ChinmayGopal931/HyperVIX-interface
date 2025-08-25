/**
 * Modern volatility chart showing Mark Price vs Index Price with trading activity
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { useMarketQuery } from '@/hooks/useMarketQuery'
import { useTradeHistory } from '@/hooks/useTradeHistory'
import { useMarkPrice } from '@/hooks/useMarkPrice'
import { formatCurrency } from '@/lib/utils'
import { Loader2, Activity, TrendingUp } from 'lucide-react'

export function VolatilityChart() {
  const { data: market } = useMarketQuery()
   const { trades, chartData, isLoading, error } = useTradeHistory()
  const currentMarkPrice = useMarkPrice()

  // Create fallback data if no historical data
  const fallbackData = market ? [{
    timestamp: Date.now(),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    markPrice: market.vvolPrice,
    indexPrice: market.volatility * 100, // Convert to percentage for display
    volume: 0
  }] : []
  

  const displayData = chartData.length > 0 ? chartData : fallbackData
  const recentTrades = trades.slice(-20).reverse() // Show last 20 trades

  if (isLoading && chartData.length === 0) {
    return (
      <Card className="trading-card">
        <CardContent className="flex items-center justify-center h-80">
          <div className="flex items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading trading data...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="trading-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Volatility Trading Activity
            {error && (
              <span className="text-sm font-normal text-amber-400 ml-2">
                (Limited data - using fallback)
              </span>
            )}
          </CardTitle>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Current Mark Price</div>
            <div className="text-lg font-bold text-green-400">
              {formatCurrency(currentMarkPrice)}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <Tabs defaultValue="price" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="price">Price Chart</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
            <TabsTrigger value="trades">Live Trades</TabsTrigger>
          </TabsList>

          {/* Price Chart Tab - Mark Price vs Index Price */}
          <TabsContent value="price">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={displayData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="time" 
                    stroke="#9CA3AF"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    fontSize={12}
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number, name: string) => [
                      formatCurrency(value),
                      name === 'markPrice' ? 'Mark Price (vVOL)' : 'Index Price (Volatility %)'
                    ]}
                    labelFormatter={(label) => `Time: ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="markPrice" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={displayData.length === 1}
                    activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
                    name="markPrice"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="indexPrice" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={displayData.length === 1}
                    activeDot={{ r: 4, stroke: '#F59E0B', strokeWidth: 2 }}
                    name="indexPrice"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          {/* Volume Chart Tab */}
          <TabsContent value="volume">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={displayData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="time" 
                    stroke="#9CA3AF"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    fontSize={12}
                    tickFormatter={(value) => `${value.toFixed(2)} vVOL`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`${value.toFixed(4)} vVOL`, 'Volume']}
                  />
                  <Bar 
                    dataKey="volume" 
                    fill="#10B981" 
                    opacity={0.8}
                    radius={[2, 2, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          {/* Live Trades Tab */}
          <TabsContent value="trades">
            <div className="h-80 overflow-hidden">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-muted-foreground border-b border-border pb-2">
                  <span>Time</span>
                  <span>Side</span>
                  <span>Size</span>
                  <span>Price</span>
                </div>
                <div className="max-h-64 overflow-y-auto space-y-1">
                  {recentTrades.length > 0 ? (
                    recentTrades.map((trade, index) => (
                      <div 
                        key={`${trade.timestamp}-${index}`}
                        className="flex justify-between items-center text-sm py-1 px-2 rounded hover:bg-secondary/50"
                      >
                        <span className="text-muted-foreground font-mono">
                          {trade.time}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.side === 'buy' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {trade.side.toUpperCase()}
                        </span>
                        <span className="font-mono">
                          {trade.size.toFixed(4)}
                        </span>
                        <span className="font-mono font-medium">
                          {formatCurrency(trade.markPrice)}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center justify-center h-32 text-muted-foreground">
                      <div className="text-center">
                        <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p>No recent trades</p>
                        <p className="text-xs">Waiting for trading activity...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Chart Legend */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-green-500 rounded"></div>
              <span className="text-muted-foreground">Mark Price (vVOL Trading Price)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-yellow-500 rounded" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, #F59E0B, #F59E0B 3px, transparent 3px, transparent 6px)'
              }}></div>
              <span className="text-muted-foreground">Index Price (True Volatility %)</span>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground text-right">
            {error ? (
              <div className="text-amber-400">
                Using fallback data • Limited blockchain access
              </div>
            ) : (
              <div>
                <div>{displayData.length} data points</div>
                <div>{recentTrades.length} recent trades</div>
              </div>
            )}
          </div>
        </div>

        {/* Market Stats */}
        {market && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-border pt-4">
            <div>
              <div className="text-xs text-muted-foreground">24h Volume</div>
              <div className="text-sm font-medium">{formatCurrency(market.volume24h)}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Open Interest</div>
              <div className="text-sm font-medium">
                {market.openInterest ? `${market.openInterest.toFixed(2)} vVOL` : 'N/A'}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Funding Rate</div>
              <div className="text-sm font-medium">
                {(market.fundingRate * 100).toFixed(4)}%
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Price Spread</div>
              <div className="text-sm font-medium">
                {market.vvolPrice && market.volatility ? 
                  `${Math.abs((market.vvolPrice - market.volatility * 100) / market.vvolPrice * 100).toFixed(2)}%` : 
                  'N/A'
                }
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}