import { useState, useEffect } from 'react'
import { Spinner } from 'flowbite-react'
import { getAllProducts } from '@/lib/services/get-all-products'
import { Product } from '@/lib/types/product-interface'
import NotFound from '@/components/common/not-found/NotFound'
import { CardComponent } from '../common/card/Card'

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
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {products.map((prod) => (
        <li className='' key={prod.id}>
          <CardComponent
            title={prod.title}
            price={prod.price}
            rating={5.0}
            img={prod.thumbnail}
          />
        </li>
      ))}
    </ul>
  )
}
