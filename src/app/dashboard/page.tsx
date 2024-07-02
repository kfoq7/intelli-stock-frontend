'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BarChart } from '@mui/x-charts'
import { toast } from 'react-toastify'
import { ChartBarIcon, WalletIcon } from '@heroicons/react/20/solid'
import { Container } from '@/features/core'
import { RegisterOrderModal } from '@/features/orders'
import { ProductCard, useProducts } from '@/features/products'
import { useCutomsers } from '@/features/customers'
import {
  inventoryList,
  pcComponentList,
  proveedores
} from '@/features/orders/lib/data'
import { useSuppliersList } from '@/features/suppliers'
import { useOrders } from '@/features/orders/hook/use-orders'
import { getRandomNumber } from '@/lib/utils'
import { useSession } from 'next-auth/react'

export default function Home() {
  const [producto, setProduct] = useState({
    id: 1,
    name: 'Product1',
    amount: 10
  })
  const [isOpen, setIsOpen] = useState(false)
  const [numberOfProducts, setNumberOfProducts] = useState(26)
  const { totalCustomers } = useCutomsers()
  const { orders } = useOrders()
  // const { productos } = useProducts()
  const { data: session } = useSession()
  console.log(session)
  const { data } = useSuppliersList()

  useEffect(() => {
    setTimeout(() => {
      setProduct(prev => ({ ...prev, amount: 4 }))
    }, 10000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setNumberOfProducts(
        prev => (prev += getRandomNumber({ min: 10, max: 20 }))
      )
    }, 2000)
  }, [, numberOfProducts])

  // useEffect(() => {
  //   if (producto.amount <= 4) {
  //     toast.warn(`Cantidad ${producto.name} baja.`)
  //   }
  // }, [producto])

  return (
    <>
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
                    {totalCustomers}
                  </span>
                </div>
              </div>
              <div className="bg-transparent p-4 rounded-md w-full flex items-center gap-4">
                <ChartBarIcon className="size-6" />
                <div>
                  <h3 className="text-gray-400 font-semibold">
                    Ventas Totales
                  </h3>

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
                {proveedores.slice(0, 3).map(({ id, name }) => (
                  <div
                    key={id}
                    className="rounded-full text-center size-28 flex items-center justify-center bg-blue-400/55"
                  >
                    {name}
                  </div>
                ))}

                <Link
                  href="/dashboard/suppliers"
                  className="bg-[#18416e] text-white p-2 rounded-md"
                >
                  Ver todos
                </Link>
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
                  data: ['29', '30', '31', '0', '1', '2', '3']
                }
              ]}
              series={[
                { data: [323, 500, 1000, 400, 2100, 240, numberOfProducts] }
              ]}
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
                {orders.slice(0, 5).map(proveedor => (
                  <div
                    key={proveedor.id}
                    className="max-w-sm rounded overflow-hidden shadow-lg m-4"
                  >
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {proveedor.provider.name}
                      </div>
                      <p className="text-gray-700 text-base">
                        <strong>Fecha:</strong> {proveedor.date}
                      </p>
                      <p className="text-gray-700 text-base">
                        <strong>Contacto:</strong> {proveedor.provider.contact}
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            </div>

            <div></div>
          </div>
        </Container>
      </div>
    </>
  )
}
