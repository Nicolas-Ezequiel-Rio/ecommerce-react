import { useState, useEffect } from 'react'
import { Button, ListGroup } from 'flowbite-react'
import {
  MdOutlineDensitySmall,
  MdOutlineLaptopChromebook,
  MdOutlineTv,
  MdSecurity,
  MdSmartphone
} from 'react-icons/md'
import { useFilters } from '@/lib/hooks/use-filters'

export function FilterByCategoryElectronics() {
  const { filters, updateFilters } = useFilters()
  const [subcategory, setSubcategory] = useState<string>(
    filters.subcategory || ''
  )

  useEffect(() => {
    updateFilters({ subcategory })
  }, [subcategory])

  const handleSubcategorySelect = (selectedSubcategory: string) => {
    setSubcategory(selectedSubcategory)
  }

  const handleResetFilter = () => {
    setSubcategory('all')
  }

  return (
    <section className=''>
      <h3 className='text-center mb-4 font-bold'>Filter by Electronics</h3>
      <div className='flex justify-center my-6'>
        <ListGroup className='w-48'>
          <ListGroup.Item
            active={subcategory === 'all'}
            onClick={() => handleSubcategorySelect('all')}
          >
            <MdOutlineDensitySmall />
            <p className='px-2'>All</p>
          </ListGroup.Item>
          <ListGroup.Item
            active={subcategory === 'pc'}
            onClick={() => handleSubcategorySelect('pc')}
          >
            <MdOutlineLaptopChromebook />
            <p className='px-2'>Pc</p>
          </ListGroup.Item>
          <ListGroup.Item
            active={subcategory === 'smartphones'}
            onClick={() => handleSubcategorySelect('smartphones')}
          >
            <MdSmartphone />
            <p className='px-2'>Smartphones</p>
          </ListGroup.Item>
          <ListGroup.Item
            active={subcategory === 'tv'}
            onClick={() => handleSubcategorySelect('tv')}
          >
            <MdOutlineTv />
            <p className='px-2'>Tv</p>
          </ListGroup.Item>
          <ListGroup.Item
            active={subcategory === 'security'}
            onClick={() => handleSubcategorySelect('security')}
          >
            <MdSecurity />
            <p className='px-2'>Security</p>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <Button className='w-full' onClick={handleResetFilter}>
        Reset
      </Button>
    </section>
  )
}
