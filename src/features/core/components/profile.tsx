import Link from 'next/link'
import Image from 'next/image'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { AccountModalContext } from '@/features/auth'
import { useContext } from 'react'

export function Profile() {
  const { onClose } = useContext(AccountModalContext)

  return (
    <Menu as="div" className="text-white px-2 py-3">
      <MenuButton className="text-left py-2 px-3 rounded-md hover:bg-[#18416e] w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Image
              src="/profile-icon-design-free-vector.jpg"
              alt="Image foto"
              width={40}
              height={40}
              className="size-6 object-cover rounded-full"
            />
            <span className="font-semibold">Juan</span>
          </div>
          <ChevronDownIcon className="w-6 h-6 fill-white/60" />
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
                  <button
                    onClick={onClose}
                    className="w-full rounded-md px-3 py-1 text-left tracking-normal hover:bg-[#0570eb]"
                  >
                    Gestion cuentas...
                  </button>
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
