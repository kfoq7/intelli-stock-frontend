'use client'

import { Container } from '@/features/core'
import { useInventoryList } from '@/features/inventory'
import { ItemCard, OrderList } from '@/features/orders'
import { useOrders } from '@/features/orders/hook/use-orders'
import { inventoryList } from '@/features/orders/lib/data'

export default function Inventory() {
  const { data, isLoading } = useInventoryList()

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
        <div className="flex gap-x-8 text-lg font-bold text-[#204860] mb-4 border-b py-2">
          <div className="text-blue-500">ID</div>
          <div>Fecha</div>
          <div>Proveedor</div>
          <div>Vendedor</div>
          <div>Cantidad</div>
          <div>Estado</div>
        </div>

        <div className="h-[600px] overflow-y-auto">
          <OrderList>
            {isLoading ? (
              <></>
            ) : (
              data?.map(
                ({
                  inventarioId,
                  cantidadProducto,
                  proveedorId,
                  fechaEntrada,
                  productos
                }) => (
                  <ItemCard
                    key={inventarioId}
                    id={inventarioId}
                    date={fechaEntrada}
                    provider={proveedorId}
                    products={productos}
                    cantidadProducto={cantidadProducto}
                  />
                )
              )
            )}
          </OrderList>
        </div>
      </div>
    </Container>
  )
}
