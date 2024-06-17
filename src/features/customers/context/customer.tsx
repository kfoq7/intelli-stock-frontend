'use client'

import { createContext, useEffect, useState } from 'react'
import { useCustomersList } from '../hooks/use-customers-list'
import { getRandomTime } from '@/lib/utils'

interface CustomerContext {
  totalCustomers: number
}

export const CustomerContext = createContext<CustomerContext | null>(null)

export function CustomerProvider({ children }: { children: React.ReactNode }) {
  const [totalCustomers, setTotalCustomer] = useState<number>(204)
  const { data } = useCustomersList()

  useEffect(() => {
    setTimeout(() => {
      setTotalCustomer(prev => (prev += 1))
    }, 5000)
  }, [totalCustomers])

  // useEffect(() => {
  //   console.log(data)
  //   if (data) {
  //     setTotalCustomer(data.length)
  //   }
  // }, [data])

  return (
    <CustomerContext.Provider value={{ totalCustomers }}>
      {children}
    </CustomerContext.Provider>
  )
}
