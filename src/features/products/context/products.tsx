'use client'

import React, { createContext, useState } from 'react'
import { Product } from '../types'
// import { useProductList } from '../hooks/use-product-list'
import { pcComponentList } from '@/features/orders/lib/data'

interface ProductContext {
  products: Product[]
}

interface Props {
  children: React.ReactNode
}

export const ProductContext = createContext<ProductContext | null>(null)

export function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState(pcComponentList)

  // const

  // useEffect(() => {
  //   if (data) {
  //     setProductos(data)
  //   }
  // }, [data])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
