import React, { createContext } from 'react'

interface ProductContext {}

interface Props {
  children: React.ReactNode
}

export const ProductContext = createContext<ProductContext | null>(null)

export function ProductProvider({ children }: Props) {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  )
}
