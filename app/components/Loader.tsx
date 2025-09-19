import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5">
      <p>Loading Snippets..</p>
      <ClipLoader color="#2563eb" size={50} />
    </div>
  );
};
export default Loader;
