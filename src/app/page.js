"use client";

import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to My Transfer App</h1>
      <Carousel />
    </div>
  );
}
