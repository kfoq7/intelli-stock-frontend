import { Sidebar } from '@/features/core'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Sidebar />

      <main className="p-5 flex flex-col h-screen grow overflow-y-scroll">
        {children}
      </main>
    </>
  )
}
