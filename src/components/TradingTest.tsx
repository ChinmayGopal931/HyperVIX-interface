import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAccount } from 'wagmi'
import { useContracts } from '@/hooks/useContracts'
import { parseUnits } from 'ethers'
import { Zap, TrendingUp } from 'lucide-react'

export function TradingTest() {
  const { address, isConnected } = useAccount()
  const { contracts } = useContracts()
  const [size, setSize] = useState('100')
  const [margin, setMargin] = useState('50')
  const [isTrading, setIsTrading] = useState(false)

  const openTestPosition = async () => {
    if (!contracts || !address) {
      alert('Please connect wallet and wait for contracts to load')
      return
    }

    try {
      setIsTrading(true)
      
      console.log('Opening test position:', { size, margin })
      
      // Convert values
      const sizeDelta = parseUnits(size, 18) // 18 decimals for position size
      const marginDelta = parseUnits(margin, 6) // 6 decimals for USDC
      
      console.log('Converted values:', { 
        sizeDelta: sizeDelta.toString(), 
        marginDelta: marginDelta.toString() 
      })
      
      // Use write contracts
      const usdcWrite = contracts.usdcWrite || contracts.usdc
      const perpetualWrite = contracts.perpetualWrite || contracts.perpetual
      
      // Step 1: Approve USDC
      console.log('Approving USDC...')
      const approveTx = await usdcWrite.approve(
        contracts.perpetual.target,
        marginDelta
      )
      await approveTx.wait()
      console.log('USDC approved')
      
      // Step 2: Open position
      console.log('Opening position...')
      const positionTx = await perpetualWrite.openPosition(sizeDelta, marginDelta)
      await positionTx.wait()
      console.log('Position opened successfully!')
      
      alert('🎉 Test position opened successfully!')
      
    } catch (error) {
      console.error('Failed to open test position:', error)
      alert(`Failed to open position: ${error.message}`)
    } finally {
      setIsTrading(false)
    }
  }

  return (
    <Card className="border-purple-500">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Zap className="h-5 w-5 text-purple-500" />
          Quick Trading Test
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Simple test to open a position with basic inputs. Use this if the main trading form isn't working.
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Size (vVOL)</label>
            <Input
              type="number"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="100"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Margin (USDC)</label>
            <Input
              type="number"
              value={margin}
              onChange={(e) => setMargin(e.target.value)}
              placeholder="50"
            />
          </div>
        </div>

        <div className="text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
          <strong>Test Values:</strong> {size} vVOL position with {margin} USDC margin
        </div>

        <Button
          onClick={openTestPosition}
          disabled={!isConnected || !contracts || isTrading}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          {isTrading ? (
            'Opening Position...'
          ) : !isConnected ? (
            'Connect Wallet'
          ) : !contracts ? (
            'Loading Contracts...'
          ) : (
            <>
              <TrendingUp className="mr-2 h-4 w-4" />
              Open Test Long Position
            </>
          )}
        </Button>

        <div className="text-xs text-muted-foreground">
          This will:
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Approve {margin} USDC spending</li>
            <li>Open a {size} vVOL long position</li>
            <li>Show detailed console logs</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}