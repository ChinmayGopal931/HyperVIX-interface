// Emergency Liquidity Seeding Script
// Run this to add liquidity to the current deployment

import { ethers } from 'ethers'
import { CONTRACTS, PERPETUAL_ABI, ERC20_ABI } from '../lib/contracts'

export async function seedLiquidity() {
  try {
    console.log('🌱 Starting emergency liquidity seeding...')
    
    // Connect to Hyperliquid testnet
    const provider = new ethers.JsonRpcProvider('https://rpc.hyperliquid-testnet.xyz/evm')
    
    // You'll need to set your private key or use browser wallet
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || 'your-private-key-here', provider)
    
    // Create contract instances
    const perpetual = new ethers.Contract(CONTRACTS.VolatilityPerpetual, PERPETUAL_ABI, wallet)
    const usdc = new ethers.Contract(CONTRACTS.USDC, ERC20_ABI, wallet)
    
    console.log('📊 Checking current reserves...')
    const currentVBase = await perpetual.vBaseAssetReserve()
    const currentVQuote = await perpetual.vQuoteAssetReserve()
    
    console.log(`Current reserves:`)
    console.log(`- vVOL: ${ethers.formatUnits(currentVBase, 18)}`)
    console.log(`- USDC: ${ethers.formatUnits(currentVQuote, 6)}`)
    
    // Calculate current price
    const currentPrice = Number(currentVQuote) / Number(currentVBase) * 1e12 // Adjust for decimal difference
    console.log(`- Current Price: $${currentPrice.toFixed(6)} per vVOL`)
    
    // Seed amounts - adjust based on current reserves
    const seedUSDC = ethers.parseUnits('100000', 6)  // 100K USDC
    const seedVVOL = ethers.parseUnits('500000', 18) // 500K vVOL at ~$0.20
    
    console.log('\n💰 Getting USDC from faucet...')
    await usdc.faucet(wallet.address, seedUSDC * 2n) // Get double for safety
    
    const balance = await usdc.balanceOf(wallet.address)
    console.log(`✅ USDC Balance: ${ethers.formatUnits(balance, 6)}`)
    
    console.log('\n🔓 Approving USDC spending...')
    await usdc.approve(perpetual.target, seedUSDC * 2n)
    console.log('✅ USDC approved')
    
    console.log('\n📈 Opening large LONG position to seed liquidity...')
    const longTx = await perpetual.openPosition(seedVVOL, seedUSDC, {
      gasLimit: 500000
    })
    await longTx.wait()
    console.log('✅ Long position opened')
    
    console.log('\n📉 Opening large SHORT position to balance...')
    const shortTx = await perpetual.openPosition(-seedVVOL, seedUSDC, {
      gasLimit: 500000
    })
    await shortTx.wait()
    console.log('✅ Short position opened')
    
    console.log('\n📊 Checking new reserves...')
    const newVBase = await perpetual.vBaseAssetReserve()
    const newVQuote = await perpetual.vQuoteAssetReserve()
    
    console.log(`New reserves:`)
    console.log(`- vVOL: ${ethers.formatUnits(newVBase, 18)}`)
    console.log(`- USDC: ${ethers.formatUnits(newVQuote, 6)}`)
    
    const newPrice = Number(newVQuote) / Number(newVBase) * 1e12
    console.log(`- New Price: $${newPrice.toFixed(6)} per vVOL`)
    
    console.log('\n🎉 Liquidity seeding completed!')
    console.log('Users should now be able to trade with much lower price impact.')
    
  } catch (error) {
    console.error('❌ Liquidity seeding failed:', error)
    throw error
  }
}

// Browser-compatible version using window.ethereum
export async function seedLiquidityBrowser() {
  try {
    if (!window.ethereum) {
      throw new Error('Please install MetaMask or connect a wallet')
    }
    
    console.log('🌱 Starting browser liquidity seeding...')
    
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    
    const perpetual = new ethers.Contract(CONTRACTS.VolatilityPerpetual, PERPETUAL_ABI, signer)
    const usdc = new ethers.Contract(CONTRACTS.USDC, ERC20_ABI, signer)
    
    const userAddress = await signer.getAddress()
    console.log(`Using wallet: ${userAddress}`)
    
    // Get current reserves
    const currentVBase = await perpetual.vBaseAssetReserve()
    const currentVQuote = await perpetual.vQuoteAssetReserve()
    
    console.log(`Current reserves:`)
    console.log(`- vVOL: ${ethers.formatUnits(currentVBase, 18)}`)
    console.log(`- USDC: ${ethers.formatUnits(currentVQuote, 6)}`)
    
    // Smaller amounts for browser (user pays gas)
    const seedUSDC = ethers.parseUnits('10000', 6)  // 10K USDC
    const seedVVOL = ethers.parseUnits('50000', 18) // 50K vVOL
    
    console.log('\n💰 Getting USDC from faucet...')
    const faucetTx = await usdc.faucet(userAddress, seedUSDC * 2n)
    await faucetTx.wait()
    
    console.log('\n🔓 Approving USDC spending...')
    const approveTx = await usdc.approve(perpetual.target, seedUSDC * 2n)
    await approveTx.wait()
    
    console.log('\n📈 Opening balanced positions...')
    
    // Open long position
    const longTx = await perpetual.openPosition(seedVVOL, seedUSDC)
    await longTx.wait()
    console.log('✅ Long position opened')
    
    // Open short position  
    const shortTx = await perpetual.openPosition(-seedVVOL, seedUSDC)
    await shortTx.wait()
    console.log('✅ Short position opened')
    
    // Check new reserves
    const newVBase = await perpetual.vBaseAssetReserve()
    const newVQuote = await perpetual.vQuoteAssetReserve()
    
    console.log('\n📊 New reserves:')
    console.log(`- vVOL: ${ethers.formatUnits(newVBase, 18)}`)
    console.log(`- USDC: ${ethers.formatUnits(newVQuote, 6)}`)
    
    console.log('\n🎉 Browser liquidity seeding completed!')
    
  } catch (error) {
    console.error('❌ Browser liquidity seeding failed:', error)
    throw error
  }
}

// Quick test function to check if liquidity is needed
export async function checkLiquidityStatus() {
  try {
    const provider = new ethers.JsonRpcProvider('https://rpc.hyperliquid-testnet.xyz/evm')
    const perpetual = new ethers.Contract(CONTRACTS.VolatilityPerpetual, PERPETUAL_ABI, provider)
    
    const vBase = await perpetual.vBaseAssetReserve()
    const vQuote = await perpetual.vQuoteAssetReserve()
    
    const vBaseNum = Number(ethers.formatUnits(vBase, 18))
    const vQuoteNum = Number(ethers.formatUnits(vQuote, 6))
    
    console.log('📊 Current Liquidity Status:')
    console.log(`- vVOL Reserve: ${vBaseNum.toLocaleString()}`)
    console.log(`- USDC Reserve: ${vQuoteNum.toLocaleString()}`)
    console.log(`- Current Price: $${(vQuoteNum / vBaseNum).toFixed(6)}`)
    
    // Check if we need more liquidity
    const minLiquidity = 10000 // 10K USDC minimum
    const needsLiquidity = vQuoteNum < minLiquidity
    
    if (needsLiquidity) {
      console.log('⚠️  LOW LIQUIDITY DETECTED!')
      console.log('Run seedLiquidity() or seedLiquidityBrowser() to fix this.')
    } else {
      console.log('✅ Liquidity looks good!')
    }
    
    return { vBaseNum, vQuoteNum, needsLiquidity }
    
  } catch (error) {
    console.error('❌ Failed to check liquidity:', error)
    return null
  }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  (window as any).seedLiquidity = seedLiquidityBrowser
  (window as any).checkLiquidity = checkLiquidityStatus
}