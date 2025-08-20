import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAccount } from 'wagmi'
import { useContracts } from '@/hooks/useContracts'
import { useUserData } from '@/hooks/useUserData'
import { parseUnits } from 'ethers'
import { Coins, Gift, Loader2 } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

export function USDCFaucet() {
  const { address, isConnected } = useAccount()
  const { contracts } = useContracts()
  const { fetchUserData } = useUserData()
  const [amount, setAmount] = useState('1000')
  const [isLoading, setIsLoading] = useState(false)
  const [lastClaim, setLastClaim] = useState<string | null>(null)

  const claimUSDC = async () => {
    if (!contracts || !address) return

    try {
      setIsLoading(true)
      
      const usdcAmount = parseUnits(amount, 6) // USDC has 6 decimals
      const usdcWrite = contracts.usdcWrite || contracts.usdc
      
      const tx = await usdcWrite.faucet(address, usdcAmount)
      await tx.wait()
      
      setLastClaim(new Date().toLocaleTimeString())
      
      // Refresh user balance
      await fetchUserData()
      
      // Show success message would go here
      console.log(`Successfully claimed ${amount} USDC!`)
      
    } catch (error) {
      console.error('Failed to claim USDC:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const quickAmounts = ['100', '1000', '10000']

  if (!isConnected) {
    return (
      <Card className="border-green-500 bg-green-50 dark:bg-green-950/20">
        <CardContent className="flex items-center gap-3 p-4">
          <Coins className="h-5 w-5 text-green-500" />
          <div className="flex-1">
            <p className="font-medium text-green-600">USDC Faucet Available</p>
            <p className="text-sm text-green-600/80">Connect wallet to claim free test USDC</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-green-500">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Gift className="h-5 w-5 text-green-500" />
          Free USDC Faucet
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          <p>Get free test USDC for trading on HyperVIX. This is MockUSDC with unlimited supply for testing.</p>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Amount (USDC)</label>
          <Input
            type="number"
            placeholder="1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* Quick Amount Buttons */}
        <div className="flex gap-2">
          {quickAmounts.map((quickAmount) => (
            <Button
              key={quickAmount}
              onClick={() => setAmount(quickAmount)}
              variant="outline"
              size="sm"
              disabled={isLoading}
              className="flex-1"
            >
              {formatCurrency(parseFloat(quickAmount))}
            </Button>
          ))}
        </div>

        {/* Claim Button */}
        <Button
          onClick={claimUSDC}
          disabled={!contracts || isLoading || !amount || parseFloat(amount) <= 0}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Claiming USDC...
            </>
          ) : (
            <>
              <Coins className="mr-2 h-4 w-4" />
              Claim {formatCurrency(parseFloat(amount || '0'))} USDC
            </>
          )}
        </Button>

        {/* Last Claim Info */}
        {lastClaim && (
          <div className="text-xs text-green-600 bg-green-100 dark:bg-green-900/30 p-2 rounded">
            ✅ Last claim: {lastClaim}
          </div>
        )}

        {/* Instructions */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Free unlimited test USDC</p>
          <p>• Use for opening volatility positions</p>
          <p>• Automatically updates your balance</p>
          <p>• Contract: {contracts?.usdc.target.toString().slice(0, 10)}...</p>
        </div>
      </CardContent>
    </Card>
  )
}