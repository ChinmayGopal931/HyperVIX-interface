import { useEffect, useState } from 'react'
import { useAccount, useChainId } from 'wagmi'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Wifi, WifiOff } from 'lucide-react'
import { NETWORK_CONFIG } from '@/lib/contracts'

export function NetworkCheck() {
  const { isConnected } = useAccount()
  const chainId = useChainId()
  const [isOnCorrectNetwork, setIsOnCorrectNetwork] = useState(true)
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  useEffect(() => {
    if (isConnected) {
      setIsOnCorrectNetwork(chainId === NETWORK_CONFIG.chainId)
    }
  }, [isConnected, chainId])

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${NETWORK_CONFIG.chainId.toString(16)}` }],
        })
      } catch (switchError: any) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: `0x${NETWORK_CONFIG.chainId.toString(16)}`,
                  chainName: NETWORK_CONFIG.name,
                  rpcUrls: [NETWORK_CONFIG.rpcUrl],
                  nativeCurrency: NETWORK_CONFIG.nativeCurrency,
                },
              ],
            })
          } catch (addError) {
            console.error('Failed to add network:', addError)
          }
        }
      }
    }
  }

  if (!isOnline) {
    return (
      <Card className="border-destructive">
        <CardContent className="flex items-center gap-3 p-4">
          <WifiOff className="h-5 w-5 text-destructive" />
          <div className="flex-1">
            <p className="font-medium text-destructive">No Internet Connection</p>
            <p className="text-sm text-muted-foreground">Please check your network connection</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isConnected && !isOnCorrectNetwork) {
    return (
      <Card className="border-yellow-500">
        <CardContent className="flex items-center gap-3 p-4">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <div className="flex-1">
            <p className="font-medium text-yellow-500">Wrong Network</p>
            <p className="text-sm text-muted-foreground">
              Please switch to {NETWORK_CONFIG.name} (Chain ID: {NETWORK_CONFIG.chainId})
            </p>
          </div>
          <Button onClick={switchNetwork} size="sm" variant="outline">
            Switch Network
          </Button>
        </CardContent>
      </Card>
    )
  }



  return null
}