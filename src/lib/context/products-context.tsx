import { useState, createContext } from 'react'
import {
  ProductContextType,
  ProductContextProviderProps
} from '@/lib/types/products-context-interface'

export const productContext = createContext<ProductContextType>({
  logIn: false,
  handleLogIn: () => {}
})

export const ProductContextProvider = ({
  children
}: ProductContextProviderProps) => {
  const [logIn, setLogIn] = useState<boolean>(false)

  const handleLogIn = (value: boolean) => {
    setLogIn(value)
  }

  return (
    <productContext.Provider value={{ logIn, handleLogIn }}>
      {children}
    </productContext.Provider>
  )
}
