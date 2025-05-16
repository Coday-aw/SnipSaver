interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ children, width, type, onClick }: ButtonProps) => {
  return (
    <button
      className=" border p-2 bg-blue-500 rounded-lg text-white font-bold cursor-pointer"
      style={{ width }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
