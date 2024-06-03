'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function Login() {
  const [auth, setAuth] = useState({ username: '', password: '' })

  const router = useRouter()

  const handlOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setAuth(prev => ({ ...prev, [name]: value }))
  }

  const handleOnLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (auth.username !== 'admin' || auth.password !== 'admin') {
      toast.error('Usuario o contraseña incorrectos')
      return
    }

    if (Object.values(auth).every(value => value === 'admin')) {
      router.push('/dashboard')
    }
  }

  return (
    <div className="bg-white drop-shadow-md p-6 rounded-md w-[420px]">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <div className="text-7xl tracking-tighter">Intelli Stock</div>

        <form className="w-full space-y-5" onSubmit={handleOnLogin}>
          <div className="flex flex-col gap-2">
            <label>Usuario</label>
            <input
              name="username"
              type="text"
              onChange={handlOnChange}
              className="outline-none p-2 border-2 border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Constraseña</label>
            <input
              name="password"
              type="password"
              onChange={handlOnChange}
              className="outline-none p-2 border-2 border-gray-400 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500/80 w-full font-semibold text-white text-xl py-2 px-4 rounded-md hover:bg-blue-300"
          >
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  )
}
