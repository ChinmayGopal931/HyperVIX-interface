/**
 * Error handling utilities for contract interactions
 */

export interface ContractError extends Error {
  code?: string
  data?: string
  reason?: string
}

/**
 * Maps contract errors to user-friendly messages
 */
export function getContractErrorMessage(error: ContractError): string {
  // Network errors
  if (error.code === 'NETWORK_ERROR' || error.message?.includes('network changed')) {
    return 'Network error: Please ensure you are connected to Hyperliquid Testnet (Chain ID: 998)'
  }

  // Contract call exceptions
  if (error.code === 'CALL_EXCEPTION') {
    if (error.data === '0x6979bd5a') {
      return 'Insufficient balance or margin. Please check your USDC balance and try a smaller position.'
    }
    return `Contract error: ${error.reason || error.data || 'Transaction would revert'}`
  }

  // Wrong network
  if (error.message?.includes('Wrong network')) {
    return 'Please switch to Hyperliquid Testnet (Chain ID: 998)'
  }

  // User rejection
  if (error.message?.includes('user rejected')) {
    return 'Transaction rejected by user'
  }

  // Insufficient funds
  if (error.message?.includes('insufficient funds')) {
    return 'Insufficient funds for gas or transaction'
  }

  // Gas estimation failed
  if (error.message?.includes('gas')) {
    return 'Transaction would fail due to gas issues. Please check your inputs and try again.'
  }

  // Generic fallback
  return error.message || 'An unexpected error occurred'
}

/**
 * Determines if an error is retryable
 */
export function isRetryableError(error: ContractError): boolean {
  const retryableCodes = ['NETWORK_ERROR', 'TIMEOUT', 'SERVER_ERROR']
  const retryableMessages = ['network changed', 'timeout', 'rate limit', 'temporary']
  
  return (
    retryableCodes.includes(error.code || '') ||
    retryableMessages.some(msg => error.message?.toLowerCase().includes(msg))
  )
}

/**
 * Logs errors with context for debugging
 */
export function logContractError(error: ContractError, context: string): void {
  console.error(`Contract Error [${context}]:`, {
    message: error.message,
    code: error.code,
    data: error.data,
    reason: error.reason,
    stack: error.stack
  })
}