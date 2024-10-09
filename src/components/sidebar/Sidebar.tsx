'use client'

import { Sidebar } from 'flowbite-react'
import FilterByPrice from '../common/filters/price'
import { FilterByCategory } from '../common/filters/category'

export function SidebarComponent() {
  return (
    <Sidebar>
      <Sidebar.Items className='ml-12 my-6'>
        <Sidebar.ItemGroup>
          <FilterByPrice initialPriceMin={1} initialPriceMax={1000} />
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <FilterByCategory />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
