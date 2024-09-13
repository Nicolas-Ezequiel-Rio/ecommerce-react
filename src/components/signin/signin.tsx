import { NavLink } from 'react-router-dom'

export default function Signin() {
  return (
    <section className='flex justify-center items-center min-w-full min-h-screen bg-zinc-100'>
      <form className='form flex flex-col content-center max-w-[400px] min-h-[330px] p-6 bg-slate-200 shadow-lg rounded'>
        <h2 className='mb-8 text-xl'>Login</h2>
        <input
          type='text'
          placeholder='Email'
          className='w-full border mb-4'
        ></input>
        <input
          type='text'
          placeholder='Password'
          className='w-full border mb-4'
        ></input>
        <input
          type='submit'
          value='Login'
          className='w-full bg-white border cursor-pointer mt-4'
        />
        <p className='text-sm'>
          Do you not have an account? <NavLink to={'/signup'}>Sign up</NavLink>
        </p>
      </form>
    </section>
  )
}
