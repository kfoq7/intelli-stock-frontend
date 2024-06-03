'use client'

import { ToastContainer } from 'react-toastify'
import { ProductProvider } from '@/features/products'

interface Props {
  children: React.ReactNode
}

export function AppProviders({ children }: Props) {
  return (
    <ProductProvider>
      {children}

      <ToastContainer />
    </ProductProvider>
  )
}
