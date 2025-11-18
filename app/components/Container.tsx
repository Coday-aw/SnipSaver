interface ConatinerProps {
  children: React.ReactNode;
}

const Container: React.FC<ConatinerProps> = ({ children }) => {
  return <div className="mx-auto max-w-[1500px] p-2">{children}</div>;
};
export default Container;
