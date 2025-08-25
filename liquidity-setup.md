# vAMM Liquidity Setup Guide

## Problem
The current vAMM has very low liquidity, causing massive price impact (99+ billion %) for even tiny positions. We need to add initial liquidity to both sides.

## Solution: Add Initial Liquidity During Deployment

### 1. Contract Deployment Script

```solidity
// In your deployment script or constructor
contract VolatilityPerpetual {
    
    function initializeLiquidity(
        uint256 initialVBaseReserve,  // vVOL tokens
        uint256 initialVQuoteReserve  // USDC tokens
    ) external onlyOwner {
        // Set initial vAMM reserves
        vBaseAssetReserve = initialVBaseReserve;
        vQuoteAssetReserve = initialVQuoteReserve;
        
        // Mint initial vVOL tokens to the contract
        _mint(address(this), initialVBaseReserve);
        
        // Transfer USDC from deployer to contract
        IERC20(usdcToken).transferFrom(msg.sender, address(this), initialVQuoteReserve);
        
        emit LiquidityInitialized(initialVBaseReserve, initialVQuoteReserve);
    }
}
```

### 2. Deployment Script Example

```javascript
// deploy-with-liquidity.js
async function deployWithLiquidity() {
    const [deployer] = await ethers.getSigners();
    
    // Deploy contracts
    const Oracle = await ethers.getContractFactory("VolatilityIndexOracle");
    const oracle = await Oracle.deploy();
    
    const MockUSDC = await ethers.getContractFactory("MockUSDC");
    const usdc = await MockUSDC.deploy();
    
    const Perpetual = await ethers.getContractFactory("VolatilityPerpetual");
    const perpetual = await Perpetual.deploy(oracle.address, usdc.address);
    
    // ✅ ADD INITIAL LIQUIDITY
    const initialVVOL = ethers.parseUnits("1000000", 18);    // 1M vVOL tokens
    const initialUSDC = ethers.parseUnits("200000", 6);      // 200K USDC
    
    // This creates an initial price of 200K / 1M = $0.20 per vVOL
    
    // Mint USDC to deployer and approve
    await usdc.faucet(deployer.address, initialUSDC);
    await usdc.approve(perpetual.address, initialUSDC);
    
    // Initialize liquidity
    await perpetual.initializeLiquidity(initialVVOL, initialUSDC);
    
    console.log("✅ Liquidity initialized:");
    console.log(`- vVOL Reserve: ${ethers.formatUnits(initialVVOL, 18)}`);
    console.log(`- USDC Reserve: ${ethers.formatUnits(initialUSDC, 6)}`);
    console.log(`- Initial Price: $${(200000 / 1000000).toFixed(4)} per vVOL`);
}
```

### 3. Alternative: Frontend Liquidity Seeding

If you can't modify the contracts, you can seed liquidity through the frontend:

```typescript
// liquidity-seeder.ts
export async function seedInitialLiquidity(contracts: any, signer: any) {
    try {
        console.log("🌱 Seeding initial liquidity...");
        
        const seedAmount = parseUnits("100000", 6); // 100K USDC
        const vvolAmount = parseUnits("500000", 18); // 500K vVOL
        
        // Method 1: If contract has addLiquidity function
        if (contracts.perpetual.addLiquidity) {
            await contracts.usdcWrite.approve(contracts.perpetual.target, seedAmount);
            await contracts.perpetual.addLiquidity(vvolAmount, seedAmount);
        }
        
        // Method 2: Simulate liquidity by opening and closing large positions
        else {
            // Open large long position
            await contracts.usdcWrite.approve(contracts.perpetual.target, seedAmount);
            await contracts.perpetual.openPosition(vvolAmount, seedAmount);
            
            // Open large short position to balance
            await contracts.perpetual.openPosition(-vvolAmount, seedAmount);
        }
        
        console.log("✅ Initial liquidity seeded");
        
    } catch (error) {
        console.error("❌ Failed to seed liquidity:", error);
    }
}
```

### 4. Recommended Initial Liquidity Parameters

```javascript
const LIQUIDITY_CONFIG = {
    // For testing (smaller amounts)
    test: {
        vvolReserve: parseUnits("100000", 18),   // 100K vVOL
        usdcReserve: parseUnits("20000", 6),     // 20K USDC
        initialPrice: 0.20                       // $0.20 per vVOL
    },
    
    // For production (larger amounts)
    production: {
        vvolReserve: parseUnits("10000000", 18), // 10M vVOL  
        usdcReserve: parseUnits("2000000", 6),   // 2M USDC
        initialPrice: 0.20                       // $0.20 per vVOL
    }
};
```

### 5. Frontend Component for Manual Liquidity Addition

```typescript
// LiquidityManager.tsx
export function LiquidityManager() {
    const { contracts } = useContracts();
    const [vvolAmount, setVvolAmount] = useState("100000");
    const [usdcAmount, setUsdcAmount] = useState("20000");
    
    const addLiquidity = async () => {
        if (!contracts) return;
        
        try {
            const vvolWei = parseUnits(vvolAmount, 18);
            const usdcWei = parseUnits(usdcAmount, 6);
            
            // Approve USDC
            await contracts.usdcWrite.approve(contracts.perpetual.target, usdcWei);
            
            // Add liquidity (if function exists)
            await contracts.perpetual.addLiquidity(vvolWei, usdcWei);
            
            console.log("✅ Liquidity added successfully");
            
        } catch (error) {
            console.error("❌ Failed to add liquidity:", error);
        }
    };
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>🏦 Add Liquidity to vAMM</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <Input 
                        placeholder="vVOL Amount" 
                        value={vvolAmount}
                        onChange={(e) => setVvolAmount(e.target.value)}
                    />
                    <Input 
                        placeholder="USDC Amount" 
                        value={usdcAmount}
                        onChange={(e) => setUsdcAmount(e.target.value)}
                    />
                    <Button onClick={addLiquidity} className="w-full">
                        Add Liquidity
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
```

### 6. Quick Fix Script for Current Deployment

```typescript
// quick-liquidity-fix.ts
export async function quickLiquidityFix() {
    const provider = new ethers.JsonRpcProvider("https://rpc.hyperliquid-testnet.xyz/evm");
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
    
    const perpetual = new ethers.Contract(
        "0x06529Ce96879BE717839fcA5bDead38e62c15B92", 
        PERPETUAL_ABI, 
        wallet
    );
    
    const usdc = new ethers.Contract(
        "0x8A902cEB0F1b9FF0703Fb6f16F807220560d32A9",
        ERC20_ABI,
        wallet
    );
    
    // Get lots of USDC from faucet
    await usdc.faucet(wallet.address, parseUnits("1000000", 6)); // 1M USDC
    
    // Open large positions to seed liquidity
    const largeMargin = parseUnits("500000", 6); // 500K USDC margin
    const largeSize = parseUnits("1000000", 18); // 1M vVOL
    
    // Approve spending
    await usdc.approve(perpetual.address, largeMargin * 2n);
    
    // Open balanced positions
    await perpetual.openPosition(largeSize, largeMargin);   // Long
    await perpetual.openPosition(-largeSize, largeMargin);  // Short
    
    console.log("✅ Emergency liquidity seeded!");
}
```

## Benefits of Adding Liquidity

1. **Reduced Price Impact**: Trades won't cause 99+ billion % price impact
2. **Better UX**: Users can open reasonable positions without errors
3. **Realistic Pricing**: vVOL price will be stable around the intended range
4. **Functional Testing**: Frontend can be properly tested with real trades

## Implementation Priority

**Immediate (for testing):**
- Use the quick fix script to seed current deployment
- Add 100K USDC + 500K vVOL liquidity

**Next deployment:**
- Add `initializeLiquidity()` function to contract
- Deploy with proper initial reserves
- Set reasonable initial price ($0.20 per vVOL)

This will solve the massive price impact issue and make the trading interface actually usable!