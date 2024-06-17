'use client'

import { createContext, useState } from 'react'
import type { Inventario, InventoryItem } from '../types'
import { inventoryList } from '../lib/data'

interface OrderContext {
  orders: InventoryItem[]
  addOrder: (order: InventoryItem) => void
}

export const OrderContext = createContext<OrderContext | null>(null)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<InventoryItem[]>(inventoryList)

  const addOrder = (order: InventoryItem) => {
    setOrders(prev => [...prev, order])
  }

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
