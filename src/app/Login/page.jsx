"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@foody.com" && password === "123456") {
        localStorage.setItem("isLoggedIn", "true");
        // user email save 
        localStorage.setItem("userEmail", email);
      router.push("/AllItems"); 
    } else {
      setError("Wrong email or password: admin@foody.com / 123456");
    }
  };

  return ( 
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-800 tracking-tighter italic">
            FOODY<span className="text-yellow-500">.</span>
          </h2>
          <p className="text-gray-400 mt-2">Login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="info@foody.com"
              className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-yellow-400 outline-none transition-all"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="******"
              className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-yellow-400 outline-none transition-all"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-medium bg-red-50 p-3 rounded-lg text-center">
              {error}
            </p>
          )}

          <button 
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black py-4 rounded-2xl shadow-lg transition-all active:scale-95"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  );
}