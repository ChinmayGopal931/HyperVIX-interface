import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTradingStore } from '@/store/trading'
import { useContracts } from '@/hooks/useContracts'
import { useEffect, useState } from 'react'

interface ChartDataPoint {
  timestamp: number
  time: string
  volatility: number
  markPrice: number
  indexPrice: number
}

export function VolatilityChart() {
  const { selectedTimeframe, market } = useTradingStore()
  const { contracts } = useContracts()
  const [historicalData, setHistoricalData] = useState<ChartDataPoint[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState<string>('')

  const fetchHistoricalData = async () => {
    if (!contracts) return

    try {
      setLoading(true)
      setError(null)
      setProgress('Connecting to blockchain...')
      
      // Get current block number
      const provider = contracts.oracle.runner?.provider
      if (!provider) throw new Error('Provider not available')
      const currentBlock = await provider.getBlockNumber()
      
      // Fetch events in chunks to avoid RPC limits
      const CHUNK_SIZE = 1000 // Max blocks per request
      const TOTAL_BLOCKS = 10000 // Total blocks to fetch
      const startBlock = Math.max(0, currentBlock - TOTAL_BLOCKS)
      
      const allVolatilityEvents = []
      const totalChunks = Math.ceil((currentBlock - startBlock) / CHUNK_SIZE)
      let completedChunks = 0
      
      setProgress(`Fetching historical data (0/${totalChunks} chunks)...`)
      
      // Fetch in chunks
      for (let fromBlock = startBlock; fromBlock < currentBlock; fromBlock += CHUNK_SIZE) {
        const toBlock = Math.min(fromBlock + CHUNK_SIZE - 1, currentBlock)
        
        try {
          const events = await contracts.oracle.queryFilter(
            contracts.oracle.filters.VolatilityUpdated(),
            fromBlock,
            toBlock
          )
          allVolatilityEvents.push(...events)
          completedChunks++
          setProgress(`Fetching historical data (${completedChunks}/${totalChunks} chunks)...`)
        } catch (chunkError) {
          console.warn(`Failed to fetch chunk ${fromBlock}-${toBlock}:`, chunkError)
          // Continue with other chunks
        }
      }

      console.log('Fetched volatility events:', allVolatilityEvents.length)

      if (allVolatilityEvents.length === 0) {
        throw new Error('No historical volatility data found on the blockchain')
      }

      const chartData: ChartDataPoint[] = []
      
      // Process only the most recent events to avoid overwhelming the chart
      const recentEvents = allVolatilityEvents.slice(-50)
      setProgress(`Processing ${recentEvents.length} events...`)
      
      for (let i = 0; i < recentEvents.length; i++) {
        const event = recentEvents[i]
        try {
          const block = await event.getBlock()
          const timestamp = block.timestamp * 1000
          const volatility = Number((event as any).args?.annualizedVolatility || 0) / Math.pow(10, 18) * 100
          
          // Get mark price at that time (current mark price for now)
          const markPrice = market.vvolPrice
          
          chartData.push({
            timestamp,
            time: new Date(timestamp).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit'
            }),
            volatility,
            markPrice,
            indexPrice: market.indexPrice || 0
          })

          if (i % 10 === 0) {
            setProgress(`Processing events (${i + 1}/${recentEvents.length})...`)
          }
        } catch (blockError) {
          console.warn('Failed to process event:', blockError)
          // Continue with other events
        }
      }

      if (chartData.length === 0) {
        throw new Error('Failed to process any historical events')
      }

      // Sort by timestamp to ensure chronological order
      chartData.sort((a, b) => a.timestamp - b.timestamp)
      setHistoricalData(chartData)
      setProgress('')
    } catch (error) {
      console.error('Error fetching historical data:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      setError(errorMessage)
      
      // Fallback to current data point only
      setHistoricalData([{
        timestamp: Date.now(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        volatility: market.volatility,
        markPrice: market.vvolPrice,
        indexPrice: market.indexPrice || 0
      }])
    } finally {
      setLoading(false)
      setProgress('')
    }
  }

  useEffect(() => {
    fetchHistoricalData()
  }, [contracts, market.volatility])

  const data = historicalData.length > 0 ? historicalData : [{
    timestamp: Date.now(),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    volatility: market.volatility,
    markPrice: market.vvolPrice,
    indexPrice: market.indexPrice || 0
  }]

  return (
    <Card className="trading-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">
            Volatility & Price Charts
            {loading && <span className="text-sm font-normal text-muted-foreground ml-2">({progress || 'Loading...'})</span>}
            {error && <span className="text-sm font-normal text-red-400 ml-2">(Error: {error})</span>}
          </CardTitle>
          <Tabs defaultValue="volatility" className="w-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="volatility">Volatility</TabsTrigger>
              <TabsTrigger value="price">Prices</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="h-80 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p>No historical data available</p>
              <p className="text-sm mt-2">Contracts not deployed yet - using development mode</p>
            </div>
          </div>
        ) : (
          <Tabs defaultValue="volatility" className="space-y-4">
            <TabsContent value="volatility" className="space-y-4">
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height={320} minHeight={320}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="time" 
                      stroke="#9CA3AF"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      fontSize={12}
                      domain={data.length > 1 ? ['dataMin - 2', 'dataMax + 2'] : [0, 100]}
                      tickFormatter={(value) => `${value.toFixed(1)}%`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number) => [`${value.toFixed(2)}%`, 'Volatility']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="volatility" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      dot={data.length === 1}
                      activeDot={{ r: 4, stroke: '#10B981', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="price" className="space-y-4">
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height={320} minHeight={320}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="time" 
                      stroke="#9CA3AF"
                      fontSize={12}
                    />
                    <YAxis 
                      yAxisId="left"
                      stroke="#9CA3AF"
                      fontSize={12}
                      tickFormatter={(value) => `$${value.toFixed(3)}`}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      stroke="#9CA3AF"
                      fontSize={12}
                      tickFormatter={(value) => `$${value.toFixed(0)}`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                      formatter={(value: number, name: string) => [
                        name === 'markPrice' ? `$${value.toFixed(4)}` : `$${value.toFixed(0)}`,
                        name === 'markPrice' ? 'vVOL Price' : 'ETH Price'
                      ]}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="markPrice" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      dot={data.length === 1}
                      name="markPrice"
                    />
                    {data.some(d => d.indexPrice > 0) && (
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="indexPrice" 
                        stroke="#F59E0B" 
                        strokeWidth={2}
                        dot={data.length === 1}
                        strokeDasharray="5 5"
                        name="indexPrice"
                      />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        )}
        
        <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-green-500"></div>
            <span>vVOL Mark Price</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-yellow-500 border-dashed"></div>
            <span>ETH Index Price</span>
          </div>
          <div className="text-xs">
            {error ? (
              <span className="text-red-400">
                Error loading data • Using fallback
              </span>
            ) : (
              <>Data from blockchain events • {data.length} point{data.length !== 1 ? 's' : ''}</>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}