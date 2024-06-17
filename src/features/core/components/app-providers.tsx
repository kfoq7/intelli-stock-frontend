'use client'

import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductProvider } from '@/features/products'
import { CustomerProvider } from '@/features/customers'
import { OrderProvider } from '@/features/orders/context/orders'

interface Props {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export function AppProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomerProvider>
        <OrderProvider>
          <ProductProvider>
            {children}

            <ToastContainer />
          </ProductProvider>
        </OrderProvider>
      </CustomerProvider>
    </QueryClientProvider>
  )
}
