"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import toast, { Toaster } from "react-hot-toast";
import { Snippet } from "@/lib/types";
import { AllLanguages } from "@/lib/data";
import CodeEditor from "../../components/CodeEditor";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

function EditPage() {
  const params = useParams();
  const [snippet, setSnippet] = useState<Snippet | null>(null);

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [tags, setTags] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchSnippet = async () => {
      const { data, error } = await supabase
        .from("snippet")
        .select("*")
        .eq("id", params.id)
        .single();
      if (error) {
        console.log(error);
        toast.error("An error occurred while fetching the snippet");
      } else {
        setSnippet(data);
        setTitle(data.title);
        setLanguage(data.language);
        setTags(data.tags);
        setCode(data.code);
      }
    };
    fetchSnippet();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("snippet")
      .update({ title, language, tags, code })
      .eq("id", params.id);

    if (error) {
      toast.error("An error occurred while updating the snippet");
    } else {
      toast.success("Snippet uptaded successfully");
      console.log(data);
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 border border-slate-200 dark:border-none dark:bg-slate-800 dark:text-slate-300 p-4 rounded-lg"
      >
        <p className="text-center font-bold text-2xl">Edit Snippet</p>
        <div>
          <label className="font-bold">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-slate-300 rounded-md"
          />
        </div>

        <div className="flex">
          <div className="w-1/2 pr-2">
            <label className="font-bold">Language</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-2 flex items-center pr-3 pointer-events-none">
                {AllLanguages.find((lang) => lang.name === language)?.icon({
                  size: 20,
                })}
              </div>
              <select
                onChange={(e) => setLanguage(e.target.value)}
                id="language"
                name="language"
                value={language}
                className="mt-1 p-2 px-7 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-slate-300 rounded-md"
              >
                {AllLanguages.map((language) => (
                  <option key={language.name} value={language.name}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <label className="font-bold">Tags</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              type="text"
              name="tags"
              id="tags"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-slate-300 rounded-md"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="font-bold ">Code</label>
          <CodeEditor value={code} onChange={(newValue) => setCode(newValue)} />
        </div>
        <div className="flex justify-end gap-4">
          <button
            className="bg-blue-500 text-white p-2 rounded-lg w-32 cursor-pointer"
            type="submit"
          >
            Save
          </button>
          <button className=" border border-blue-500 p-2 rounded-lg w-32 cursor-pointer">
            <Link href="/dashboard">Cancel</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditPage;
