import { client } from '@/lib/axios'
import { Inventario } from '../types'

export const getInventories = async (): Promise<Inventario[]> => {
  return client.get('Inventario').then(response => response.data)
}

export const createInventory = async (
  data: Inventario
): Promise<Inventario> => {
  return client.post('/Inventario', data).then(response => response.data)
}
