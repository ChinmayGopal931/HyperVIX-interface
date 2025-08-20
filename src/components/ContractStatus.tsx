import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useContracts } from '@/hooks/useContracts'
import { useTradingStore } from '@/store/trading'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react'

export function ContractStatus() {
  const { contracts, isConnected } = useContracts()
  const { market, loading, error } = useTradingStore()

  const getConnectionStatus = () => {
    if (!isConnected) return { status: 'disconnected', color: 'destructive', icon: XCircle }
    if (!contracts) return { status: 'connecting', color: 'warning', icon: Clock }
    if (error) return { status: 'error', color: 'destructive', icon: AlertTriangle }
    if (loading) return { status: 'loading', color: 'warning', icon: Clock }
    return { status: 'connected', color: 'success', icon: CheckCircle }
  }

  const connectionStatus = getConnectionStatus()

  const getDataStatus = () => {
    if (market.volatility > 0 && market.vvolPrice > 0) {
      return { status: 'live', color: 'success', text: 'Live Data' }
    }
    if (loading) {
      return { status: 'loading', color: 'warning', text: 'Loading...' }
    }
    return { status: 'no-data', color: 'destructive', text: 'No Data' }
  }

  const dataStatus = getDataStatus()

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <connectionStatus.icon className="h-4 w-4" />
          Contract Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Connection</span>
          <Badge variant={connectionStatus.color as any} className="text-xs">
            {connectionStatus.status}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Market Data</span>
          <Badge variant={dataStatus.color as any} className="text-xs">
            {dataStatus.text}
          </Badge>
        </div>

        {isConnected && contracts && (
          <>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Network</span>
              <span className="text-xs font-mono">Hyperliquid (998)</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Oracle</span>
              <span className="text-xs font-mono">
                {contracts.oracle.target.toString().slice(0, 6)}...{contracts.oracle.target.toString().slice(-4)}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Perpetual</span>
              <span className="text-xs font-mono">
                {contracts.perpetual.target.toString().slice(0, 6)}...{contracts.perpetual.target.toString().slice(-4)}
              </span>
            </div>
          </>
        )}

        {error && (
          <div className="text-xs text-destructive mt-2 p-2 bg-destructive/10 rounded">
            {error}
          </div>
        )}
      </CardContent>
    </Card>
  )
}