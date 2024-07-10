import { client } from '@/lib/axios'
import { Producto } from '../types'

export const getProducts = async (): Promise<Producto[]> => {
  return client.get('/Producto').then(result => result.data)
}

export const udpateProduct = async (
  productId: string,
  data: Producto
): Promise<Producto> => {
  return client.put(`/Producto/${productId}`, data)
}
