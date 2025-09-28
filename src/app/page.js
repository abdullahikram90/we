"use client";

import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to My Transfer App</h1>
      <Carousel />
    </div>
  );
}
