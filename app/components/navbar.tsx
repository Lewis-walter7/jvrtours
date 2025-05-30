// File: components/Navbar.tsx
'use client';
import Link from 'next/link';
import './custom.css';
import { useState } from 'react';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import { Menu, X } from 'lucide-react';
import useQuoteModal from '../hooks/useQuoteModal';
import { links } from '../lib/data';
import Sidebar from './sidebar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const quoteModal = useQuoteModal();

  return (
    <nav className="bg-blue-600 dark:bg-white  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/image.png" alt='JVR Tours Company' onClick={() => window.location.href = '/'} width={280} height={100} className='cursor-pointer'/>

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
                Quote
            </button>
         </div>
        </div>
        <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        links={links}
      />
      </div>
    </nav>
  );
}