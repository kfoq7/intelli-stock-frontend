import { Container } from '@/features/core'
import { ItemCard, OrderList } from '@/features/orders'

export default function Home() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Ordenes</h1>

        <div className="flex items-center gap-4">
          <button>Exportar excel</button>
          <button>Realizar orden</button>
        </div>
      </div>

      <div className="my-5">
        <input
          type="search"
          placeholder="Buscar por producto"
          className="outline-none p-2 rounded-md border w-80"
        />

        <div className="h-full">
          <OrderList>
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </OrderList>
        </div>
      </div>
    </Container>
  )
}
