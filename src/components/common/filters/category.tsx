import { useState, useEffect } from 'react'
import { ListGroup } from 'flowbite-react'
import { IoCarSharp } from 'react-icons/io5'
import { PiCircuitryFill } from 'react-icons/pi'
import { FaHome } from 'react-icons/fa'
import { MdEmojiObjects, MdOutlineDensitySmall } from 'react-icons/md'
import { useFilters } from '@/lib/hooks/use-filters'

export function FilterByCategory() {
  const { filters, updateFilters } = useFilters()
  const [category, setCategory] = useState<string>(filters.category || 'all')

  useEffect(() => {
    updateFilters({ category })
  }, [category])

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory)
  }

  return (
    <section className='pr-6'>
      <h3 className='text-center mb-4 font-bold'>Filter by category</h3>
      <div className='flex justify-center my-6'>
        <ListGroup className='w-48'>
          <ListGroup.Item onClick={() => handleCategorySelect('all')}>
            <MdOutlineDensitySmall />
            <p className='px-2'>All</p>
          </ListGroup.Item>
          <ListGroup.Item onClick={() => handleCategorySelect('electronics')}>
            <PiCircuitryFill />
            <p className='px-2'>Electronics</p>
          </ListGroup.Item>
          <ListGroup.Item onClick={() => handleCategorySelect('vehicles')}>
            <IoCarSharp />
            <p className='px-2'>Vehicles</p>
          </ListGroup.Item>
          <ListGroup.Item onClick={() => handleCategorySelect('accessories')}>
            <MdEmojiObjects />
            <p className='px-2'>Accessories</p>
          </ListGroup.Item>
          <ListGroup.Item onClick={() => handleCategorySelect('home')}>
            <FaHome />
            <p className='px-2'>Home</p>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </section>
  )
}
