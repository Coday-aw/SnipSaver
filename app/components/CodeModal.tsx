import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoClose } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { Snippet } from "@/lib/types";

interface CodeModalProps {
  snippet: Snippet;
  isOpen: boolean;
  onClose: () => void;
}

const CodeModal = ({ snippet, isOpen, onClose }: CodeModalProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    toast.success("Code copied successfully");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-4xl max-h-[80vh] w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold dark:text-white">
              {snippet.title}
            </h2>
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded">
              {snippet.language}
            </span>
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

        {/* Code Content */}
        <div className="overflow-auto max-h-[60vh]">
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
    </div>
  );
};

export default CodeModal;
