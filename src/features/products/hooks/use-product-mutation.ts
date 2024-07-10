import { useMutation } from '@tanstack/react-query'
import { udpateProduct } from '../services/product.service'
import { Producto } from '../types'

export function useProductMutation() {
  const { data, mutate } = useMutation({
    mutationKey: ['product'],
    mutationFn: (product: Producto) =>
      udpateProduct(product.productoId, product)
  })

  return { data, mutate }
}
