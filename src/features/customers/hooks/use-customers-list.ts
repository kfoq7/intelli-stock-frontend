import { useQuery } from '@tanstack/react-query'
import { getCustomers } from '../services/customer.service'

export function useCustomersList() {
  const { data, isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers
  })

  return { data, isLoading }
}
