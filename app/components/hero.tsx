"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div >
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 relative">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://www.example.com/safari-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Hero Section */}
        <header className="relative z-10 bg-transparent text-white py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Safari Adventures</h1>
          <p className="text-xl mb-6">Explore the Wild Heart of Kenya</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600"
            onClick={() => window.location.href = "/places"}
          >
            Discover Now
          </motion.button>         
          <p className="mt-4 text-sm text-gray-300">Last Updated: May 18, 2025, 06:41 PM EAT</p>
        </header>
      </div>
    </div>
  );
}