import { Snippet } from "@/lib/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { IoCopyOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import toast from "react-hot-toast";
import { supabase } from "@/Supabase/supabaseClient";
import { useEffect, useState } from "react";
import Link from "next/link";

interface SnippetCardProps {
  snippet: Snippet;
  onDelete: (id: number) => void;
}

const SnippetCard = ({ snippet, onDelete }: SnippetCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const checkLiked = async () => {
      const { data, error } = await supabase
        .from("snippet")
        .select("liked")
        .eq("id", snippet.id);
      if (error) {
        toast.error("An error occurred while fetching the snippet");
      } else {
        console.log(data);
        setIsLiked(data[0].liked);
      }
    };
    checkLiked();
  }, [snippet.id]);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    toast.success("Code copied successfully");
  };

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("snippet")
      .delete()
      .eq("id", snippet.id);
    if (error) {
      toast.error("An error occurred while deleting the snippet");
    } else {
      toast.success("Snippet deleted successfully");
      console.log(data);
      setIsLiked(true);
      onDelete(Number(snippet.id));
    }
  };

  const handleLiked = async () => {
    const { data, error } = await supabase
      .from("snippet")
      .update({ liked: !isLiked })
      .eq("id", snippet.id);
    if (error) {
      toast.error("An error occurred while liking the snippet");
    }
    if (isLiked) {
      toast.success("Snippet unliked successfully");
    } else {
      toast.success("Snippet liked successfully");
    }
    console.log(data);
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col h-[500px] border border-slate-300 dark:border-none  dark:bg-slate-800  gap-4 shadow-lg rounded-lg p-4 ">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl md:text-2xl dark:text-slate-300">
          {snippet.title}
        </p>
        <FaHeart
          onClick={handleLiked}
          size={20}
          className={`cursor-pointer  ${
            isLiked ? "text-red-500" : "hover:text-red-500"
          } `}
        />
      </div>
      <div className="flex justify-between">
        <p className=" border px-2 py-1 font-bold rounded-lg text-white dark:text-slate-300 bg-blue-500">
          {snippet.language}
        </p>
      </div>

      <div className="overflow-y-auto">
        <SyntaxHighlighter
          style={docco}
          language={snippet.language.toLocaleLowerCase()}
        >
          {snippet.code}
        </SyntaxHighlighter>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <IoCopyOutline
          onClick={handleCopy}
          size={20}
          className="hover:text-blue-500 cursor-pointer dark:text-slate-300"
        />
        <div className="flex gap-2">
          <Link aria-label="edit link" href={`/edit/${snippet.id}`}>
            <FaEdit
              size={20}
              className="hover:text-blue-500 cursor-pointer dark:text-slate-300"
            />
          </Link>
          <FaTrashCan
            onClick={handleDelete}
            size={20}
            className="hover:text-red-500 cursor-pointer dark:text-slate-300"
          />
        </div>
      </div>
    </div>
  );
};
export default SnippetCard;
