'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { OptionSelect, Select } from '@/features/core'
import { Producto, useProductList } from '@/features/products'
import { useSuppliersList } from '@/features/suppliers'
import {
  useInventoryMutation,
  useInventoryDetailMutation
} from '@/features/inventory'
import { useOrders } from '../hook/use-orders'
import { Inventario, Proveedor } from '../types'

interface Props {
  open: boolean
  onClose: () => void
}

export function RegisterOrderModal({ open, onClose }: Props) {
  const { data: products } = useProductList()
  const { data: suppliers } = useSuppliersList()
  const { mutate: mutateInventory } = useInventoryMutation()
  const { mutate: mutateInventoryDetail } = useInventoryDetailMutation()
  const [formData, setFormData] = useState<Inventario>({
    inventarioId: '',
    fechaEntrada: '',
    proveedorId: '',
    cantidadProducto: 0,
    detalleInventariolista: [],
    inventarioProductolista: [],
    proveedor: null
  })
  const [selectedProveedor, setSelectedProveedor] = useState<Proveedor>()
  const [selectedProducts, setSelectedProducts] = useState<Producto[]>([])
  // const [formData] = useState()
  // const { addOrder } = useOrders()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleProviderSelect = (selectedOption: OptionSelect<Proveedor>) => {
    setSelectedProveedor(selectedOption.value)
    setFormData({ ...formData, proveedor: selectedOption.value })
  }

  const handleProductSelect = (selectedOptions: OptionSelect<Producto>[]) => {
    setSelectedProducts(selectedOptions.map(({ value }) => ({ ...value })))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch(
      'http://3.16.196.98:5235/api/Inventario/08dc99ff-279c-42a9-86b9-263ae10244a0',
      {
        method: 'GET'
      }
    )
    const data = await response.json()
    console.log(selectedProveedor?.id)
    const precio = selectedProducts.reduce(
      (total, product) => total + product.precioUnitario,
      0
    )

    const detalleInventarios = selectedProducts.map(({ productoId }) => ({
      productoId,
      descripcion: '',
      inventarioId: data.inventarioId,
      precio,
      stockIngreso: 10,
      stockAnterior: 25
    }))

    for (const detalleInventario of detalleInventarios) {
      mutateInventoryDetail(detalleInventario)
    }

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
                  Fecha:
                </label>
                <input
                  type="date"
                  id="date"
                  name="fechaEntrada"
                  value={formData.fechaEntrada}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cantidad:
                </label>
                <input
                  type="text"
                  id="cantidadProducto"
                  name="cantidadProducto"
                  value={formData.cantidadProducto}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Provider:
                </label>
                <Select
                  options={suppliers?.map(proveedor => {
                    return {
                      value: proveedor,
                      label: proveedor.nombre
                    }
                  })}
                  // value={selectedProveedor}
                  onChange={e => {
                    handleProviderSelect(e as OptionSelect<Proveedor>)
                  }}
                  placeholder="Select a provider"
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Products:
                </label>
                <Select
                  options={products?.map(product => {
                    return {
                      value: product,
                      label: product.nombre
                    }
                  })}
                  isMulti
                  // value={selectedProducts}
                  onChange={e => {
                    handleProductSelect(e as OptionSelect<Producto>[])
                  }}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <div>
                  <h2 className="mt-4 font-semibold">Selected Products:</h2>
                  <ul>
                    {selectedProducts.map(product => (
                      <li key={product.productoId}>{product.nombre}</li>
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
