import { useQuery } from '@tanstack/react-query'
import { getInventories } from '../service/inventory.service'

export function useInventoryList() {
  const { data, isLoading } = useQuery({
    queryKey: ['inventory'],
    queryFn: getInventories
  })

  return { data, isLoading }
}
