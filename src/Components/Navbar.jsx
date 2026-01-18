import Link from "next/link";
import { UtensilsCrossed } from "lucide-react"; // আইকন ইমপোর্ট

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/items">All Items</Link></li>
            </ul>
          </div>

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-yellow-400 p-2 rounded-lg group-hover:bg-yellow-500 transition-colors">
              <UtensilsCrossed size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-800">
              FOOD<span className="text-yellow-500">Y</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/items">All Items</Link></li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <Link href="/login" className="btn btn-ghost">Login</Link>
          <Link href="/items" className="btn bg-yellow-400 hover:bg-yellow-500 text-slate-900 border-none">Order Now</Link>
        </div>
      </div>
    </div>
  );
}