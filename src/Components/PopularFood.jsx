"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Clock } from "lucide-react";

export default function PopularFood() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("/item.json")
      .then((res) => res.json())
      .then((data) => setFoods(data.slice(0, 6)));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">
            Our Popular <span className="text-yellow-500">Dishes</span>
          </h2>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Check out our most ordered and highly rated delicious meals.
          </p>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Discount Badge */}
                {food.offer_price && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded-full text-sm shadow-md">
                    OFFER
                  </div>
                )}
                {/* Rating Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold shadow-sm">
                  <Star size={16} className="fill-yellow-500 text-yellow-500" />
                  {food.rating}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-yellow-600 transition-colors">
                    {food.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Clock size={14} />
                  <span>{food.delivery_time}</span>
                  <span className="mx-1">•</span>
                  <span className="text-yellow-600 font-medium">
                    {food.category}
                  </span>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                  {food.description}
                </p>

                {/* Pricing & Button */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    {food.offer_price ? (
                      <div className="flex flex-col">
                        <span className="text-gray-400 line-through text-xs">
                          ${food.price}
                        </span>
                        <span className="text-2xl font-black text-slate-900">
                          ${food.offer_price}
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl font-black text-slate-900">
                        ${food.price}
                      </span>
                    )}
                  </div>

                  <Link href={`/items/${food.id}`}>
                    <button className="p-3 bg-slate-900 text-yellow-400 rounded-2xl hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-md">
                      <ShoppingCart size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Link
            href="/items"
            className="btn btn-outline border-2 border-slate-900 hover:bg-yellow-500 hover:border-slate-900 px-10 rounded-full font-bold"
          >
            See All Items
          </Link>
        </div>
      </div>
    </section>
  );
}
