import { Snippet } from "@/lib/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoCopyOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import CodeModal from "./CodeModal";
import { getLanguageIcon } from "./GetLangyageIcon";

interface SnippetCardProps {
  snippet: Snippet;
  onDelete: (id: number) => void;
}

const SnippetCard = ({ snippet, onDelete }: SnippetCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false); // Add this line

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
      toast.success("Snippet added to bookmarks!");
    } else {
      toast.success("Snippet removed from bookmarks!");
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
        <IoMdBookmark
          onClick={handleLiked}
          size={30}
          className={`cursor-pointer border p-1 rounded-full  ${
            isLiked
              ? "text-white bg-blue-500 border-blue-500"
              : " hover:bg-blue-500 hover:text-white dark:text-slate-300"
          } `}
        />
      </div>
      <div>{getLanguageIcon(snippet.language, 40)}</div>

      <div className="overflow-y-auto relative flex-1 group">
        <div
          className="absolute cursor-pointer inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center z-10"
          onClick={() => setShowCodeModal(true)} // Add click handler
        >
          <span className="text-white font-bold text-lg">View Snippet</span>
        </div>

        <SyntaxHighlighter
          style={a11yLight}
          showLineNumbers
          wrapLongLines
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
            onClick={() => setOpen(true)}
            size={20}
            className="hover:text-red-500 cursor-pointer dark:text-slate-300"
          />

          <CodeModal
            snippet={snippet}
            isOpen={showCodeModal}
            onClose={() => setShowCodeModal(false)}
          />
          {open && (
            <Modal
              open={open}
              setOpen={setOpen}
              onDelete={() => {
                handleDelete();
                setOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default SnippetCard;
