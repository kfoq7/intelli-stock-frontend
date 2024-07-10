import { useMutation } from '@tanstack/react-query'
import { createInventory } from '../service/inventory.service'
import { Inventario } from '../types'

export function useInventoryMutation() {
  const { data, mutate } = useMutation({
    mutationKey: ['inventory'],
    mutationFn: (data: Inventario) => createInventory(data)
  })

  return { data, mutate }
}
