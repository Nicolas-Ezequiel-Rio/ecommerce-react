import { Product } from './product-interface'
import { ReactNode } from 'react'

export interface ProductContextType {
  products: Product[]
  isLoading: boolean
  error: string | null
}
export interface ProductContextProviderProps {
  children: ReactNode
}
