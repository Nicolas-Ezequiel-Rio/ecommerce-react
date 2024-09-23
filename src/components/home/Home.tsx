import { useEffect, useState } from 'react'
import { Product } from 'services/product-interface.ts'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    try {
      async function getData(endpoint: string) {
        const res = await fetch(endpoint)
        const data = await res.json()
        setProducts(data.results)
      }
      getData('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
    } catch (error: any) {
      console.error(error.message)
    }
  }, [])

  return (
    <ul>
      {products && products.map((prod) => <li key={prod.id}>{prod.title}</li>)}
    </ul>
  )
}
