"use client";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Utensils } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Truck size={32} className="text-orange-500" />,
    title: "Fastest Delivery",
    description: "Delivery within 30 minutes at your doorstep. Fresh and hot food guaranteed.",
    gradient: "from-orange-400 to-yellow-500",
  },
  {
    id: 2,
    icon: <Utensils size={32} className="text-pink-600" />,
    title: "Best Quality",
    description: "We use only the freshest organic ingredients to prepare our delicious meals.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: 3,
    icon: <ShieldCheck size={32} className="text-emerald-600" />,
    title: "100% Hygienic",
    description: "Our kitchen follows strict safety protocols to ensure the healthiest experience.",
    gradient: "from-emerald-400 to-cyan-500",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title - আগের মতোই রাখা হয়েছে */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-800 uppercase tracking-tighter"
          >
            Why Choose <span className="text-yellow-500">Foody?</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Features Cards - ইউনিক কালারফুল ডিজাইন */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="relative bg-white rounded-[40px] shadow-xl overflow-hidden text-center group transition-all duration-300"
            >
              {/* Upper Gradient Background */}
              <div className={`h-48 w-full bg-gradient-to-br ${item.gradient} relative`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <h3 className="text-2xl font-extrabold mb-2 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-tight">
                    {item.title === "Fastest Delivery" ? "Hot & Fresh" : "Healthy Choice"}
                  </p>
                </div>
                
                {/* Wave Effect (Optional) */}
                <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-white">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35c33.59,9.34,74.31,14.07,117.2,12.28C172.5,56.55,245.92,67.43,321.39,56.44Z"></path>
                    </svg>
                </div>
              </div>

              {/* Icon Circle Box */}
              <div className="relative -mt-12 flex justify-center">
                <div className="bg-white p-5 rounded-full shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-gray-50 p-4 rounded-full">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 pt-4">
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Decorative Line */}
                <div className="mt-6 flex justify-center">
                    <div className="w-10 h-1 bg-gray-100 rounded-full group-hover:w-20 group-hover:bg-yellow-400 transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}