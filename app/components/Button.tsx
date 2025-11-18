import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    width: string | number;
    height: string | number;
    type?: "submit" | "button" | "reset";
    onClick?: () => void;
}

const Button = ({children, onClick, width, height, type}: ButtonProps) => {
  return (
    <button className='flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-600 p-0.5 cursor-pointer text-black'
    type={type}
    style={{width, height}}
    onClick={onClick}
    >
      <div className='flex h-full w-full items-center justify-center rounded-full bg-white font-bold hover:bg-linear-to-r from-blue-600 to-purple-600 hover:text-white'>
        {children}
      </div>
    </button> 
  )
}

export default Button