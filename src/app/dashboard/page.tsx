'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BarChart } from '@mui/x-charts'
import { toast } from 'react-toastify'
import { ChartBarIcon, WalletIcon } from '@heroicons/react/20/solid'
import { Container } from '@/features/core'
import { RegisterOrderModal } from '@/features/orders'
import { inventoryList, pcComponentList } from '@/features/orders/lib/data'
import { ProductCard } from '@/features/products'

export default function Home() {
  const [producto, setProduct] = useState({
    id: 1,
    name: 'Product1',
    amount: 10
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setProduct(prev => ({ ...prev, amount: 4 }))
    }, 10000)
  }, [])

  useEffect(() => {
    if (producto.amount <= 4) {
      toast.warn(`Cantidad ${producto.name} baja.`)
    }
  }, [producto])

  return (
    <>
      {/* <div className="p-4">
        <div className="space-x-2">
          <button
            onClick={() => toast('Wow so easy!')}
            className="bg-[#214a75] text-white px-2 py-2.5 rounded-md hover:bg-[#18416e]"
          >
            Click here
          </button>

          <button
            className="bg-[#214a75] text-white px-2 py-2.5 rounded-md hover:bg-[#18416e]"
            onClick={() => setIsOpen(true)}
          >
            Nuevo pedido
          </button>

          <RegisterOrderModal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div> */}

      <RegisterOrderModal open={isOpen} onClose={() => setIsOpen(false)} />

      <div className="grid grid-cols-[1fr_380px] h-full gap-4">
        <Container>
          <h3 className="text-4xl font-semibold tracking-tighter">Resumen</h3>

          <div className="p-3">
            <div className="flex items-center justify-center gap-x-2 bg-gray-200 p-1 rounded-md h-40">
              <div className="bg-white h-full p-4 rounded-md w-full shadow-md flex items-center gap-4">
                <WalletIcon className="size-6" />
                <div>
                  <h3 className="text-gray-400 font-semibold">Clientes</h3>

                  <span className="text-6xl font-semibold tracking-tighter">
                    1234
                  </span>
                </div>
              </div>
              <div className="bg-transparent p-4 rounded-md w-full flex items-center gap-4">
                <ChartBarIcon className="size-6" />
                <div>
                  <h3 className="text-gray-400 font-semibold">Customers</h3>

                  <span className="text-6xl font-semibold tracking-tighter">
                    1234
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg">
                Ve la lista de{' '}
                <span className="font-semibold">proveedores</span>
              </h3>

              <button
                className="bg-[#214a75] w-40 text-white px-2 py-2.5 rounded-md hover:bg-[#18416e]"
                onClick={() => setIsOpen(true)}
              >
                Nuevo pedido
              </button>
            </div>

            <section className="mx-auto max-w-7xl">
              <div className="h-40 flex items-center justify-center gap-4">
                <div>Proveedor 1</div>
                <div>Proveedor 2</div>
                <div>Proveedor 3</div>
                <div>Proveedor 4</div>
                <div>Ver todos</div>
              </div>
            </section>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col h-full divide-y-2 divide-gray-100">
            <div className="mb-3">
              <h1 className="text-2xl text-gray-600 font-semibold">
                Productos populares
              </h1>

              <div className="mt-4 flex items-center justify-between px-2">
                <span className="text-sm text-gray-400 font-semibold">
                  Productos
                </span>
                <span className="text-sm text-gray-400 font-semibold">
                  Stock
                </span>
              </div>
            </div>

            <section className="space-y-2 h-full overflow-y-scroll">
              {pcComponentList.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </section>

            <div className="flex items-center justify-between pt-2">
              <Link
                href="/inventory"
                className="px-4 py-3 rounded-md border-2 border-gray-300/80 block"
              >
                Ver todos los inventarios
              </Link>
            </div>
          </div>
        </Container>

        <Container>
          <h3 className="text-2xl font-semibold tracking-tighter">
            Vista de los productos
          </h3>

          <div className="h-full">
            <BarChart
              xAxis={[
                {
                  scaleType: 'band',
                  data: ['22', '23', '24', '25', '26', '27', '30']
                }
              ]}
              series={[{ data: [323, 500, 1000, 400, 2100] }]}
              colors={['#AFF082', '#F0AC82']}
            />
          </div>
        </Container>

        <Container>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl text-gray-600 font-semibold">
              Lista de los ultimos productos
            </h1>

            <div className="space-y-2">
              <div>Provedores</div>
              <section className="space-y-2 h-full">
                {pcComponentList.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </section>
            </div>

            <div></div>
          </div>
        </Container>
      </div>

      {/* <div className="p-4">
        <div className="space-x-2">
          <button
            onClick={() => toast('Wow so easy!')}
            className="bg-[#214a75] text-white px-2 py-2.5 rounded-md hover:bg-[#18416e]"
          >
            Click here
          </button>

          <button
            className="bg-[#214a75] text-white px-2 py-2.5 rounded-md hover:bg-[#18416e]"
            onClick={() => setIsOpen(true)}
          >
            Nuevo pedido
          </button>

          <RegisterOrderModal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div> */}
    </>
  )
}
