'use client'

import { Sidebar } from 'flowbite-react'

export function SidebarComponent() {
  return (
    <Sidebar>
      <Sidebar.Items className='ml-12'>
        <Sidebar.ItemGroup>{/*Acá van los filtros*/}</Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
