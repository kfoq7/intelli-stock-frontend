import { useContext } from 'react'
import { OrderContext } from '../context/orders'

export function useOrders() {
  const context = useContext(OrderContext)

  if (context == null) {
    throw new Error('useOrders must be used within OrderProvider.')
  }

  return context
}
