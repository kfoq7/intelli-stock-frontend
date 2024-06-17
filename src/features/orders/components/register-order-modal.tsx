'use client'

import { useState } from 'react'
import Select from 'react-select'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Product, useProducts } from '@/features/products'
import { proveedores } from '../lib/data'
import { InventoryItem } from '../types'
import { useOrders } from '../hook/use-orders'

interface Props {
  open: boolean
  onClose: () => void
}

export function RegisterOrderModal({ open, onClose }: Props) {
  const { products } = useProducts()
  const [formData, setFormData] = useState<InventoryItem>({
    id: 0,
    products: [],
    date: '',
    description: '',
    provider: {
      id: 0,
      name: '',
      location: '',
      contact: ''
    }
  })
  const [selectedProveedor, setSelectedProveedor] = useState([])
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const { addOrder } = useOrders()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleProviderSelect = (selectedOption: any) => {
    setSelectedProveedor(selectedOption)
    setFormData({ ...formData, provider: selectedOption.value })
  }

  const handleProductSelect = (selectedOptions: any) => {
    console.log({ selectedOptions })
    setSelectedProducts(selectedOptions)
    setFormData({
      ...formData,
      products: selectedOptions.map(({ value }) => ({ ...value }))
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addOrder(formData)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed inset-0 flex w-screen items-center justify-center overflow-y-hidden bg-gray-600/20 p-4">
        <DialogPanel className="w-full max-w-7xl rounded-lg bg-white p-6 backdrop-blur-2xl">
          <DialogTitle className="text-2xl font-semibold tracking-tighter">
            Registra un nuevo pedido
          </DialogTitle>

          <div className="mt-4">
            <form
              onSubmit={handleSubmit}
              className="p-6 bg-white shadow-md rounded-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Provider:
                </label>
                <Select
                  options={proveedores.map(proveedor => {
                    return {
                      value: proveedor,
                      label: proveedor.name
                    }
                  })}
                  value={selectedProveedor}
                  onChange={handleProviderSelect}
                  placeholder="Select a provider"
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Products:
                </label>
                <Select
                  options={products.map(product => {
                    return {
                      id: product.id,
                      value: product,
                      label: product.name
                    }
                  })}
                  isMulti
                  value={selectedProducts}
                  onChange={handleProductSelect}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <div>
                  <h2 className="mt-4 font-semibold">Selected Products:</h2>
                  <ul>
                    {formData.products.map(product => (
                      <li key={product.id}>{product.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
