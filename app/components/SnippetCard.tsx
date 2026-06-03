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
import { getLanguageData } from "@/lib/data";

interface SnippetCardProps {
  snippet: Snippet;
  onDelete: (id: number) => void;
}

const SnippetCard = ({ snippet, onDelete }: SnippetCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

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
      toast.error("An error occurred while adding snippet to bookmarks");
    }
    if (isLiked) {
      toast.success("Snippet removed from bookmarks!");
    } else {
      toast.success("Snippet added to bookmarks!");
    }
    console.log(data);
    setIsLiked(!isLiked);
  };

  const LangIcon = getLanguageData(snippet.language);

  return (
    <div className="flex flex-col h-[500px] glass-card gap-4 shadow-lg rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl md:text-2xl dark:text-slate-300">
          {snippet.title}
        </p>
        <IoMdBookmark
          onClick={handleLiked}
          size={30}
          className={`cursor-pointer border p-1 rounded-full transition-colors ${
            isLiked
              ? "text-white bg-violet-500 border-violet-500"
              : " hover:bg-violet-500 hover:border-violet-500 hover:text-white dark:text-slate-300"
          } `}
        />
      </div>
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
        {LangIcon?.icon({
          size: 24,
          color: LangIcon.color,
        })}
        {LangIcon?.name}
      </div>

      <div className="overflow-y-hidden relative flex-1 group">
        <div
          className="absolute cursor-pointer inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center z-10"
          onClick={() => setShowCodeModal(true)}
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
          className="hover:text-violet-500 transition-colors cursor-pointer dark:text-slate-300"
        />
        <div className="flex gap-2">
          <Link aria-label="edit link" href={`/edit/${snippet.id}`}>
            <FaEdit
              size={20}
              className="hover:text-violet-500 transition-colors cursor-pointer dark:text-slate-300"
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
