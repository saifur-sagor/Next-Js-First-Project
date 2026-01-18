"use client";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";

export default function SpecialOffer() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 relative z-10">
            {/* Text Content */}
            <div className="text-center lg:text-left lg:max-w-xl">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-4 py-1.5 rounded-full font-bold text-sm mb-6 animate-pulse">
                <Tag size={16} />
                <span>LIMITED TIME OFFER</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Get <span className="text-yellow-400">50% OFF</span> On Your First Order!
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Enjoy the most delicious meals from our kitchen to your table. Use the coupon code below to claim your discount.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="border-2 border-dashed border-yellow-400/50 bg-yellow-400/5 px-8 py-3 rounded-2xl">
                  <span className="text-yellow-400 font-mono text-2xl font-bold tracking-widest">FOODY50</span>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-10 py-4 rounded-2xl font-black transition-all active:scale-95 shadow-xl">
                  Order Now
                </button>
              </div>
            </div>

            {/* Image/Visual Part */}
            <div className="mt-12 lg:mt-0 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 lg:w-96 lg:h-96"
              >
                 {/* আপনি এখানে যেকোনো একটি বড় পিৎজা বা বার্গারের PNG ইমেজ দিতে পারেন */}
                <img 
                  src="https://pngimg.com/uploads/pizza/pizza_PNG44090.png" 
                  alt="Special Pizza" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(250,204,21,0.3)]"
                />
              </motion.div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-2xl transform rotate-12">
                <div className="text-slate-900 font-black text-center">
                  <p className="text-xs uppercase">Starts At</p>
                  <p className="text-2xl text-yellow-500">$9.99</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}