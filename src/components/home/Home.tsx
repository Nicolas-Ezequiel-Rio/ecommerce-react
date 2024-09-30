import { useState, useEffect } from 'react'
import { Spinner } from 'flowbite-react'
import { getAllProducts } from '@/lib/services/get-all-products'
import { Product } from '@/lib/types/product-interface'
import NotFound from '@/components/common/not-found/NotFound'
import { CarouselComponent } from '../common/carousel/Carousel'

export default function Home() {
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

  const images = products.map((prod) => prod.thumbnail)

  return (
    <section>
      <h1 className='text-2xl text-black font-bold text-center my-4'>
        Celulares
      </h1>
      <div className='bg-gray-400 rounded-md'>
        <CarouselComponent images={images} visibleItems={images.length} />
      </div>
    </section>
  )
}
