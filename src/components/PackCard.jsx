import { FiCheck, FiStar } from 'react-icons/fi';
import { MdSpa } from 'react-icons/md';
import React from 'react';

const PackCard = ({ name, price, services, isPopular = false, whatsappMessage }) => {
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/237670310388?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className={`relative group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-lg border ${
      isPopular ? 'border-primary shadow-lg' : 'border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center shadow-md">
            <FiStar className="mr-1 h-4 w-4" />
            Plus Populaire
          </div>
        </div>
      )}
      
      <div className="p-6 text-center pb-4">
        <div className="mb-4">
          <MdSpa className="h-12 w-12 text-pink-400 mx-auto animate-bounce" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {price}
        </div>
      </div>
      
      <div className="px-6 pb-6 space-y-6">
        <div className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-3">
              <FiCheck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{service}</span>
            </div>
          ))}
        </div>
        
        <button
          onClick={handleWhatsApp}
          className={`w-full py-3 text-lg font-semibold transition-all duration-300 rounded-md text-white ${
            isPopular 
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30'
          }`}
        >
          Réserver ce Pack
        </button>
      </div>
    </div>
  );
};

export default PackCard;