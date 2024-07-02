import { client } from '@/lib/axios'
import { Supplier } from '../types'

export const getSuppliers = async (): Promise<Supplier[]> => {
  return client.get('/Proveedor').then(response => response.data)
}
