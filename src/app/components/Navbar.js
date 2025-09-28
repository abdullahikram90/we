"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home,Plus, Send, Inbox, Bookmark, User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <Home className="w-6 h-6 text-white" />, label: "Home" },
    { href: "/create-transfer", icon: <Plus className="w-6 h-6 text-white" />, label: "New" },
    { href: "/sent", icon: <Send className="w-6 h-6 text-white" />, label: "Sent" },
    { href: "/received", icon: <Inbox className="w-6 h-6 text-white" />, label: "Received" },
    { href: "/saved", icon: <Bookmark className="w-6 h-6 text-white" />, label: "Saved" },
    { href: "/account", icon: <User className="w-6 h-6 text-white" />, label: "Account" },
  ];

  return (
    <>
      {/* 🔹 Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-between py-6 
        bg-white/20 backdrop-blur-xl border-r border-white/30 shadow-lg">
        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-xs transition-all duration-300 ${
                pathname === item.href
                  ? "font-semibold"
                  : ""
              }`}
            >
              <div
                className={`p-3 rounded-xl transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600 text-white shadow-lg"
                    : "bg-white/10 hover:bg-gradient-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-indigo-600 hover:text-white"
                }`}
              >
                {item.icon}
              </div>
              <span className="text-white">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* 🔹 Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/20 backdrop-blur-xl border-t border-white/30 shadow-lg rounded-t-2xl flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-xs transition-all duration-300 ${
              pathname === item.href
                ? "font-semibold"
                : ""
            }`}
          >
            <div
              className={`p-2 rounded-lg transition-all duration-300 ${
                pathname === item.href
                  ? "bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600 text-white shadow-lg"
                  : "bg-white/10 hover:bg-gradient-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-indigo-600 hover:text-white"
              }`}
            >
              {item.icon}
            </div>
            <span className="text-white">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
