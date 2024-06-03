import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/product.service'

export function useProductList() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return { data }
}
