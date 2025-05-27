"use client";
import { AllLanguages } from "@/lib/data";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";
import { Snippet } from "@/lib/types";
import CodeEditor from "./CodeEditor";
import Button from "./Button";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type SnippetFormData = Omit<Snippet, "id">;

const SnippetForm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    AllLanguages[0].name
  );
  const router = useRouter();

  const { userId } = useAuth();

  const [formData, setFormData] = useState<SnippetFormData>({
    title: "",
    creator: userId,
    language: AllLanguages[0].name,
    tags: "",
    code: "",
    liked: false,
  } as SnippetFormData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.language ||
      !formData.tags ||
      !formData.code
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    const { data, error } = await supabase.from("snippet").insert([
      {
        title: formData.title,
        language: formData.language,
        tags: formData.tags,
        code: formData.code,
        liked: formData.liked,
        creator: userId,
      },
    ]);

    if (error) {
      toast.error("An error occurred while saving the snippet");
    } else {
      toast.success("Snippet saved successfully");
      console.log(data);
      router.push("/dashboard");
    }

    setFormData({
      title: "",
      language: AllLanguages[0].name,
      tags: "",
      code: "",
      liked: false,
    } as SnippetFormData);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    setFormData({ ...formData, language: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 border border-slate-200 dark:border-none shadow-lg dark:bg-slate-800 dark:text-slate-300 p-4 rounded-lg"
    >
      <div>
        <label className="font-bold">Title</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
          value={formData.title}
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
              {AllLanguages.find(
                (lang) => lang.name === selectedLanguage
              )?.icon({ size: 20 })}
            </div>
            <select
              id="language"
              name="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
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
            onChange={(e) => {
              setFormData({ ...formData, tags: e.target.value });
            }}
            type="text"
            name="tags"
            id="tags"
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-slate-300 rounded-md"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="font-bold ">Code</label>
        <CodeEditor
          value={formData.code}
          onChange={(value) => {
            setFormData({ ...formData, code: value });
          }}
        />
      </div>

      <Button type="submit" width="150px">
        Create
      </Button>
    </form>
  );
};
export default SnippetForm;
