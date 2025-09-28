"use client";

import { useState } from "react";

const images = [
  { src: "https://picsum.photos/1920/1080?1", text: "Fast File Transfers" },
  { src: "https://picsum.photos/1920/1080?2", text: "Send via Email" },
  { src: "https://picsum.photos/1920/1080?3", text: "Get Shareable Links" },
  { src: "https://picsum.photos/1920/1080?4", text: "Secure with Passwords" },
  { src: "https://picsum.photos/1920/1080?5", text: "Manage Your Files" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-screen">
      <img
        src={images[current].src}
        alt="carousel"
        className="w-full h-full object-cover"
      />
      <p className="absolute top-6 left-6 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-lg">
        {images[current].text}
      </p>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
}
