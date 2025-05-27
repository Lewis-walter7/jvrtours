'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: string;
  reviews: string;
  price: string;
  alt: string;
}

interface RecommendedHotelsProps {
  hotels: Hotel[];
}

const RecommendedHotels: React.FC<RecommendedHotelsProps> = ({ hotels }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="pt-20 pb-20">
      <div className="w-[80%] mx-auto">
        <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">Recommended Hotels</h1>
        <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
          A list of some of the best hotels in the country.
        </p>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {hotels.map((hotel, index) => (
          <div
            key={hotel.id}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${index * 100}`}
          >
            <div>
              <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
                <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="w-3 h-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                <img
                  alt={hotel.alt}
                  loading="lazy"
                  width={500}
                  height={500}
                  decoding="async"
                  className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
                  style={{ color: 'transparent' }}
                  src={hotel.image}
                />
              </div>
              <div>
                <h1 className="mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200">
                  {hotel.name}
                </h1>
                <p className="text-sm text-gray-600 mt-3 font-medium mb-6">{hotel.location}</p>
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs">
                    {hotel.rating}
                  </div>
                  <p className="text-sm text-gray-800">Exceptional</p>
                  <p className="text-sm font-bold text-gray-800">{hotel.reviews} Reviews</p>
                </div>
                <p className="mt-3 text-gray-700 font-medium">
                  Starting from{' '}
                  <span className="text-blue-600 font-bold">US${hotel.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedHotels;
