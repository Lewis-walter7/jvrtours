import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const HeroSection = () => {
  const [location, setLocation] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSearch = () => {
    console.log('Search clicked', { location, startDate, endDate });
    // Implement search functionality here
  };

  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <video
        src='hero1.mp4'
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute z-[40] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div data-aos="fade-up">
            <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">
              Lets Enjoy The Nature
            </h1>
            <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">
              Get the best prices on 2,000+ places, in East Africa
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]">
            <div className="flex items-center space-x-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="w-6 h-6 text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"></path>
              </svg>
              <div>
                <p className="text-lg font-medium mb-[0.2rem]">Location</p>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="outline-none border-none placeholder:text-gray-800"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-6 h-6 text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <div>
                <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
                <input
                  type="date"
                  className="outline-none border-none"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-6 h-6 text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <div>
                <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
                <input
                  type="date"
                  className="outline-none border-none"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="w-6 h-6 text-blue-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"></path>
              </svg>
              <div>
                <p className="text-lg font-medium mb-[0.2rem]">Guest</p>
                <p className="text-base font-normal">1 Guest 1 Room</p>
              </div>
            </div>
          </div>
          <a
            className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
            onClick={handleSearch}
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-bold">Search</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;