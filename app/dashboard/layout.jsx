import React from "react";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-0 lg:ml-64 transition-all duration-300">
        <Navbar />
        <main className="p-3">{children}</main>
      </div>
    </div>
  );
}
