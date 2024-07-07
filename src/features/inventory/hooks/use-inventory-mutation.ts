import { useMutation } from '@tanstack/react-query'
import { createInventory } from '../service/inventory.service'

export function useInventoryMutation() {
  const { data } = useMutation({
    mutationKey: ['inventory'],
    mutationFn: createInventory
  })

  return { data }
}
