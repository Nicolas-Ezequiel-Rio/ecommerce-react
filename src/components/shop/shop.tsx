import { useContext } from 'react'
import { productContext } from '@/lib/context/products-context'
import { Spinner } from 'flowbite-react'
import NotFound from '@/components/common/search/not-found/NotFound'

export default function Shop() {
  const { products, isLoading, error } = useContext(productContext)
  if (isLoading) return <Spinner />
  if (error) return <NotFound />
  if (!Array.isArray(products) || products.length === 0)
    return <p>No products available</p>

  return (
    <ul>
      {products && products.map((prod) => <li key={prod.id}>{prod.title}</li>)}
    </ul>
  )
}
