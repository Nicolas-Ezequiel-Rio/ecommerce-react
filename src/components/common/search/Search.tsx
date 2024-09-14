import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function SearchComponent() {
  return (
    <div className='relative flex items-center min-w-96'>
      <SearchIcon className='absolute left-3 text-gray-500' />
      <Input className='pl-10' placeholder='Search...' />
    </div>
  )
}
