import Signup from './components/signup/signup.tsx'
import Signin from './components/signin/signin.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/navbar/Navbar.tsx'
import NotFound from './components/not-found/NotFound.tsx'

export default function App() {
  return (
    <>
      <NavbarComponent />

      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='signup' element={<Signup />} />
            <Route path='signin' element={<Signin />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
