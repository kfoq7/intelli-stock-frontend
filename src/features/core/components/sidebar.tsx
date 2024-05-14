import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="bg-[#3E447D] w-[290px] lg:w-[310px] h-screen flex flex-col overflow-x-hidden">
      <div className="grow flex flex-col justify-between">
        <nav className="text-white flex flex-col">
          <Link href="/">Inicio</Link>
          <Link href="/inventory">Inventario</Link>
          <Link href="/chatbot">Chatbot</Link>
        </nav>

        <div className="text-white p-5">
          <button>Cerrar sesion</button>
        </div>
      </div>
    </aside>
  )
}
