import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

export function Container({ className, children }: Props) {
  return (
    <div
      className={cn(
        'p-4 flex flex-col w-full h-full bg-white rounded-md shadow-sm',
        className
      )}
    >
      {children}
    </div>
  )
}
