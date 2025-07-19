import { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React from 'react';

// Import gallery images
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: gallery1,
      alt: "Résultats de soins visage - Avant/Après",
      category: "Soins Visage"
    },
    {
      src: gallery2,
      alt: "Manucure et nail art professionnel",
      category: "Manucure & Pédicure"
    },
    {
      src: gallery3,
      alt: "Ambiance spa luxueuse et apaisante",
      category: "Ambiance Spa"
    },
    {
      src: gallery4,
      alt: "Équipements professionnels de beauté",
      category: "Équipements"
    }
  ];

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galerie" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Galerie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations et l'ambiance unique de Dream Beauty & Spa. 
            Chaque image témoigne de notre expertise et de notre engagement envers l'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="font-semibold text-sm">{image.category}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-full p-4">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
              
              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image info */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
                <h3 className="font-semibold">{images[selectedImage].category}</h3>
                <p className="text-sm text-white/80">{images[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;