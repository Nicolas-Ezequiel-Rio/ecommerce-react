import { useState, useEffect } from 'react'
import { Spinner } from 'flowbite-react'
import { getAllProducts } from '@/lib/services/get-all-products'
import { Product } from '@/lib/types/product-interface'
import NotFound from '@/components/common/search/not-found/NotFound'

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setError(null)
      setIsLoading(true)
      const data = await getAllProducts()
      setProducts(data)
    } catch (err) {
      console.error(err)
      err instanceof Error
        ? setError(err.message)
        : setError('An unknown error occurred.')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

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
