import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { useState } from 'react'
import { TbLayoutSidebar } from 'react-icons/tb'
import SearchComponent from '../common/search/Search'
import { Separator } from '../ui/separator'

export default function NavbarComponent({
  toggleSidebar
}: {
  toggleSidebar: () => void
}) {
  const [logIn, setLogIn] = useState<boolean>(false)

  return (
    <>
      <Navbar fluid rounded className='bg-mustardYellow py-5'>
        <Navbar.Brand href='/' className='px-12'>
          <img
            src='./src/assets/logo.png'
            className='mr-3 h-6 sm:h-9'
            alt='E-commerce'
          />
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            E-commerce
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2 px-12'>
          {logIn ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt='User settings'
                    img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className='block text-sm'>Bonnie Green</span>
                  <span className='block truncate text-sm font-medium'>
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    setLogIn(false)
                  }}
                >
                  Sign out
                </Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </>
          ) : (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt='User settings'
                    img='./src/assets/guest-account.jpg'
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className='block text-sm'>Guest Account</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Navbar.Link href='/sign'>Sign</Navbar.Link>
                </Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </>
          )}
        </div>

        <Navbar.Collapse>
          <SearchComponent />
        </Navbar.Collapse>
      </Navbar>
      <Separator className='bg-black/50 shadow-2xl' />

      <Navbar fluid className=' bg-mustardYellow'>
        <Navbar.Collapse className='px-12'>
          <Navbar.Link>
            <TbLayoutSidebar
              onClick={toggleSidebar}
              className='cursor-pointer size-5'
            />
          </Navbar.Link>

          <Navbar.Link href='/' active>
            Home
          </Navbar.Link>
          <Navbar.Link href='#'>Shop</Navbar.Link>
          <Navbar.Link href='#'>Cart</Navbar.Link>
          <Navbar.Link href='#'>Contact</Navbar.Link>
          <Navbar.Link href='#'>About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
