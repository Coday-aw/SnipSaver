"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/Supabase/supabaseClient";
import { Snippet } from "@/lib/types";
import SnippetCard from "../components/SnippetCard";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Button from "../components/Button";
import { useAuth } from "@clerk/nextjs";
import { useSnippets } from "@/hooks/useSnippets";

function DashBoard() {
  const { snippets, loading, setSnippets } = useSnippets();

  const handleDeleteSnippet = (id: number) => {
    setSnippets(snippets.filter((snippet) => Number(snippet.id) !== id));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
      <Toaster />
      {snippets.length === 0 ? (
        <div className="flex justify-center items-center  mt-32">
          <div className="flex flex-col gap-10">
            <p className="text-2xl font-bold">Welcome to Snip Saver</p>
            <Button width="150px">
              <Link href="/create">Create snippet</Link>
            </Button>
          </div>
        </div>
      ) : (
        snippets.map((snippet) => (
          <SnippetCard
            key={snippet.id}
            onDelete={handleDeleteSnippet}
            snippet={snippet}
          />
        ))
      )}
    </div>
  );
}
export default DashBoard;
