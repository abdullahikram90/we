"use client";

import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-1">{children}</main>
        <Navbar /> 
      </body>
    </html>
  );
}
