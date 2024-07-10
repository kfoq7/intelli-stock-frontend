import { useEffect, useRef, useState } from 'react'
import { Dialog, DialogTitle } from '@headlessui/react'
import { useProductMutation } from '../hooks/use-product-mutation'
import { Producto } from '../types'

// Definición de la interfaz del producto
interface EditarProductoProps {
  producto?: Producto
  isOpen: boolean
  onClose: () => void
}

export function ProductEditModal({
  producto,
  isOpen,
  onClose
}: EditarProductoProps) {
  const { mutate } = useProductMutation()
  const [editedProducto, setEditedProducto] = useState<Producto | undefined>(
    producto
  )
  const cancelButtonRef = useRef(null)

  const handleSave = () => {
    if (editedProducto) {
      mutate(editedProducto)
      onClose()
    }
  }

  useEffect(() => {
    setEditedProducto(producto)
  }, [producto])

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEditedProducto(prevProducto => {
      if (prevProducto)
        return {
          ...prevProducto,
          [name]: value
        }
    })
  }

  return (
    <>
      {editedProducto && (
        <Dialog
          as="div"
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 bg-gray-700/40">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white w-full px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-3xl font-semibold leading-6 text-gray-900 py-2"
                  >
                    Editar Producto
                  </DialogTitle>
                  <div className="mt-2">
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700 w-full"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={editedProducto.nombre}
                      onChange={handleOnChange}
                      className="mt-1 block w-full border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none px-2 py-3"
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="descripcion"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Descripción
                    </label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      value={editedProducto.descripcion}
                      onChange={handleOnChange}
                      rows={3}
                      className="mt-1 block w-full border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 py-3"
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="descripcion"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Stock
                    </label>
                    <input
                      id="stockMinimo"
                      name="stockMinimo"
                      value={editedProducto.stockMinimo}
                      onChange={handleOnChange}
                      className="mt-1 block w-full border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none px-2 py-3"
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="precioUnitario"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Precio Unitario
                    </label>
                    <input
                      type="number"
                      name="precioUnitario"
                      id="precioUnitario"
                      value={editedProducto.precioUnitario}
                      onChange={handleOnChange}
                      className="mt-1 block w-full border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none px-2 py-3"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  ref={cancelButtonRef}
                  onClick={onClose}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  )
}
