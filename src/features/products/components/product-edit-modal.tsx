import { Fragment, useRef, useState } from 'react'
import { Dialog, DialogTitle, Transition } from '@headlessui/react'

// Definición de la interfaz del producto
export interface Producto {
  productoId: string
  nombre: string
  descripcion: string
  precioUnitario: number
}

interface EditarProductoProps {
  producto: Producto
  isOpen: boolean
  onClose: () => void
  onSave: (producto: Producto) => void
}

export function ProductEditModal({
  producto,
  isOpen,
  onClose,
  onSave
}: EditarProductoProps) {
  const [editedProducto, setEditedProducto] = useState<Producto>(producto)
  const cancelButtonRef = useRef(null)

  const handleSave = () => {
    onSave(editedProducto)
    onClose()
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEditedProducto(prevProducto => ({
      ...prevProducto,
      [name]: value
    }))
  }

  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <Transition
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Editar Producto
                  </DialogTitle>
                  <div className="mt-2">
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={editedProducto.nombre}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      onChange={handleChange}
                      rows={3}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
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
        </Transition>
      </div>
    </Dialog>
  )
}
