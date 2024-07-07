import { Producto } from '@/features/products'

export interface Inventario {
  inventarioId: string
  fechaEntrada: string
  cantidadProducto: number
  proveedorId: string
  productos: Producto[]
}

export interface DetalleInventario {
  detalleInventarioId: string
  stockAnterior: number
  stockIngreso: number
  stockTotal: number
  descripcion: string
  precio: number
  productoId: string
  inventarioId: string
  producto: any | null
  inventario: any | null
}
