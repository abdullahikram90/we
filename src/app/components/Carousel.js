"use client";

import { useState } from "react";

const images = [
  { src: "https://picsum.photos/600/300?1", text: "Fast File Transfers" },
  { src: "https://picsum.photos/600/300?2", text: "Send via Email" },
  { src: "https://picsum.photos/600/300?3", text: "Get Shareable Links" },
  { src: "https://picsum.photos/600/300?4", text: "Secure with Passwords" },
  { src: "https://picsum.photos/600/300?5", text: "Manage Your Files" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-lg">
      <img
        src={images[current].src}
        alt="carousel"
        className="rounded-lg shadow-md w-full"
      />
      <p className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
        {images[current].text}
      </p>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
}
