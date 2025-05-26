import React from 'react';
import { IconType } from 'react-icons/lib';

interface ButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  color: string; 
  url?: string;
  icon: IconType
}

const CustomButton: React.FC<ButtonProps> = ({ phoneNumber, color, message, className, url,icon: Icon}) => {
  const baseUrl = `https://wa.me/${phoneNumber}`;
  const fullUrl = message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;

  return (
    <a
      href={phoneNumber? fullUrl : url}
      target="_blank"
      rel="noopener noreferrer"
       style={{ backgroundColor: color }}
      className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-xl shadow-md transition ${className}`}
    >
      <Icon size={20} />
    </a>
  );
};

export default CustomButton;
