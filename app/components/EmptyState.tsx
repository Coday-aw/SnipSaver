import { CiMedicalClipboard } from "react-icons/ci";
import Link from "next/link";
import Button from "./Button";

function EmptyState() {
  return (
    <div className="flex flex-col justify-center items-center mt-40 gap-4 text-gray-500 dark:text-gray-400">
      <div
        className="border border-slate-300 rounded-2xl px-[50px] py-[60px] flex flex-col gap-5 justify-center items-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)]
         hover:shadow-[0_20px_60px_rgba(99, 102, 241, 0.15)] transition-all duration-300
      "
      >
        <div className="relative flex items-center justify-center mx-auto mb-10 w-[80px] h-[80px] rounded-[20px] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] shadow-[0_8px_32px_rgba(99,102,241,0.3)] animate-[iconFloat_3s_ease-in-out_infinite]">
          <span
            className="absolute top-[-4px] left-[-4px] right-[-4px] bottom-[-4px] rounded-[24px] opacity-30 blur-[8px] -z-10"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            }}
          />
          <CiMedicalClipboard size={36} className="text-white" />
        </div>
        <p className="text-3xl font-bold">Welcome to Snip Saver</p>
        <p>Start organizing your code snippets and boost your productivity</p>
        <Button width="150px">
          <Link href="/create">Create snippet</Link>
        </Button>
      </div>
    </div>
  );
}
export default EmptyState;
