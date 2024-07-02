import { Producto } from '@/features/products'

export interface Inventario {
  inventarioId: string
  fechaEntrada: string
  cantidadProducto: number
  proveedorId: string
  productos: Producto[]
}
