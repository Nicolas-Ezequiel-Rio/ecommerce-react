import { useState, useEffect, createContext } from 'react'
import { getAllProducts } from '@/services/fetching-service'
import { Product } from '@/services/product-interface'
import {
  ProductContextType,
  ProductContextProviderProps
} from '@/services/products-context-interface'

export const productContext = createContext<ProductContextType>({
  products: [],
  isLoading: true,
  error: null
})

export const ProductContextProvider = ({
  children
}: ProductContextProviderProps) => {
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

  return (
    <productContext.Provider value={{ products, isLoading, error }}>
      {children}
    </productContext.Provider>
  )
}
