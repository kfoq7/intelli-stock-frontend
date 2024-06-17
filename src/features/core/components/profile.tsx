import Link from 'next/link'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export function Profile() {
  return (
    <Menu as="div" className="text-white p-2">
      <MenuButton className="text-left py-2 px-3 rounded-md hover:bg-[#18416e] w-full">
        <div className="flex items-center justify-between">
          Profile
          <ChevronDownIcon className="size-6 fill-white/60" />
        </div>
      </MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="relative">
          <MenuItems className="absolute bg-[#333333] w-[80%] top-1 rounded-md border border-black/10 shadow-md py-2.5 px-2">
            <div className="flex flex-col divide-y-2 divide-gray-100/20">
              <div className="py-2">
                <MenuItem>
                  <Link
                    href="/admin"
                    className="block py-1 px-3 rounded-md hover:bg-[#0570eb] tracking-normal"
                  >
                    Gestion cuentas...
                  </Link>
                </MenuItem>
              </div>
              <div className="py-2">
                <MenuItem>
                  <Link
                    href="/login"
                    className="block py-1 px-3 rounded-md hover:bg-[#0570eb] tracking-normal"
                  >
                    Cerrar sesion
                  </Link>
                </MenuItem>
              </div>
            </div>
          </MenuItems>
        </div>
      </Transition>
    </Menu>
  )
}
