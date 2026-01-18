"use client";
import { motion } from "framer-motion";
import { Users, Utensils, Award, Truck, Heart, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { id: 1, icon: <Users size={32} />, label: "Happy Customers", value: "50k+" },
    { id: 2, icon: <Utensils size={32} />, label: "Expert Chefs", value: "25+" },
    { id: 3, icon: <Award size={32} />, label: "Awards Won", value: "12+" },
    { id: 4, icon: <Truck size={32} />, label: "Fast Deliveries", value: "100k+" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-400 font-black uppercase tracking-[0.3em] text-sm"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mt-4 mb-6 tracking-tighter"
          >
            Cooking With <span className="text-yellow-400 italic">Passion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            ২০২০ সাল থেকে আমরা ঢাকা শহরের ভোজনরসিকদের মুখে হাসি ফোটাতে কাজ করে যাচ্ছি। আমাদের লক্ষ্য কেবল খাবার পৌঁছে দেওয়া নয়, বরং প্রতিটি অর্ডারে স্বাদ ও ভালোবাসা পৌঁছে দেওয়া।
          </motion.p>
        </div>
      </section>

      {/* 2. Mission & Image Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-yellow-400 rounded-[40px] z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Kitchen" 
              className="relative z-10 rounded-[40px] shadow-2xl h-[450px] w-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">
              Why We Are <span className="text-yellow-500 text-3xl">Different</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Foody অ্যাপের যাত্রা শুরু হয়েছিল একদল তরুণ স্বপ্নবাজদের হাত ধরে যারা চেয়েছিল শহরের সেরা রেস্টুরেন্টের স্বাদ সবার ড্রয়িং রুমে পৌঁছে দিতে।
            </p>
            <div className="space-y-4 pt-4">
              {[
                "১০০% হাইজেনিক কিচেন এবং প্যাকিং পদ্ধতি",
                "শহরের সবচেয়ে দ্রুততম ৩০-মিনিট ডেলিভারি গ্যারান্টি",
                "সরাসরি ফার্ম থেকে আসা ফ্রেশ ইনগ্রেডিয়েন্টস",
                "দক্ষ এবং অভিজ্ঞ শেফদের হাতের জাদুকরী স্বাদ"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-slate-700">
                  <CheckCircle2 className="text-yellow-500" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[35px] shadow-xl text-center border border-gray-100 hover:border-yellow-400 transition-colors group"
              >
                <div className="text-yellow-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-1">{stat.value}</h3>
                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Values Section */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-slate-800 mb-16 uppercase tracking-tighter">
          Our Core <span className="text-yellow-500">Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-10 rounded-[50px] bg-yellow-50 border border-yellow-100">
            <Heart className="mx-auto text-yellow-500 mb-6" size={48} />
            <h4 className="text-xl font-black text-slate-800 mb-4">Made with Love</h4>
            <p className="text-gray-500">প্রতিটি খাবারে আমরা যোগ করি আমাদের ভালোবাসা এবং সর্বোচ্চ সতর্কতা।</p>
          </div>
          <div className="p-10 rounded-[50px] bg-slate-900 text-white">
            <Truck className="mx-auto text-yellow-400 mb-6" size={48} />
            <h4 className="text-xl font-black mb-4">Express Speed</h4>
            <p className="text-gray-400">আপনার ক্ষুধা আমাদের অগ্রাধিকার। আমরা ডেলিভারি করি ঝড়ের গতিতে।</p>
          </div>
          <div className="p-10 rounded-[50px] bg-yellow-50 border border-yellow-100">
            <Utensils className="mx-auto text-yellow-500 mb-6" size={48} />
            <h4 className="text-xl font-black text-slate-800 mb-4">Premium Taste</h4>
            <p className="text-gray-500">স্বাদের সাথে কোনো আপোষ নেই। আমরা দিচ্ছি প্রিমিয়াম কোয়ালিটির নিশ্চয়তা।</p>
          </div>
        </div>
      </section>
    </div>
  );
}