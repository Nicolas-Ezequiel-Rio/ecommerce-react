import Signup from './components/signup/signup.tsx'
import Signin from './components/signin/signin.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/navbar/Navbar.tsx'

export default function App() {
  return (
    <>
      <NavbarComponent />

      <BrowserRouter>
        <Routes>
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
          <Route path='*' element={<h1>404: Page not found.</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
