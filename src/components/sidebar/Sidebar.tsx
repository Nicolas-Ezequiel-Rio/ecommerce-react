'use client'

import { Sidebar } from 'flowbite-react'
import FilterByPrice from '../common/filters/price'
import { FilterByCategory } from '../common/filters/category'
import { useFilters } from '@/lib/hooks/use-filters'
import { FilterByCategoryElectronics } from '../common/filters/electronics'

export function SidebarComponent() {
  const { filters } = useFilters()

  // Condicionalmente expandir el Sidebar si hay una categoría seleccionada que no sea "all"
  const isExpanded = filters.category !== 'all'

  return (
    <Sidebar
      className={`transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-auto' : 'w-64'
      }`}
    >
      <Sidebar.Items
        className={`ml-12 my-6 grid ${
          isExpanded ? 'grid-cols-2' : 'grid-cols-1'
        }`}
      >
        <Sidebar.ItemGroup className='order-1'>
          <FilterByCategory />
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className='order-3'>
          <FilterByPrice initialPriceMin={1} initialPriceMax={1000} />
        </Sidebar.ItemGroup>

        {isExpanded && (
          <div className='order-2 px-4'>
            <FilterByCategoryElectronics />
          </div>
        )}
      </Sidebar.Items>
    </Sidebar>
  )
}
