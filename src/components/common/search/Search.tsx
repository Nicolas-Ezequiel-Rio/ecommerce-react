import { useState, useEffect } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useFilters } from '@/lib/hooks/use-filters'

export default function SearchComponent() {
  const { filters, updateFilters } = useFilters()
  const [title, setTitle] = useState<string>(filters.title)

  useEffect(() => {
    updateFilters({ title })
  }, [title])

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <div className='relative flex items-center min-w-96'>
      <SearchIcon className='absolute left-3 text-gray-500' />
      <Input
        className='pl-10'
        placeholder='Search...'
        value={title}
        onChange={handleTitleChange}
      />
    </div>
  )
}
