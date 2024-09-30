import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sign from './components/sign/sign.tsx'
import NavbarComponent from './components/navbar/Navbar.tsx'
import NotFound from './components/common/not-found/NotFound.tsx'
import Home from './components/home/Home.tsx'
import Shop from './components/shop/shop.tsx'
import Cart from './components/cart/cart.tsx'
import { SidebarComponent } from './components/sidebar/Sidebar.tsx'
import { useState } from 'react'
import { ProductContextProvider } from './lib/context/products-context.tsx'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <>
      <ProductContextProvider>
        <NavbarComponent toggleSidebar={toggleSidebar} />
        <div className='flex min-h-screen'>
          {isSidebarOpen && (
            <div className='min-w-24'>
              <SidebarComponent />
            </div>
          )}
          <div className='flex-1 p-5'>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='cart' element={<Cart />} />
                <Route path='sign' element={<Sign />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </ProductContextProvider>
    </>
  )
}
