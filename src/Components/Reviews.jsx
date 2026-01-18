"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Food Blogger",
    image: "https://i.pravatar.cc/150?u=alex",
    review: "The burger I ordered was incredibly juicy and fresh. Foody's delivery was faster than I expected. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Home Maker",
    image: "https://i.pravatar.cc/150?u=sarah",
    review: "Authentic Italian taste! The pizza crust was perfect. My kids loved it. Will definitely order again next weekend.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=david",
    review: "I love their healthy salad options. It's hard to find fresh organic food delivered so quickly. Great service!",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-800 uppercase tracking-tighter"
          >
            What Our <span className="text-yellow-500">Customers Say</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[30px] shadow-xl relative group border border-transparent hover:border-yellow-400/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-yellow-100 group-hover:text-yellow-400 transition-colors duration-300">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
                "{item.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}