import { useSearchParams } from 'react-router-dom'

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const updateFilters = (filters: { [key: string]: string | number }) => {
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value.toString())
      } else {
        searchParams.delete(key)
      }
    })
    setSearchParams(searchParams)
  }

  const filters = {
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    category: searchParams.get('category') || '',
    subcategory: searchParams.get('subcategory') || '',
    title: searchParams.get('title') || ''
  }

  return { filters, updateFilters }
}
