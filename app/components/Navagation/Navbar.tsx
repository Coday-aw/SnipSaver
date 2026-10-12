"use client";
import React from 'react';
import { FaCode } from "react-icons/fa";
import Button from '../Button';
import { useAuth, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ModeToggle from '../ModeToggle';

const Navbar = () => {
  const { userId } = useAuth();
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='flex justify-between items-center p-4 sticky top-4 mx-4 md:mx-auto md:max-w-6xl z-50 glass-card rounded-2xl'
    >
        <Link href="/" className='flex items-center gap-3 group'>
            <div className='bg-gradient-to-r from-violet-500 to-cyan-500 p-2.5 rounded-xl shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300'>
                <FaCode color='white' size={24}/>
            </div>
            <h1 className='text-2xl font-bold tracking-tight'>
              <strong className="text-gradient">Snip</strong> Saver
            </h1>
        </Link>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
          { userId ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm font-medium hover:text-violet-500 transition-colors hidden sm:block">
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/"/>
            </div>
          ) : (
            <Link href="/sign-in">
              <Button 
                width="96px"
                height="40px"
                type='button'
              >
                Sign in 
              </Button>
            </Link>
          )}
        </div>
    </motion.nav>
  );
}

export default Navbar;