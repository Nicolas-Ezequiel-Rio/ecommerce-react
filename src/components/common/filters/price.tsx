import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Slider } from '@/components/ui/slider'
import { Label } from 'flowbite-react'

interface Props {
  initialPriceMin: number
  initialPriceMax: number
}

export default function FilterByPrice({
  initialPriceMin,
  initialPriceMax
}: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [priceMin, setPriceMin] = useState<number>(
    parseInt(searchParams.get('priceMin') || initialPriceMin.toString())
  )
  const [priceMax, setPriceMax] = useState<number>(
    parseInt(searchParams.get('priceMax') || initialPriceMax.toString())
  )

  useEffect(() => {
    setSearchParams({
      priceMin: priceMin.toString(),
      priceMax: priceMax.toString()
    })
  }, [priceMin, priceMax, setSearchParams])

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

  return (
    <section className='pr-6'>
      <h3 className='text-center mb-4 font-bold'>Filter by price</h3>
      <div className='my-4'>
        <Label className='font-semibold'>Price Min ({priceMin})</Label>
        <Slider
          defaultValue={[priceMin]}
          max={priceMax}
          step={1}
          onValueChange={handleMinChange}
          className='pt-4'
        />
      </div>
      <div className='my-4'>
        <Label className='font-semibold mb-6'>Price Max ({priceMax})</Label>
        <Slider
          defaultValue={[priceMax]}
          min={priceMin}
          max={1000}
          step={1}
          onValueChange={handleMaxChange}
          className='pt-4'
        />
      </div>
    </section>
  )
}
