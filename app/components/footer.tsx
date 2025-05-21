import Link from 'next/link';
import { BiMailSend, BiPhone } from 'react-icons/bi';
import { BsGoogle, BsInstagram, BsTiktok, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1A2A44] text-white py-15">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="mr-2" color='#58909c'> 
                 <BiPhone size={20} color='#59b4a9'/>
                </span> +254 702 813866
              </p>
              <p className="flex items-center">
                <span className="mr-2">
                  <BiMailSend size={20} color='#59b4a9'/>
                </span> info@jvrtours.co.ke
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Popular News Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">POPULAR NEWS</h3>
            <div className="space-y-4">
              <div className='space-y-2'>
                <p className="text-sm text-[#59b4a9]">Your Personal Guide to 5 Best <br /> Places to Visit on Earth</p>
                <p className="text-xs text-gray-400">MAY 04, 2019</p>
              </div>
              <div className='space-y-2'>
                <p className="text-sm text-[#59b4a9]">Top 10 Hotels: Rating <br /> by Wonder Tour Travel Experts</p>
                <p className="text-xs text-gray-400">MAY 04, 2019</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm hover:text-cyan-400">• About us</Link>
              <Link href="/tours" className="block text-sm hover:text-cyan-400">• Our Tours</Link>
              <Link href="/services" className="block text-sm hover:text-cyan-400">• Our Team</Link>
            </div>
            <button className="mt-4 bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600">
              Get in touch
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
         <div>
           <p className="mb-4 md:mb-0">
            © 2025 JVR Tours Company Ltd. All Rights Reserved.
          </p>
         </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1AzbpGHxAF/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaFacebook size={20}/>
              </a>
              <a href="https://x.com/JvrLtd?t=NZLgovQKnObDPMe4y5D9gg&s=08" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <BsTwitter size={20}/>
              </a>
              <a href="tiktok.com/@jvr_tours" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <BsTiktok size={20} />
              </a> 
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <BsInstagram size={20} />
              </a> 
            </div>            
          </div>
          <div className="ml-8">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}