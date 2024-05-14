export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 flex flex-col size-full bg-white rounded-md shadow-sm">
      {children}
    </div>
  )
}
