export interface Product {
  id: number
  name: string
  description: string
  code: string
  amount: number
  seller: string
  unitPrice: number
}

export interface Producto {
  productoId: string
  nombre: string
  descripcion: string
  precioUnitario: number
  fechaActualizacion: string | null
  fechaCreacion: string
  categoriaId: string
  stockMinimo: number
  detallePedidolista: any | null // Replace 'any' with the appropriate type if available
  precioWebProductolista: any | null // Replace 'any' with the appropriate type if available
  detalleInventariolista: any | null // Replace 'any' with the appropriate type if available
}
