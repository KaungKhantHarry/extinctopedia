import Link from 'next/link'
import React from 'react'
import { ThemeToggleButton } from '../../../ui/ThemeToggleButton'

const NavBar = () => {
  return (
    <nav className='w-full h-auto flex flex-col justify-center'>
        <div className='h-14 w-auto flex justify-between items-center px-7'>
            <div>
                <Link href="/" className='font-medium text-3xl text-black dark:text-white'>
                    Extinctopedia
                </Link>
            </div>
            <div>
                  
            </div>
            <div>
                <ThemeToggleButton />
            </div>
        </div>
        <div className='h-14 bg-red-700'>
            <h1>Home</h1>
        </div>
    </nav>
  )
}

export default NavBar
