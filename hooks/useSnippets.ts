import { useState, useEffect } from "react";
import { supabase } from "@/Supabase/supabaseClient";
import { Snippet } from "@/lib/types";
import { useAuth } from "@clerk/nextjs";
import toast from "react-hot-toast";

export const useSnippets = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchSnippets = async () => {
      const { data, error } = await supabase
        .from("snippet")
        .select("*")
        .eq("creator", userId)
        .order("id", { ascending: false });
      if (error) {
        console.log(error);
        toast.error("Error while fetching data");
      } else setSnippets(data);
      console.log(data);
      setLoading(false);
    };
    fetchSnippets();
  }, [userId]);

  return { snippets, loading, setSnippets };
};
