import React from 'react'
import { FaCode } from "react-icons/fa";
import Button from '../Button';
import { useAuth, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  const {userId} = useAuth()
  return (
    <nav className='flex justify-between p-4 sticky top-0 z-50'>
        <div className='flex items-center gap-2'>
            <p className='bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-lg'>
                <FaCode color='white' size={30}/>
            </p>
            <h1 className='text-2xl'><strong className="text-blue-600">Snip</strong> Saver</h1>
        </div>
         { userId ? <UserButton/> : 
         (
          <Button 
            width="96px"
            height="40px"
            type='button'
            >
              <Link href="/sign-in">Sign in </Link>
             
           </Button>
         )
         }
    </nav>
  )
}

export default Navbar