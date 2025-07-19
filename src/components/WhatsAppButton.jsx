import { FaWhatsapp } from 'react-icons/fa';
import React from 'react'

const WhatsAppButton = ({ message, className = '', children }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/237670310388?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#20B358] text-white transition-all duration-300 rounded-md px-4 py-2 flex items-center ${className}`}
    >
      <FaWhatsapp className="mr-2 h-5 w-5" />
      {children || 'Contacter sur WhatsApp'}
    </button>
  );
};

export default WhatsAppButton;