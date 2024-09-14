import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/signup/signup.tsx'
import Signin from './components/signin/signin.tsx'
import NavbarComponent from './components/navbar/Navbar.tsx'
import NotFound from './components/not-found/NotFound.tsx'
import Home from './components/home/Home.tsx'
import { SidebarComponent } from './components/sidebar/Sidebar.tsx'
import { useState } from 'react'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <>
      <NavbarComponent toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <SidebarComponent />}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
