import { Product } from './product-interface'
export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055'
  )

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json()

  return data.results || []
}
