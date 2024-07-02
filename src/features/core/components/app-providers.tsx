'use client'

import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProductProvider } from '@/features/products'
import { CustomerProvider } from '@/features/customers'
import { OrderProvider } from '@/features/orders/context/orders'
import { AccountModal, AccountModalProvider } from '@/features/auth/components'

interface Props {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export function AppProviders({ children }: Props) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <CustomerProvider>
          <OrderProvider>
            <ProductProvider>
              <AccountModalProvider>
                {children}

                <AccountModal />
                <ToastContainer />
              </AccountModalProvider>
            </ProductProvider>
          </OrderProvider>
        </CustomerProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
