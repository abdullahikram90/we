"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/new.jpg", text: "Fast File Transfers" },
  { src: "/old.jpg", text: "Send via Email" },
  { src: "/no.jpg", text: "Get Shareable Links" },
  { src: "/we.jpg", text: "Secure with Passwords" },
  { src: "/yes.jpg", text: "Manage Your Files" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600 flex items-center justify-center overflow-hidden">
      {/* Carousel Images (with fade transition) */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}   // ✅ use img.src from array
            alt={`carousel-${index}`}
            fill
            priority={index === current}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 " />
        </div>
      ))}

      {/* Text Overlay */}
      <p className="absolute top-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl text-xl font-semibold shadow-lg transition-opacity duration-700">
        {images[current].text}
      </p>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 text-white p-4 rounded-full shadow-lg border border-white/20 transition-all duration-300"
      >
        {"<"}
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 text-white p-4 rounded-full shadow-lg border border-white/20 transition-all duration-300"
      >
        {">"}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index
                ? "bg-gradient-to-r from-teal-400 to-cyan-500 shadow-lg scale-110"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
