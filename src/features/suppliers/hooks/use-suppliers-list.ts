import { useQuery } from '@tanstack/react-query'
import { getSuppliers } from '../sevices/supplier.service'

export function useSuppliersList() {
  const { data } = useQuery({
    queryKey: ['supplier'],
    queryFn: getSuppliers
  })

  return { data }
}
