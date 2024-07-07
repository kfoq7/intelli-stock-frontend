'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import { Producto } from '@/features/products'
import { ChevronDownIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

interface Props {
  id: string
  date: string
  provider: string
  cantidadProducto: number
  products: Producto[]
}

export function ItemCard({
  id,
  products,
  date,
  cantidadProducto,
  provider
}: Props) {
  return (
    <Disclosure
      as="div"
      className="p-6 w-full bg-gray-100/40 border-2 border-blue-400/80 rounded-md"
    >
      <div className="flex gap-x-6 w-full">
        <DisclosureButton className="flex items-center justify-between gap-x-2 outline-none w-full">
          <div className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
            <div className="flex gap-x-8 text-[#204860]">
              <div className="text-blue-500">{id.split('-').pop()}</div>
              <div className="">{date.split('T').shift()}</div>
              <div className="">{provider}</div>
              <div>Amazon</div>
              <div>{cantidadProducto}</div>
              <div className="">
                <div className="px-3 py-0.5 bg-[#16963ab6] text-white rounded-md">
                  Entregado
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <PencilSquareIcon className="size-5 fill-black/60 hover:fill-yellow-700/50 group-data-[open]:rotate-180" />
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </div>
        </DisclosureButton>
      </div>

      <div>
        <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
          <ul className="pt-4 flex flex-col gap-y-2">
            {products.map(({ descripcion, productoId, nombre }) => (
              <li key={productoId} className="flex items-center gap-x-8">
                <div className="text-black font-semibold">{nombre}</div>
                <div>{descripcion}</div>
              </li>
            ))}
          </ul>
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}
