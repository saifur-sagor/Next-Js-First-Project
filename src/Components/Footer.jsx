"use client";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Socials */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-black text-yellow-400 italic mb-6 tracking-tighter">
            FOODY<span className="text-white">.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            আমরা দিচ্ছি শহরের সেরা খাবার এবং সবচেয়ে দ্রুত ডেলিভারি সুবিধা। আপনার রসনাতৃপ্তিতে আমরা সর্বদা পাশে আছি।
          </p>
          
          {/* Social Icons Section */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b-2 border-yellow-400 w-fit">Menu</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Popular Dishes</li>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Healthy Salads</li>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Fast Delivery</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b-2 border-yellow-400 w-fit">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b-2 border-yellow-400 w-fit">Contact Info</h4>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-400 text-sm italic">
              <Mail size={16} className="text-yellow-400" /> support@foody.com
            </p>
            <p className="flex items-center gap-3 text-gray-400 text-sm italic">
              <Phone size={16} className="text-yellow-400" /> +880 1234 567 890
            </p>
            <p className="flex items-center gap-3 text-gray-400 text-sm italic">
              <MapPin size={16} className="text-yellow-400" /> Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-20 pt-8 text-center text-gray-500 text-sm">
        © 2026 Foody Application. All Rights Reserved. Created for Assignment.
      </div>
    </footer>
  );
}