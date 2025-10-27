"use client";

import React, { useState } from "react";
import {
  House,
  Users,
  GraduationCap,
  ClipboardList,
  Bell,
  Calendar,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const sidebar = [
    { name: "Dashboard", icon: <House size={20} />, href: "/dashboard" },
    { name: "Teachers", icon: <Users size={20} />, href: "/dashboard/Teachers" },
    { name: "Students", icon: <GraduationCap size={20} />, href: "/dashboard/Students" },
    { name: "Attendance", icon: <ClipboardList size={20} />, href: "/dashboard/Attendance" },
    { name: "Notice", icon: <Bell size={20} />, href: "/dashboard/Notice" },
    { name: "Calendar", icon: <Calendar size={20} />, href: "/dashboard/Calender" },
    { name: "Messages", icon: <MessageCircle size={20} />, href: "/dashboard/Messages" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-gray-700 hover:border-cyan-500 transition-all duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay for mobile when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar: fixed to viewport left */}
      <aside
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 h-screen w-64 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="h-full w-full flex flex-col bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl border-r border-gray-800/50">
          {/* Logo / header */}
          <div className="relative flex items-center justify-between gap-3 py-6 px-4 border-b border-gray-800/50">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">SchoolHub</h1>
              <p className="text-xs text-cyan-400/70 font-medium">Platform</p>
            </div>

            {/* Close Button for Mobile */}
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="text-white lg:hidden transition-transform duration-300 active:scale-90 p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-2 mt-6 px-3 flex-1 overflow-y-auto">
            {sidebar.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {!isActive && (
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  <div
                    className={`relative p-2 rounded-lg transition-all duration-300 shrink-0 ${
                      isActive ? "bg-white/20" : "bg-gray-800/40 group-hover:bg-gray-700/60"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className="text-sm font-medium relative">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-4 py-4 sm:py-6 border-t border-gray-800/40 mt-auto">
            <p className="text-xs text-gray-500 font-medium">© 2025 SchoolHub</p>
            <p className="text-xs text-gray-600 mt-1">v1.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
