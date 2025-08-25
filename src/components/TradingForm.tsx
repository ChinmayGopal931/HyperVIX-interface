import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Slider } from '@/components/ui/slider'
import { useAccount } from 'wagmi'
import { useMarketQuery } from '@/hooks/useMarketQuery'
import { useTradingMutations } from '@/hooks/useTradingMutations'
import { formatCurrency, calculateLeverage } from '@/lib/utils'
import { TrendingUp, TrendingDown, AlertTriangle, Loader2 } from 'lucide-react'

export function TradingForm() {
  const { isConnected } = useAccount()
  const { data: market, isLoading } = useMarketQuery()
  const { openPosition } = useTradingMutations()
  
  const [tradeDirection, setTradeDirection] = useState<'long' | 'short'>('long')
  const [tradeSize, setTradeSize] = useState('')
  const [tradeMargin, setTradeMargin] = useState('')

  const currentLeverage = tradeSize && tradeMargin && market
    ? calculateLeverage(parseFloat(tradeSize), parseFloat(tradeMargin), market.vvolPrice)
    : 1

  const calculateEstimatedValues = () => {
    if (!market) return { estimatedEntryPrice: 0, estimatedLiquidationPrice: 0, tradingFee: 0 }
    
    const sizeValue = parseFloat(tradeSize) || 0
    const marginValue = parseFloat(tradeMargin) || 0
    
    const estimatedEntryPrice = market.vvolPrice
    const leverage = sizeValue > 0 && marginValue > 0 ? (sizeValue * estimatedEntryPrice) / marginValue : 1
    const isLong = tradeDirection === 'long'
    
    const maintenanceMargin = 0.05
    const estimatedLiquidationPrice = isLong 
      ? estimatedEntryPrice * (1 - (1 / leverage) + maintenanceMargin)
      : estimatedEntryPrice * (1 + (1 / leverage) - maintenanceMargin)
    
    return {
      estimatedEntryPrice,
      estimatedLiquidationPrice: Math.max(0, estimatedLiquidationPrice),
      tradingFee: marginValue * 0.001
    }
  }

  const handleSizeChange = useCallback((value: string) => {
    setTradeSize(value)
  }, [])

  const handleMarginChange = useCallback((value: string) => {
    setTradeMargin(value)
  }, [])

  const handleLeverageChange = useCallback((value: number[]) => {
    const leverage = value[0]
    if (tradeMargin && market) {
      const newSize = (parseFloat(tradeMargin) * leverage) / market.vvolPrice
      setTradeSize(newSize.toFixed(6))
    }
  }, [tradeMargin, market])

  const handleSubmit = () => {
    if (!isConnected || !market) return
    
    openPosition.mutate({
      direction: tradeDirection,
      size: tradeSize,
      margin: tradeMargin
    })
  }

  const isFormValid = tradeSize && tradeMargin && parseFloat(tradeSize) > 0 && parseFloat(tradeMargin) > 0
  const isHighLeverage = currentLeverage > 5

  // Removed excessive logging

  return (
    <Card className="trading-card">
      <CardHeader>
        <CardTitle className="text-xl">Trade Volatility</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Direction Tabs */}
        <Tabs value={tradeDirection} onValueChange={(value) => setTradeDirection(value as 'long' | 'short')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="long" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Long
            </TabsTrigger>
            <TabsTrigger value="short" className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4" />
              Short
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="long" className="mt-4">
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm text-green-400">
                <strong>Long Volatility:</strong> Profit when volatility increases. 
                You expect market turbulence to rise.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="short" className="mt-4">
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-400">
                <strong>Short Volatility:</strong> Profit when volatility decreases. 
                You expect markets to become calmer.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Position Size Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Position Size (vVOL)</label>
          <Input
            type="number"
            placeholder="0.00"
            value={tradeSize}
            onChange={(e) => handleSizeChange(e.target.value)}
            step="0.000001"
            min="0"
          />
          <div className="text-xs text-muted-foreground">
            Current vVOL Price: {formatCurrency(market?.vvolPrice || 0)}
          </div>
        </div>

        {/* Margin Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Margin (USDC)</label>
          <Input
            type="number"
            placeholder="0.00"
            value={tradeMargin}
            onChange={(e) => handleMarginChange(e.target.value)}
            step="0.01"
            min="0"
          />
          <div className="text-xs text-muted-foreground">
            Collateral to secure your position
          </div>
        </div>

        {/* Leverage Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Leverage</label>
            <span className={`text-sm font-bold ${isHighLeverage ? 'text-yellow-400' : 'text-foreground'}`}>
              {currentLeverage.toFixed(2)}x
            </span>
          </div>
          
          <Slider
            value={[currentLeverage]}
            onValueChange={handleLeverageChange}
            max={10}
            min={1}
            step={0.1}
            className="w-full"
          />
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1x</span>
            <span>5x</span>
            <span>10x</span>
          </div>
          
          {isHighLeverage && (
            <div className="flex items-center gap-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded">
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
              <span className="text-xs text-yellow-400">High leverage increases liquidation risk</span>
            </div>
          )}
        </div>

        {/* Position Summary */}
        {isFormValid && market && (
          <div className="space-y-3 p-4 bg-secondary/50 rounded-lg">
            <h4 className="font-medium">Position Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Entry Price</span>
                <span>{formatCurrency(calculateEstimatedValues().estimatedEntryPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Position Notional</span>
                <span>{formatCurrency(parseFloat(tradeSize || '0') * calculateEstimatedValues().estimatedEntryPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trading Fee (0.1%)</span>
                <span>{formatCurrency(calculateEstimatedValues().tradingFee)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Liquidation Price</span>
                <span className="text-red-400">{formatCurrency(calculateEstimatedValues().estimatedLiquidationPrice)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={!isConnected || !isFormValid || isLoading || openPosition.isPending}
          className={`w-full h-12 text-base font-medium ${
            tradeDirection === 'long' 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          {!isConnected ? 'Connect Wallet' : 
           openPosition.isPending ? (
             <>
               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
               Opening Position...
             </>
           ) :
           isLoading ? 'Loading Market Data...' :
           `Open ${tradeDirection === 'long' ? 'Long' : 'Short'} Position`}
        </Button>

        {/* Risk Warning */}
        <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-xs text-destructive">
            <strong>Risk Warning:</strong> Volatility trading involves significant risk. 
            You may lose all of your margin. Only trade with funds you can afford to lose.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}