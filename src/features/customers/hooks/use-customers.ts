'use client'

import { useContext } from 'react'
import { CustomerContext } from '../context/customer'

export function useCutomsers() {
  const context = useContext(CustomerContext)

  if (context == null) {
    throw new Error('useCustomers must be used within CustomerProvider.')
  }

  return context
}
