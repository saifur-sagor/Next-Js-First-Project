"use client";
import { motion } from "framer-motion";
import { Smartphone, Apple, PlayCircle } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-6 leading-tight">
            Order Your Favorite Food <br />
            <span className="text-yellow-500 text-3xl lg:text-4xl">On The Go With Our App</span>
          </h2>
          <p className="text-gray-500 mb-10 text-lg leading-relaxed">
            খাবার অর্ডার করা এখন আরও সহজ। আমাদের মোবাইল অ্যাপ ডাউনলোড করুন এবং পান এক্সক্লুসিভ ডিসকাউন্ট ও রিয়েল-টাইম ট্র্যাকিং সুবিধা।
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-slate-900 text-white flex items-center gap-3 px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700">
              <PlayCircle size={30} className="text-yellow-400" />
              <div className="text-left">
                <p className="text-[10px] uppercase">Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </button>
            <button className="bg-slate-900 text-white flex items-center gap-3 px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700">
              <Apple size={30} className="text-yellow-400" />
              <div className="text-left">
                <p className="text-[10px] uppercase">Download on</p>
                <p className="font-bold">App Store</p>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:w-1/2 relative flex justify-center"
        >
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl scale-75"></div>
          <img 
            src="https://creativelayers.net/themes/foodio-html/images/resource/mobile-app.png" 
            alt="Mobile App" 
            className="relative z-10 w-full max-w-sm drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
}