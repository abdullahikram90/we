"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, Send, Inbox, Bookmark, User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/create-transfer", icon: <Plus />, label: "New" },
    { href: "/sent", icon: <Send />, label: "Sent" },
    { href: "/received", icon: <Inbox />, label: "Received" },
    { href: "/saved", icon: <Bookmark />, label: "Saved" },
    { href: "/account", icon: <User />, label: "Account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 shadow-md">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center text-sm ${
            pathname === item.href ? "text-blue-500" : "text-gray-500"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
