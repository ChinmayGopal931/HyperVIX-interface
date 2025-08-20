import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Wallet, LogOut } from 'lucide-react'
import { truncateAddress } from '@/lib/utils'

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected && address) {
    return (
      <Card className="w-fit">
        <CardContent className="flex items-center gap-3 p-3">
          <Wallet className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">{truncateAddress(address)}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => disconnect()}
            className="h-6 w-6 p-0"
          >
            <LogOut className="h-3 w-3" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex gap-2">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          onClick={() => connect({ connector })}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Wallet className="h-4 w-4" />
          Connect {connector.name}
        </Button>
      ))}
    </div>
  )
}