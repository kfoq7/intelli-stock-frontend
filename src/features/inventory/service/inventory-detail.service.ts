import { client } from '@/lib/axios'
import { DetalleInventario } from '../types'

export const createInventoryDetail = async (
  data: Partial<DetalleInventario>
): Promise<DetalleInventario> => {
  return client.post('/DetalleInventario', data).then(response => response.data)
}
