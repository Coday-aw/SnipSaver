import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoClose } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { Snippet } from "@/lib/types";
import { getLanguageData } from "@/lib/data";

interface CodeModalProps {
  snippet: Snippet;
  isOpen: boolean;
  onClose: () => void;
}

const CodeModal = ({ snippet, isOpen, onClose }: CodeModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    toast.success("Code copied successfully");
  };

  if (!isOpen || !mounted) return null;

  const LangIcon = getLanguageData(snippet.language);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 w-[95vw] h-[90vh] max-w-7xl flex flex-col shadow-2xl">
        <div className="flex justify-between items-center mb-4 shrink-0">
          <div>
            <h2 className="text-xl font-bold dark:text-white">
              {snippet.title}
            </h2>
            <div className=" mt-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
              {LangIcon?.icon({
                size: 24,
                color: LangIcon.color,
              })}
              {LangIcon?.name}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded cursor-pointer"
            >
              <IoCopyOutline size={20} className="dark:text-white" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded cursor-pointer"
            >
              <IoClose size={20} className="dark:text-white" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto rounded-xl border border-slate-100 dark:border-slate-800/50">
          <SyntaxHighlighter
            style={a11yLight}
            showLineNumbers
            wrapLongLines
            language={snippet.language.toLowerCase()}
          >
            {snippet.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CodeModal;
