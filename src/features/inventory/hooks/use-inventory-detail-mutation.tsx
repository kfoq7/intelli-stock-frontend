import { useMutation } from '@tanstack/react-query'
import { DetalleInventario } from '../types'
import { createInventoryDetail } from '../service/inventory-detail.service'

export function useInventoryDetailMutation() {
  const { data, mutate } = useMutation({
    mutationKey: ['inventorydetail'],
    mutationFn: (data: Partial<DetalleInventario>) =>
      createInventoryDetail(data)
  })

  return { data, mutate }
}
