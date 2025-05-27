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
