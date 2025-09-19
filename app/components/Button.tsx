interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ children, width, type, onClick }: ButtonProps) => {
  return (
    <button
      className=" w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
      style={{ width }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
