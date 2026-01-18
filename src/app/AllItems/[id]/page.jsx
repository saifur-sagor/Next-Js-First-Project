"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronLeft, Star, Clock, ShoppingCart, 
  Utensils, Flame, Leaf, ShieldCheck, Heart
} from "lucide-react";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/Items.json")
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.find((f) => f.id.toString() === id);
        setItem(foundItem);
      });
  }, [id]);

  if (!item) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Top Navigation */}
      <div className="container mx-auto px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-yellow-600 font-bold transition-all group">
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Menu
        </Link>
      </div>

      <div className="container mx-auto px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT SIDE: Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400 rounded-[50px] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src={item.image} 
                alt={item.name} 
                className="relative z-10 w-full h-[500px] object-cover rounded-[50px] shadow-2xl"
              />
              <button className="absolute top-6 right-12 z-20 bg-white p-3 rounded-full shadow-lg text-red-500 hover:scale-110 transition-transform">
                <Heart fill="currentColor" size={24} />
              </button>
            </div>

            {/* Nutrition/Mini Cards Under Image */}
            <div className="grid grid-cols-3 gap-4 mt-10 relative z-10">
              <div className="bg-orange-50 p-4 rounded-3xl text-center border border-orange-100">
                <Flame className="mx-auto text-orange-500 mb-2" />
                <p className="text-xs font-bold text-gray-400 uppercase">Calories</p>
                <p className="text-lg font-black text-slate-800">450 kcal</p>
              </div>
              <div className="bg-green-50 p-4 rounded-3xl text-center border border-green-100">
                <Leaf className="mx-auto text-green-500 mb-2" />
                <p className="text-xs font-bold text-gray-400 uppercase">Organic</p>
                <p className="text-lg font-black text-slate-800">100%</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-3xl text-center border border-blue-100">
                <Utensils className="mx-auto text-blue-500 mb-2" />
                <p className="text-xs font-bold text-gray-400 uppercase">Serves</p>
                <p className="text-lg font-black text-slate-800">01 Person</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Information Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest">
                {item.category}
              </span>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-800 mt-4 leading-tight">
                {item.name}
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} />)}
                </div>
                <span className="font-bold text-slate-800">({item.rating})</span>
              </div>
              <div className="h-6 w-[2px] bg-gray-200"></div>
              <div className="flex items-center gap-2 text-gray-500 font-bold">
                <Clock size={20} /> {item.delivery_time}
              </div>
            </div>

            <p className="text-xl text-gray-500 leading-relaxed">
              {item.description || "Indulge in the rich flavors of our chef-special dish, prepared with the finest hand-picked ingredients and a blend of secret spices."}
            </p>

            <div className="flex items-center gap-8 bg-gray-50 p-6 rounded-[35px] border border-gray-100">
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase mb-1">Total Price</p>
                <p className="text-4xl font-black text-slate-900">${item.offer_price || item.price}</p>
              </div>
              <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-slate-900 h-16 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-yellow-400/30 transition-all active:scale-95">
                <ShoppingCart size={24} />
                Add to Cart
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                <ShieldCheck className="text-green-500" /> 100% Hygienic
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                <ShieldCheck className="text-green-500" /> Best Quality
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                <ShieldCheck className="text-green-500" /> Fast Delivery
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Ingredients & Details */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-gray-100 pt-16"
        >
          <h2 className="text-3xl font-black text-slate-800 mb-8 uppercase tracking-tighter">
            What's Inside <span className="text-yellow-500">The Dish?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-500 leading-relaxed text-lg">
                Our kitchen follows strict safety protocols. This dish is prepared using fresh farm-to-table ingredients to ensure you get the best nutrition and taste.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Fresh Ingredients", "Secret Spices", "Organic Veggies", "Hand-made Patty"].map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div> {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 p-8 rounded-[40px] text-white">
              <h4 className="text-xl font-bold mb-4 text-yellow-400">Chef's Note:</h4>
              <p className="italic text-gray-300">
                "We believe that great food starts with great ingredients. Every bite of this {item.name} is a testament to our commitment to quality and flavor."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400"></div>
                <div>
                  <p className="font-bold">Chef Jordon</p>
                  <p className="text-xs text-gray-400">Executive Chef, Foody</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}