"use client";
import { redirect, useRouter } from "next/navigation";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

function page() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);
  return (
    <div className="mb-20">
      <Navbar />
      <IntroSection />
    </div>
  );
}
export default page;
