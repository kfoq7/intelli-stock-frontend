export default function LoginLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
      {children}
    </div>
  )
}
