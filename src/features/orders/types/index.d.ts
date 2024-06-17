export interface Inventario {
  inventarioId: string
  fechaEntrada: string
  cantidadProducto: number
  proveedorId: string
  proveedor: any | null // Replace `any` with the appropriate type if known
  detalleInventariolista: any | null // Replace `any` with the appropriate type if known
  inventarioProductolista: any | null // Replace `any` with the appropriate type if known
}

export interface Proveedor {
  id: number
  name: string
  location: string
  contact: string
}

export interface InventoryItem {
  id: number
  products: Product[]
  date: string
  description: string
  provider: Provider
}
