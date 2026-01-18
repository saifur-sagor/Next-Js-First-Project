"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlusCircle, 
  Image as ImageIcon, 
  DollarSign, 
  Utensils, 
  Tag, 
  CheckCircle, 
  ArrowLeft 
} from "lucide-react";
import Link from "next/link";

export default function AddItem() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // --- PRIVATE ROUTE ---
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.replace("/Login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      e.target.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };
  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="container mx-auto max-w-2xl">
        
        {/* Back Button */}
        <Link href="/AllItems" className="inline-flex items-center gap-2 text-gray-400 hover:text-slate-900 font-bold mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to Dashboard
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm"
        >
          {/* Section Title */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-200">
              <PlusCircle className="text-slate-900" size={32} />
            </div>
            <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">
              Add New <span className="text-yellow-500">Dish</span>
            </h2>
            <p className="text-gray-400 font-medium">Create a new entry for your menu</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dish Name */}
            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Dish Title</label>
              <div className="relative">
                <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" size={18} />
                <input 
                  type="text" required placeholder="e.g. Classic Cheese Burger"
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-yellow-400 outline-none transition-all text-slate-800 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Selection */}
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Category</label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" size={18} />
                  <select className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-yellow-400 outline-none transition-all font-bold text-slate-700 appearance-none">
                    <option>Fast Food</option>
                    <option>Main Course</option>
                    <option>Desserts</option>
                    <option>Beverages</option>
                  </select>
                </div>
              </div>

              {/* Price Input */}
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Price ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" size={18} />
                  <input 
                    type="number" step="0.01" required placeholder="0.00"
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-yellow-400 outline-none transition-all text-slate-800 font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Image Link */}
            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">Image URL</label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" size={18} />
                <input 
                  type="url" required placeholder="Paste image link here..."
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-yellow-400 outline-none transition-all text-slate-800 font-medium"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-slate-900 text-yellow-400 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Adding to Menu..." : "Publish Item"}
            </button>

            {/* Success Message Popup */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-3 bg-green-500 text-white p-4 rounded-2xl justify-center font-bold"
                >
                  <CheckCircle size={20} /> Item successfully added to menu!
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  );
}