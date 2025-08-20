// In src/components/PositionInfo.tsx

import { useState } from 'react'; // 👈 Import useState
import { useTradingStore } from '@/store/trading';
import { useTrading } from '@/hooks/useTrading'; // 👈 Import the useTrading hook
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'; // 👈 Import CardFooter
import { Button } from '@/components/ui/button'; // 👈 Import Button
import { formatCurrency } from '@/lib/utils';
import { XCircle } from 'lucide-react'; // 👈 Import an icon for the button

export function PositionInfo() {
  const { position } = useTradingStore((state) => state.user);
  const { closePosition } = useTrading(); // 👈 Get the closePosition function
  const [isClosing, setIsClosing] = useState(false);

  // Return null if there's no position
  if (!position) {
    return null;
  }
  
  const handleClose = async () => {


    setIsClosing(true);
    try {
      await closePosition();
      // The position info will disappear automatically when useUserData refreshes
    } catch (error) {
      console.error("Failed to close position:", error);
      // You could show a toast notification here
    } finally {
      setIsClosing(false);
    }
  };


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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
            <div className="text-lg font-medium">{formatCurrency(position.margin)} USDC</div>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">Leverage</span>
            <div className="text-lg font-medium">{position.leverage?.toFixed(2)}x</div>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">Margin Ratio</span>
            <div className="text-lg font-medium">{position.marginRatio ? (position.marginRatio * 100).toFixed(2) : 'N/A'}%</div>
          </div>
        </div>
      </CardContent>
      {/* 👇 NEW SECTION FOR THE BUTTON 👇 */}
      <CardFooter>
        <Button
          onClick={handleClose}
          disabled={isClosing}
          variant="destructive"
          className="w-full h-12 text-base font-medium"
        >
          {isClosing ? (
            'Closing...'
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