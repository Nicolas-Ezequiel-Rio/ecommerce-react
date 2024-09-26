import { useState, useEffect, createContext, ReactNode } from 'react'
import { Product } from '@/services/product-interface'
import { getAllProducts } from '@/services/fetching-service'

interface ProductContextType {
  products: Product[]
  isLoading: boolean
  error: string | null
}
export const productContext = createContext<ProductContextType>({
  products: [],
  isLoading: true,
  error: null
})
interface ProductContextProviderProps {
  children: ReactNode
}
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
