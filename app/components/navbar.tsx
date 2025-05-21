// File: components/Navbar.tsx
'use client';
import Link from 'next/link';
import './custom.css';
import { useState } from 'react';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import useQuoteModal from '../hooks/useQuoteModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const quoteModal = useQuoteModal();

  return (
    <nav className="bg-blue-600 dark:bg-white  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/image.png" alt='JVR Tours Company' onClick={() => window.location.href = '/'} width={300} height={100} className='cursor-pointer'/>
          
        
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:flex ${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-16 space-x-4 left-0 right-0 md:bg-transparent p-4 md:p-0`}
        >
         <div className='flex space-x-4 items-center'>
            <FaClock size={20} color='green'/>
            <h2>9:00 AM - 5:00 PM </h2> 
         </div>
         <div className='flex  space-x-4 items-center'>
            <BiPhone size={20} color='green'/>
            <h2 className='text-black'>+254702813866</h2> 
         </div>
         <div >
           <button
                className="bn30"
                onClick={() => {
                  quoteModal.onOpen();
                    // setActiveSection("Contact");
                    // setTimeOfLastClick(Date.now());
                }}
                >
                Get free quote
            </button>
         </div>
        </div>
      </div>
    </nav>
  );
}