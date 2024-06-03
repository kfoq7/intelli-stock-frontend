import { client } from '@/lib/axios'
import { Producto } from '../types'

export const getProducts = async (): Promise<Producto[]> => {
  return client.get('/Producto')
}
