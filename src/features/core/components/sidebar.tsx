'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { Profile } from './profile'

const links = [
  {
    page: 'Home',
    to: '/dashboard'
  },
  {
    page: 'Inventory',
    to: '/dashboard/inventory'
  },
  {
    page: 'Chatbot',
    to: '/dashboard/chatbot'
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="bg-gradient-to-t from-[#203040] from-70% to-[#283a4d] w-[290px] lg:w-[310px] h-screen flex flex-col overflow-x-hidden">
      <Logo />

      <Profile />
      {/* 
      <div className="grow flex flex-col p-2"> */}
      <nav className="text-white flex flex-col gap-y-1 grow p-2">
        {links.map(({ page, to }) => (
          <Link
            key={page}
            href={to}
            className={cn('py-2 px-3 rounded-md hover:bg-[#18416e]', {
              'bg-[#214a75] hover:bg-[#214a75]': pathname === to
            })}
          >
            {page}
          </Link>
        ))}
      </nav>
      {/* </div> */}
    </aside>
  )
}
