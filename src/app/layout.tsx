import type { Metadata } from 'next'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { inter } from '@/lib/fonts'
import { AppProviders } from '@/features/core'

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
        <AppProviders>
          {/* <div className="grid min-h-screen grid-cols-[280px_1fr]"> */}
          {children}
          {/* </div> */}
        </AppProviders>
      </body>
    </html>
  )
}
