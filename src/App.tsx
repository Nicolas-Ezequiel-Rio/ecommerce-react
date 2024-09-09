import Signup from './signup/signup.tsx'
import Signin from './signin/signin.tsx'
import Sign from './sign.tsx'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <p>
                <NavLink to={'/signin'}>Signin</NavLink> {' | '}
                <NavLink to={'/signup'}>Signup</NavLink>
              </p>
            }
          />
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup&in' element={<Sign></Sign>} />
          <Route path='*' element={<h1>404: Page not found.</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
