import { proveedores } from '@/features/orders/lib/data'
import { useSuppliersList } from '@/features/suppliers'

export default function Suppliers() {
  const { data } = useSuppliersList()

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Lista de Proveedores</h2>
      <ul>
        {data?.map(({ proveedorId, nombre, direccion, contacto }) => (
          <li
            key={proveedorId}
            className="mb-4 p-4 bg-white rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
            <p className="text-gray-600">
              <strong>Location:</strong> {direccion}
            </p>
            <p className="text-gray-600">
              <strong>Contact:</strong> {contacto}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
