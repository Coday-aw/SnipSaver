import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  width: string | number;
  height: string | number;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

const Button = ({ children, onClick, width, height, type }: ButtonProps) => {
  return (
    <button
      className=" group flex items-center justify-center rounded-full hover:bg-linear-to-r from-blue-500 to-purple-600 p-0.5 cursor-pointer hover:text-black"
      type={type}
      style={{ width, height }}
      onClick={onClick}
    >
      <div
        className="flex h-full w-full items-center justify-center rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 transition-colors duration-200
                      group-hover:bg-white group-hover:text-black group-hover:[background-image:none]"
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
