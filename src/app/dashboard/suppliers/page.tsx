import { proveedores } from '@/features/orders/lib/data'

export default function Suppliers() {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Lista de Proveedores</h2>
      <ul>
        {proveedores.map(proveedor => (
          <li
            key={proveedor.id}
            className="mb-4 p-4 bg-white rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{proveedor.name}</h3>
            <p className="text-gray-600">
              <strong>Location:</strong> {proveedor.location}
            </p>
            <p className="text-gray-600">
              <strong>Contact:</strong> {proveedor.contact}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
