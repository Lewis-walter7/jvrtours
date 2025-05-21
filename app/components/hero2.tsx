"use client";

import Image from "next/image";
import { slides } from "../lib/data";
import { useEffect, useState } from "react";

export default function Hero2() {

     const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);
  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover bg-no-repeat bg-center"
            priority={index === 0}
          />

          {/* Text Content */}
          <div className="absolute top-1/3 left-10 z-20 max-w-xl text-white space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
            <p className="text-lg md:text-xl text-white">{slide.subtitle}</p>
            <a
              href="#"
              className="inline-block mt-4 border-b-2 border-white hover:border-green-300 hover:text-green-300 transition"
            >
              More &gt;
            </a>
          </div>
        </div>
      ))}

      {/* Floating Info Card */}
      <div className="absolute bottom-10 right-10 z-30 bg-white p-4 rounded-lg shadow-xl w-[300px] max-w-full">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-5 h-5 bg-red-500 text-white text-sm font-bold flex items-center justify-center rounded-full">
            i
          </div>
          <h4 className="font-semibold text-gray-800">
            Sightseeing program
            <span className="ml-2 inline-block bg-green-500 text-white text-xs px-2 py-0.5 rounded">
              H
            </span>
          </h4>
        </div>
        <p className="text-sm text-gray-600">
          This tour takes 8 to 13 hours. The length of the hiking part of the
          route is approximately 8,900 meters.
        </p>
      </div>

      {/* Optional Sidebar Dots */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 space-y-3 z-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 2 ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
