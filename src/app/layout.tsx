import type { Metadata } from 'next'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { inter } from '@/lib/fonts'
import { Sidebar, ToastifyProvider } from '@/features/core'

export const metadata: Metadata = {
  title: 'intelli-stock',
  description: 'A project to manage and develop inventory in real time.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          <Sidebar />

          <main className="p-5 flex flex-col min-h-screen grow">
            {children}
          </main>
        </div>

        <ToastifyProvider />
      </body>
    </html>
  )
}
