"use client";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";

const Buttons = () => {
  const { userId } = useAuth();
  return (
    <div>
      {userId ? (
        <UserButton showName />
      ) : (
        <div className="flex items-center gap-2">
          <button className="text-white  bg-blue-500 p-2 px-5 rounded-lg font-semibold">
            <Link href="/sign-in">Sign In</Link>
          </button>
          <button className="border border-blue-500 p-2 px-5 font-semibold rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white">
            <Link href="/sign-up">Sign Up</Link>
          </button>
        </div>
      )}
    </div>
  );
};
export default Buttons;
