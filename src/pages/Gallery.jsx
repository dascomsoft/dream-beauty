import { useState } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import React from 'react';

// // Import gallery images
// import gallery1 from '@/assets/gallery-1.jpg';
// import gallery2 from '@/assets/gallery-2.jpg';
// import gallery3 from '@/assets/gallery-3.jpg';
// import gallery4 from '@/assets/gallery-4.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: 'gallery-1.jpg',
      title: "Soin visage professionnel",
      category: "Soins Visage"
    },
    {
      src: 'gallery-2.jpg',
      title: "Ambiance spa relaxante",
      category: "Notre Salon"
    },
    {
      src: 'gallery-3.jpg',
      title: "Manucure & Pédicure",
      category: "Soins Mains & Pieds"
    },
    {
      src: 'gallery-4.jpg',
      title: "Espace détente",
      category: "Notre Salon"
    },
    // Additional placeholder content
    {
      src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Massage relaxant",
      category: "Soins Corps"
    },
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Soins du visage",
      category: "Soins Visage"
    },
    {
      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Salon de beauté",
      category: "Notre Salon"
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Hammam traditionnel",
      category: "Soins Corps"
    }
  ];

  const categories = ["Tous", "Soins Visage", "Soins Corps", "Soins Mains & Pieds", "Notre Salon"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredImages = activeCategory === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Galerie
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Découvrez l'ambiance de notre salon et nos réalisations beauté
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white rounded-lg shadow-md"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Nos Résultats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les transformations réalisées par notre équipe d'experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Avant / Après</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="font-semibold mb-2">Avant</p>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Photo avant</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-semibold mb-2">Après</p>
                  <div className="aspect-square bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">✨ Résultat</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Témoignages</h3>
              <div className="space-y-4">
                <blockquote className="text-center italic text-gray-700">
                  "Une expérience exceptionnelle ! Mon visage n'a jamais été aussi éclatant."
                </blockquote>
                <p className="text-center text-gray-500">- Cliente satisfaite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;