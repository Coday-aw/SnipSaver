"use client";
import Image from "next/image";
import heroImage from "@/public/hero.png";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";

const IntroSection = () => {
  const { userId } = useAuth();
  
  return (
    <div className="flex flex-col items-center text-center mt-20 md:mt-32 px-4 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 flex flex-col items-center"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-900 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 font-medium text-sm mb-4">
          ✨ Your Ultimate Code Companion
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-gradient">Snip</span> Saver
          <br className="hidden md:block" />
          <span className="text-slate-800 dark:text-slate-100"> Your Personal Code Library</span>
        </h1>
        
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Effortlessly save, organize, and access your code snippets and components in one place. Stop wasting time rewriting the same code over and over — find exactly what you need in seconds and stay focused on building.
        </p>

        <div className="flex gap-4 pt-4">
          <Link
            href={userId ? "/dashboard" : "/sign-in"}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
          >
            {userId ? "Go to Dashboard" : "Get Started for Free"}
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 relative w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-cyan-500/20 blur-3xl rounded-full" />
        <div className="relative glass-card rounded-2xl p-2 md:p-4 shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden">
          <Image
            src={heroImage}
            alt="Dashboard Preview"
            className="rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm w-full h-auto object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

export default IntroSection;
