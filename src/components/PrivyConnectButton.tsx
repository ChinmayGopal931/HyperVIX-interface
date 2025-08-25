/**
 * Privy Connect Button Component
 * 
 * Real Privy integration for wallet connection
 */

import { Button } from '@/components/ui/button'
import { Wallet, LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { usePrivy, useWallets } from '@privy-io/react-auth'

export function PrivyConnectButton() {
  const [isConnecting, setIsConnecting] = useState(false)
  const { ready, authenticated, user, login, logout } = usePrivy()
  const { wallets } = useWallets()

  if (!ready) {
    return (
      <Button disabled className="min-w-[140px]">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
      </Button>
    )
  }

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      login()
    } catch (error) {
      console.error('Connection failed:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnect = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Disconnect failed:', error)
    }
  }

  if (!authenticated || !user) {
    return (
      <Button 
        onClick={handleConnect}
        disabled={isConnecting}
        className="min-w-[140px] bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
      >
        {isConnecting ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        ) : (
          <>
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </>
        )}
      </Button>
    )
  }

  // Get the primary wallet address
  const walletAddress = wallets[0]?.address
  const displayAddress = walletAddress 
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : user.email?.address?.slice(0, 20) + '...' || user.phone?.number || 'Connected'

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
        <User className="w-4 h-4 text-green-400" />
        <span className="text-sm font-medium text-green-400">
          {displayAddress}
        </span>
      </div>
      <Button
        onClick={handleDisconnect}
        variant="outline"
        size="sm"
        className="border-red-500/20 text-red-400 hover:bg-red-500/10"
      >
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  )
}