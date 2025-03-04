"use client";

import toast, { Toaster } from "react-hot-toast";

import SnippetForm from "../components/SnippetForm";

function Page() {
  return (
    <div>
      <Toaster />
      <SnippetForm />
    </div>
  );
}

export default Page;
