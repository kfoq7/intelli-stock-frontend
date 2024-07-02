import { client } from '@/lib/axios'
import { Inventario } from '../types'

export const getInventories = async (): Promise<Inventario[]> => {
  return client.get('Inventario').then(response => response.data)
}
