import { useState, useEffect } from 'react'
import { Slider } from '@/components/ui/slider'
import { Button, Label } from 'flowbite-react'
import { useFilters } from '@/lib/hooks/use-filters'

interface Props {
  initialPriceMin: number
  initialPriceMax: number
}

export default function FilterByPrice({
  initialPriceMin,
  initialPriceMax
}: Props) {
  const { filters, updateFilters } = useFilters()
  const [priceMin, setPriceMin] = useState<number>(
    parseInt(filters.minPrice) || initialPriceMin
  )
  const [priceMax, setPriceMax] = useState<number>(
    parseInt(filters.maxPrice) || initialPriceMax
  )

  useEffect(() => {
    updateFilters({ minPrice: priceMin, maxPrice: priceMax })
  }, [priceMin, priceMax])

  const handleMinChange = (value: number[]) => {
    const newMin = value[0]
    if (newMin <= priceMax) {
      setPriceMin(newMin)
    }
  }

  const handleMaxChange = (value: number[]) => {
    const newMax = value[0]
    if (newMax >= priceMin) {
      setPriceMax(newMax)
    }
  }

  const handleResetFilter = () => {
    setPriceMin(initialPriceMin)
    setPriceMax(initialPriceMax)
  }

  return (
    <section className='pr-6'>
      <h3 className='text-center mb-4 font-bold'>Filter by price</h3>
      <div className='my-4'>
        <Label className='font-semibold'>Price Min ({priceMin})</Label>
        <Slider
          defaultValue={[initialPriceMin]}
          max={priceMax}
          step={1}
          onValueChange={handleMinChange}
          className='pt-4'
        />
      </div>
      <div className='my-4'>
        <Label className='font-semibold mb-6'>Price Max ({priceMax})</Label>
        <Slider
          defaultValue={[initialPriceMax]}
          min={priceMin}
          max={1000}
          step={1}
          onValueChange={handleMaxChange}
          className='py-4'
        />
      </div>
      <div>
        <Button className='w-full' onClick={handleResetFilter}>
          Reset
        </Button>
      </div>
    </section>
  )
}
