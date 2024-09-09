import { NavLink } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

export default function Sign() {
  return (
    <section className='flex justify-center items-center min-w-full min-h-screen bg-zinc-100'>
      <form className='form flex flex-col content-center max-w-[400px] min-h-[330px] p-6 bg-slate-200 shadow-lg rounded'>
        <h2 className='mb-8 text-xl'>Create Account</h2>
        <section className='w-full flex justify-between mb-4'>
          <input
            type='text'
            placeholder='First Name'
            className='w-[49%] border'
          ></input>
          <input
            type='text'
            placeholder='Last Name'
            className='w-[49%] border'
          ></input>
        </section>
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
          type='text'
          placeholder='Confirm Password'
          className='w-full border mb-4'
        ></input>
        <input
          type='submit'
          value='Create Account'
          className='w-full bg-white border cursor-pointer'
        />
        <p className='text-sm'>
          Do you already have an account?{' '}
          <NavLink to={'/signin'}>Sign in</NavLink>
        </p>

        <p className='flex justify-between items-center mt-2 mb-2 w-full'>
          <div className='w-[45%] h-1 border border-b-black'></div>or
          <div className='w-[45%] h-1 border border-b-black'></div>
        </p>

        <button
          type='submit'
          className='flex items-center border border-s-[1px] border-black w-fit mx-auto'
        >
          <FcGoogle className='text-2xl mr-2' /> Sign Up with Google
        </button>
      </form>
    </section>
  )
}
