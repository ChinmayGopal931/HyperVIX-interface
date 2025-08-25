// In src/components/PositionInfo.tsx

import { useUserQuery } from '@/hooks/useUserQuery'
import { useTradingMutations } from '@/hooks/useTradingMutations'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { XCircle, Loader2 } from 'lucide-react'

export function PositionInfo() {
  const { data: userData, isLoading } = useUserQuery()
  const { closePosition } = useTradingMutations()


  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    )
  }

  const position = userData?.position

  // Return null if there's no position
  if (!position) {
    return null;
  }
  
  const handleClose = () => {
    closePosition.mutate()
  }

  const isProfit = position.currentPnL >= 0;
  const pnlColor = isProfit ? 'text-green-400' : 'text-red-400';

  return (
    <Card className="current-position-card">
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          <span>Current Position</span>
          <span className={`text-lg px-3 py-1 rounded-md ${
            position.isLong ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}>
            {position.isLong ? 'LONG' : 'SHORT'}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Main PnL Display */}
        <div className="flex justify-between items-center text-xl mb-6 border-b border-border pb-4">
          <span className="text-muted-foreground font-medium">Unrealized PnL</span>
          <span className={`font-bold ${pnlColor}`}>
            {isProfit ? '+' : ''}{formatCurrency(position.currentPnL)}
          </span>
        </div>
        
        {/* Horizontal Layout for Position Details */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">Size (vVOL)</span>
            <div className="text-lg font-medium">{Math.abs(position.size).toFixed(4)}</div>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">Entry Price</span>
            <div className="text-lg font-medium">{formatCurrency(position.entryPrice)}</div>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">Margin</span>
            <div className="text-lg font-medium">{formatCurrency(position.margin / 1e12)} USDC</div>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">Margin Ratio</span>
            <div className="text-lg font-medium">{position.marginRatio > 0 ? (position.margin / 1e12).toFixed(2) : 'N/A'}%</div>
          </div>
        </div>
      </CardContent>
      {/* 👇 NEW SECTION FOR THE BUTTON 👇 */}
      <CardFooter>
        <Button
          onClick={handleClose}
          disabled={closePosition.isPending}
          variant="destructive"
          className="w-full h-12 text-base font-medium"
        >
          {closePosition.isPending ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Closing...
            </>
          ) : (
            <>
              <XCircle className="h-5 w-5 mr-2" />
              Close Position
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}