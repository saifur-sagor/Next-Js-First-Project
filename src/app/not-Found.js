"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative inline-block mb-8"
        >
          <h1 className="text-[150px] font-black text-slate-200 leading-none select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <Frown size={80} className="text-yellow-500 animate-bounce" />
          </div>
        </motion.div>

        <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tighter uppercase">
          Oops! The kitchen is <span className="text-yellow-500">Empty.</span>
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
          দুঃখিত, আপনি যে খাবার বা পেজটি খুঁজছেন তা আমাদের মেনুতে নেই। সম্ভবত শেফ এটি সরিয়ে ফেলেছেন!
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center gap-3 bg-slate-900 text-yellow-400 px-10 py-5 rounded-3xl font-black text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl active:scale-95"
        >
          <Home size={24} />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}