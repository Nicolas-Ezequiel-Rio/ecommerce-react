import { useContext } from 'react'
import { productContext } from '@/context/products-context'

export default function Shop() {
  const { products, isLoading, error } = useContext(productContext)
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!Array.isArray(products)) return <p>No products available</p>

  return (
    <ul>
      {products && products.map((prod) => <li key={prod.id}>{prod.title}</li>)}
    </ul>
  )
}
