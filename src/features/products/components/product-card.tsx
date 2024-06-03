import type { Product } from '../types'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { name, amount, description } = product

  return (
    <div className="p-2 flex items-center justify-between">
      <div className="">
        <h2 className="text-lg font-semibold">{name}</h2>

        <p className="text-sm">{description}</p>
      </div>

      {amount}
    </div>
  )
}
