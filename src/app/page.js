"use client";

import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen  overflow-hidden">
      {/* Carousel with padding for navbar */}
      <div className="md:ml-20 "> 
        {/* 🔹 md:ml-20 → leaves space for sidebar on desktop 
            🔹 pb-16 → leaves space for bottom navbar on mobile */}
        <Carousel />
      </div>

      <Navbar />
    </div>
  );
}
