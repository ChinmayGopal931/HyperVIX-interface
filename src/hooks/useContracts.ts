// In useContracts.ts

import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { ethers } from 'ethers'
import { initializeContracts, NETWORK_CONFIG } from '@/lib/contracts'

export function useContracts() {
  const { address, isConnected } = useAccount()
  const [contracts, setContracts] = useState<ReturnType<typeof initializeContracts> | null>(null)
  const [provider, setProvider] = useState<ethers.Provider | null>(null)
  const [isWrongNetwork, setIsWrongNetwork] = useState(false); // 🆕 State to track network status

  useEffect(() => {
    const init = async () => {
      // Don't do anything until a wallet provider is available
      if (!window.ethereum) {
        // Fallback to read-only if no wallet is installed
        const rpcProvider = new ethers.JsonRpcProvider(NETWORK_CONFIG.rpcUrl);
        setProvider(rpcProvider);
        setContracts(initializeContracts(rpcProvider));
        return;
      }
      
      const browserProvider = new ethers.BrowserProvider(window.ethereum);
      const network = await browserProvider.getNetwork();

      // --- 💡 CORE FIX: Check if the network is correct ---
      if (network.chainId !== BigInt(NETWORK_CONFIG.chainId)) {
        setIsWrongNetwork(true);
        console.warn(`Wrong network detected. Please switch to ${NETWORK_CONFIG.name}.`);
        // You can also add a function here to prompt the user to switch networks
        // setContracts(null) // Clear contracts if network is wrong
        return; 
      }
      
      setIsWrongNetwork(false);
      setProvider(browserProvider);

      let signer: ethers.Signer | undefined = undefined;
      if (isConnected && address) {
        signer = await browserProvider.getSigner();
      }

      const contractInstances = initializeContracts(browserProvider, signer);
      setContracts(contractInstances);
    };

    init();

    // --- 💡 CORE FIX: Listen for network changes ---
    const handleChainChanged = () => {
      // Reloading is the simplest way to ensure everything re-initializes correctly
      window.location.reload();
    };

    if (window.ethereum) {
      window.ethereum.on('chainChanged', handleChainChanged);
    }
    
    // Cleanup listener on component unmount
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };

  }, [isConnected, address]);

  return {
    contracts,
    provider,
    isConnected,
    address,
    isWrongNetwork // 🆕 Expose this for your UI
  };
}