"use client";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="bg-yellow-400 p-6 rounded-[30px] shadow-2xl shadow-yellow-200 mb-8"
      >
        <UtensilsCrossed size={60} className="text-white" />
      </motion.div>
      
      <div className="text-center">
        <h2 className="text-3xl font-black text-slate-800 tracking-tighter uppercase italic">
          Cooking Your <span className="text-yellow-500">Dreams...</span>
        </h2>
        <div className="flex justify-center gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-3 h-3 bg-yellow-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}