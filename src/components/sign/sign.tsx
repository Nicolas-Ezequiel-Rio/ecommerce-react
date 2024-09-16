import { useState } from 'react'
import clsx from 'clsx'
import { FcGoogle } from 'react-icons/fc'

export default function Sign() {
  const [active, setActive] = useState(false)
  const gridColsClass = active ? 'grid-cols-[auto,1fr]' : 'grid-cols-[1fr,auto]'

  return (
    <section
      className={clsx(
        'max-w-[500px] min-h-[500px] mx-auto grid gap-2',
        gridColsClass
      )}
    >
      <div
        className={clsx(
          'rounded-sm',
          active ? 'w-3 bg-[#fbb800]' : 'w-auto bg-[#fafafa]'
        )}
      >
        <form
          className={clsx(
            'form flex flex-col justify-between w-fit h-full p-6 mx-auto',
            active ? 'hidden' : ''
          )}
        >
          <section>
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
          </section>

          <section>
            <input
              type='submit'
              value='Create Account'
              className='w-full bg-white border cursor-pointer'
            />
            <p className='text-sm'>
              Do you already have an account?{' '}
              <a
                className='cursor-pointer'
                onClick={() => {
                  setActive(!active)
                }}
              >
                Sign In
              </a>
            </p>
            <p className='flex justify-between items-center mt-2 mb-2 w-full'>
              <div className='w-[45%] h-1 border-b border-b-black border-transparent border-t-0 border-r-0 border-l-0'></div>
              or
              <div className='w-[45%] h-1 border-b border-b-black border-transparent border-t-0 border-r-0 border-l-0'></div>
            </p>

            <button
              type='submit'
              className='flex items-center border border-s-[1px] border-none w-fit mx-auto'
            >
              <FcGoogle className='text-2xl mr-2' /> Sign Up with Google
            </button>
          </section>
        </form>
      </div>
      <div
        className={clsx(
          'rounded-sm',
          active ? 'w-auto bg-[#fafafa]' : 'w-3 bg-[#fbb800]'
        )}
      >
        <form
          className={clsx(
            'form flex flex-col justify-between w-full h-full p-6 mx-auto',
            active ? '' : 'hidden'
          )}
        >
          <section>
            <h2 className='mb-8 text-xl'>Login</h2>
            <input
              type='text'
              placeholder='Email'
              className='w-full border mb-4'
            ></input>
            <input
              type='text'
              placeholder='Password'
              className='w-full border'
            ></input>
            <div className='flex justify-end'>
              <a className='text-sm cursor-pointer'>Forgot password?</a>
            </div>
          </section>

          <section>
            <input
              type='submit'
              value='Login'
              className='w-full bg-white border cursor-pointer mt-4'
            />
            <p className='text-sm'>
              Do you not have an account?{' '}
              <a
                className='cursor-pointer'
                onClick={() => {
                  setActive(!active)
                }}
              >
                Sign Up
              </a>
            </p>
            <p className='flex justify-between items-center mt-2 mb-2 w-full'>
              <div className='w-[45%] h-1 border-b border-b-black border-transparent border-t-0 border-r-0 border-l-0'></div>
              or
              <div className='w-[45%] h-1 border-b border-b-black border-transparent border-t-0 border-r-0 border-l-0'></div>
            </p>

            <button
              type='submit'
              className='flex items-center border border-s-[1px] border-none w-fit mx-auto'
            >
              <FcGoogle className='text-2xl mr-2' /> Sign In with Google
            </button>
          </section>
        </form>
      </div>
    </section>
  )
}
