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
      if (error) console.log("error", error);
      else setSnippets(data);
      console.log(data);
      setLoading(false);
    };
    fetchSnippets();
  }, [userId]);

  return { snippets, loading, setSnippets };
};

// export const useSnippet = (id: number) => {
//   const [snippet, setSnippet] = useState<Snippet | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { userId } = useAuth();

//   useEffect(() => {
//     const fetchSnippet = async () => {
//       const { data, error } = await supabase
//         .from("snippet")
//         .select("*")
//         .eq("id", id)
//         .eq("creator", userId)
//         .single();
//       if (error) {
//         console.log("error", error);
//         toast.error("An error occurred while fetching the snippet");
//       } else setSnippet(data);
//       setLoading(false);
//     };
//     fetchSnippet();
//   }, [id]);

//   return { snippet, setSnippet, loading };
// };
