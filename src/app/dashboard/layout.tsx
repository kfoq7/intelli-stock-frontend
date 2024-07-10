import { Sidebar } from '@/features/core'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid min-h-screen grid-cols-[280px_1fr]">
      <Sidebar />

      <main className="flex w-full justify-center gap-x-4 px-6 py-3">
        {children}
      </main>
    </div>
  )
}
