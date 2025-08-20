import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAccount } from 'wagmi'
import { useTradingStore } from '@/store/trading'
import { useTrading } from '@/hooks/useTrading'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { TrendingUp, TrendingDown, AlertTriangle, X } from 'lucide-react'
import { useState } from 'react'

export function PositionManager() {
  const { isConnected } = useAccount()
  const { user, market } = useTradingStore()
  const { closePosition } = useTrading()
  const [isClosing, setIsClosing] = useState(false)

  const handleClosePosition = async () => {
    try {
      setIsClosing(true)
      await closePosition()
    } catch (error) {
      console.error('Error closing position:', error)
    } finally {
      setIsClosing(false)
    }
  }

  if (!isConnected) {
    return (
      <Card className="trading-card">
        <CardHeader>
          <CardTitle className="text-xl">Your Position</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">Connect your wallet to view positions</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!user.position) {
    return (
      <Card className="trading-card">
        <CardHeader>
          <CardTitle className="text-xl">Your Position</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No open position</p>
            <p className="text-sm text-muted-foreground mt-2">
              Open a volatility position to start trading
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const position = user.position
  const profitPercentage = ((position.currentPnL / position.margin) * 100)
  const isProfitable = position.currentPnL > 0

  return (
    <Card className="trading-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Your Position</CardTitle>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
            position.isLong 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-red-500/20 text-red-400'
          }`}>
            {position.isLong ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            {position.isLong ? 'LONG' : 'SHORT'}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Position Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Position Size</p>
            <p className="text-lg font-bold">{formatNumber(Math.abs(position.size))} vVOL</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Margin</p>
            <p className="text-lg font-bold">{formatCurrency(position.margin)}</p>
          </div>
        </div>

        {/* PnL Display */}
        <div className="p-4 rounded-lg bg-secondary/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Unrealized PnL</span>
            <span className={`text-lg font-bold ${isProfitable ? 'price-positive' : 'price-negative'}`}>
              {isProfitable ? '+' : ''}{formatCurrency(position.currentPnL)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">PnL %</span>
            <span className={`text-sm font-medium ${isProfitable ? 'price-positive' : 'price-negative'}`}>
              {isProfitable ? '+' : ''}{profitPercentage.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Position Details */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Entry Price</span>
            <span className="text-sm font-medium">{formatCurrency(position.entryPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Current Price</span>
            <span className="text-sm font-medium">{formatCurrency(market.vvolPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Liquidation Price</span>
            <span className="text-sm font-medium text-red-400">{formatCurrency(position.liquidationPrice)}</span>
          </div>
        </div>

        {/* Liquidation Risk Warning */}
        {user.liquidationRisk && (
          <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <div>
              <p className="text-sm font-medium text-red-400">Liquidation Risk</p>
              <p className="text-xs text-red-400/80">Your position is at risk of liquidation</p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleClosePosition}
            disabled={isClosing}
            variant="destructive"
            className="w-full"
          >
            <X className="h-4 w-4 mr-2" />
            {isClosing ? 'Closing Position...' : 'Close Position'}
          </Button>
          
          <div className="text-xs text-muted-foreground text-center">
            Closing will realize your current PnL and return remaining margin
          </div>
        </div>

        {/* Position Stats */}
        <div className="pt-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Leverage</span>
            <span>{((Math.abs(position.size) * market.vvolPrice) / position.margin).toFixed(2)}x</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Notional Value</span>
            <span>{formatCurrency(Math.abs(position.size) * market.vvolPrice)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Margin Ratio</span>
            <span>{((position.margin / (Math.abs(position.size) * market.vvolPrice)) * 100).toFixed(2)}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}