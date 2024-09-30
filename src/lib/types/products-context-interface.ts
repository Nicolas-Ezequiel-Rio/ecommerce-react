import { ReactNode } from 'react'

export interface ProductContextType {
  logIn: boolean
  handleLogIn: (value: boolean) => void
}
export interface ProductContextProviderProps {
  children: ReactNode
}
