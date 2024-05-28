'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import { ChevronDownIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

const productList = [
  {
    name: 'Product 1',
    description: 'Product 1 description about product number 1',
    code: 'GS-TG123',
    amount: 4,
    seller: 'asdf',
    unitPrice: 4.5
  },
  {
    name: 'Product 2',
    description: 'Product 2 description about product number 2',
    code: 'GS-TG123',
    amount: 4,
    seller: 'asdf',
    unitPrice: 4.5
  },
  {
    name: 'Product 3',
    description: 'Product 3 description about product number 3',
    code: 'GS-TG123',
    amount: 4,
    seller: 'asdf',
    unitPrice: 4.5
  }
]

export function ItemCard() {
  return (
    <Disclosure
      as="div"
      className="p-6 w-full bg-gray-100/40 border border-black rounded-md"
    >
      <div className="flex gap-x-6 w-full">
        <DisclosureButton className="flex items-center justify-between gap-x-2 outline-none w-full">
          <div className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
            <div className="flex gap-x-8 text-[#204860]">
              <div className="text-blue-500">ar935</div>
              <div className="">20/04/2024</div>
              <div className="">Cisneros Pacheco Dora Susans</div>
              <div>Amazon</div>
              <div>4</div>
              <div className="">Estado</div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <PencilSquareIcon className="size-5 fill-black/60 hover:fill-yellow-700/50 group-data-[open]:rotate-180" />
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </div>
        </DisclosureButton>
      </div>

      <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
        <ul className="pt-4 flex flex-col gap-y-2">
          {productList.map(({ description, code, name }) => (
            <li key={code} className="flex items-center gap-x-8">
              <div className="text-black font-semibold">{name}</div>
              <div>{description}</div>
            </li>
          ))}
        </ul>
      </DisclosurePanel>
    </Disclosure>
  )
}
