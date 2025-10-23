import React from "react";
import { Bell, MessageSquare, Search } from "lucide-react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="w-full sm:h-[8%] flex items-center justify-end md:justify-between p-3 px-5 bg-black">
      <div className="hidden md:block md:ml-16 lg:ml-0 relative w-full max-w-sm">
        {/* Search Icon */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search here..."
          className="w-36 sm:w-full pl-10 pr-4 py-2 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-gray-200 placeholder-gray-500 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className=" hidden md:flex items-center gap-5 mr-10">
          <button className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-xl/30 shadow-cyan-500/50">
            <MessageSquare />
          </button>
          <button className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-lg shadow-cyan-500/30">
            <Bell />
          </button>
        </div>
        <div className="flex flex-col items-end w-30">
          <h1 className="font-semibold text-[15px]">Linda Adora</h1>
          <p className="text-[10px]">Admin</p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-700 shadow-md ">
          <Image
            src="https://images.unsplash.com/photo-1671973889217-117bc2ac8c71?auto=format&fit=crop&q=80&w=687"
            alt="Profile photo of admin Linda Adora"
            width={100}
            height={100}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
