import Image from "next/image";
import heroImage from "@/public/hero.png";

const IntroSection = () => {
  return (
    <div className="text-start flex flex-col items-center gap-5 mt-32 mx-16 ">
      <p className="text-3xl font-semibold">
        {" "}
        <span className="text-blue-500">Snip</span> Saver Helps You Save Your
        code <span className="text-blue-500">Snippets</span>
      </p>
      <p className="w-[400px] sm:w-[600px] font-semibold">
        Effortlessly organize your code snippets and components in one place,
        making it quick and easy to find exactly what you need. Spend less time
        searching through and wrating the same code over and over again and more
        time being productive—save and streamline your work efficiently!{" "}
      </p>

      <button className="border border-blue-500 p-2 cursor-pointer px-10 font-semibold rounded-lg text-blue-500 hover:bg-blue-500   hover:text-white">
        Get Started
      </button>

      <div className="mt-20">
        <Image src={heroImage} alt="hero image" width={800} height={500} />
      </div>
    </div>
  );
};
export default IntroSection;
