'use client'

import { Container } from '@/features/core'
import { ItemCard, OrderList } from '@/features/orders'
import { useOrders } from '@/features/orders/hook/use-orders'
import { inventoryList } from '@/features/orders/lib/data'

export default function Inventory() {
  const { orders } = useOrders()

  return (
    <Container>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Ordenes</h1>

        <div className="flex items-center gap-x-2">
          <button className="border border-gray-300/80 px-2 py-2.5 rounded-md hover:bg-slate-200/55">
            Exportar excel
          </button>
          <button className="bg-[#214a75] text-white px-2 py-2.5 rounded-md hover:bg-[#18416e]">
            Realizar orden
          </button>
        </div>
      </div>

      <div className="my-5">
        <input
          type="search"
          placeholder="Buscar por ID inventario"
          className="outline-none p-2 rounded-md border w-80"
        />

        <div className="h-full">
          <OrderList>
            {orders.map(({ id, provider, date, products }) => (
              <ItemCard
                key={id}
                id={id}
                asdfdate={date}
                provider={provider.name}
                products={products}
              />
            ))}
          </OrderList>
        </div>
      </div>
    </Container>
  )
}
