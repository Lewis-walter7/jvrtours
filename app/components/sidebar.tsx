import React from "react";
import { X } from "lucide-react";
import type { Link } from "../lib/data";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  links: readonly Link[];
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, links }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <span className="text-xl font-semibold tracking-widest">JVR TOURS COMPANY LTD</span>
        <button onClick={() => setIsOpen(false)} aria-label="Close menu">
          <X size={24} className="text-white" />
        </button>
      </div>

      {/* Plan Your Journey Button */}
      <div className="p-4 mt-3">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2 font-bold uppercase mb-6">
          Plan Your Journey
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-5">
          {links.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className="text-white hover:text-orange-400 text-lg border-b border-gray-700 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      
    </div>
  );
};

export default Sidebar;
