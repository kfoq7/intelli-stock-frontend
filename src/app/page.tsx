'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { Container } from '@/features/core'
import { RegisterOrderModal } from '@/features/orders'
import { inventoryList } from '@/features/orders/lib/data'

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
    <Container>
      <div className="grid grid-cols-[380px_1fr] h-full gap-4">
        <div className="bg-gray-400/20 p-3">
          <div className="flex flex-col justify-between h-full">
            <div>
              {inventoryList.map(({ id, description }) => (
                <div key={id}></div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              {/* <Link
                href="/inventory"
                className="px-4 py-3 rounded-md border-2 border-gray-300/80 block"
              >
                Ver todos los inventarios
              </Link> */}
              <Link
                href="/inventory"
                className="px-4 py-3 rounded-md border-2 border-gray-300/80 block"
              >
                Ver todos los inventarios
              </Link>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-md border-2 border-b-gray-600/20">
          <h1 className="text-2xl text-gray-600 font-semibold">
            Lista de los ultimos productos
          </h1>
          <section className="">
            <h2 className="text-lg">{producto.name}</h2>

            <span>Cantidad: {producto.amount}</span>
          </section>
        </div>
      </div>

      <div className="h-[200px]">
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
      </div>
    </Container>
  )
}
