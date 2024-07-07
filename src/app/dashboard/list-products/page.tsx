'use client'

import { useState } from 'react'
import { Container } from '@/features/core'
import { useProductList } from '@/features/products'
import { ProductEditModal } from '@/features/products/components/product-edit-modal'

export default function ListProducts() {
  const { data: products, isLoading } = useProductList()
  const [searchQuery, setSearchQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const filteredProducts = products?.filter(product =>
    product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Container>
      <h1 className="text-4xl font-semibold tracking-tighter mb-2">
        Punto de Venta
      </h1>

      <input
        type="text"
        placeholder="Busca por el nombre del producto..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 w-full rounded-md border-2 border-gray-300 p-2"
      />

      <div className="h-[700px] overflow-y-auto p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            filteredProducts?.map(product => (
              <>
                <ProductEditModal
                  key={product.productoId}
                  producto={product}
                  isOpen={isOpen}
                  onClose={() => setIsOpen(!isOpen)}
                  onSave={() => {}}
                />
                <div
                  key={product.productoId}
                  className="rounded-md bg-white p-4 shadow-md"
                >
                  <h3 className="text-lg font-semibold">{product.nombre}</h3>
                  <p className="text-gray-500 text-sm">Categoria: PC</p>
                  <p className="mt-2 text-gray-700">
                    Price: S/. {product.precioUnitario.toFixed(2)}
                  </p>
                  <p className="mt-2 text-gray-700">
                    Stock: {product.stockMinimo}
                  </p>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  >
                    Editar
                  </button>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </Container>
  )
}
