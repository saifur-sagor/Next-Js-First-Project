"use client"
import { motion } from "framer-motion";
export default function Newsletter() {
  return (
    <section className="py-20 bg-yellow-400">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
            Don't Miss Any <span className="bg-white px-2">OFFER!</span>
          </h2>
          <p className="text-slate-800 mb-10 max-w-lg mx-auto font-medium">
            আপনার ইমেইল দিয়ে সাবস্ক্রাইব করুন এবং প্রতিদিনের নতুন নতুন অফার সম্পর্কে জানুন সবার আগে।
          </p>
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-[25px] shadow-2xl">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full outline-none text-slate-800 font-medium"
            />
            <button className="bg-slate-900 text-yellow-400 px-10 py-4 rounded-[20px] font-black hover:bg-slate-800 transition-all active:scale-95">
              Subscribe Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}