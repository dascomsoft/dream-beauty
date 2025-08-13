import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GiNails, GiLotusFlower, GiFootprint ,GiFlowerEmblem } from 'react-icons/gi';
import { MdFaceRetouchingNatural } from 'react-icons/md';

import { IoSparklesSharp } from 'react-icons/io5';
import { PiScissorsBold } from 'react-icons/pi';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const GalerieCategories = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "237670310338";
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'onglerie',
      name: 'Onglerie',
      icon: <GiNails className="text-3xl" />,
      description: 'Nos créations d\'ongles',
      images: ['/ong8.jpeg', '/ong13.jpeg', '/ongle4.jpeg', 'ongle3.jpg']
    },
    {
      id: 'soins-visage',
      name: 'Soins Visage',
      icon: <MdFaceRetouchingNatural className="text-3xl" />,
      description: 'Soins et traitements du visage',
      images: ['/soindream4.jpg', '/soindream5.jpg', '/soindream6.jpg', 'soindream6.webp']
    },
    {
      id: 'pedicure',
      name: 'Pédicure',
      icon: <GiFootprint className="text-3xl" />,
      description: 'Soins des pieds professionnels',
      images: ['/pedidream.jpg', '/pedi1.jpeg', '/pedi.jpeg', '/pedidream3.jpg']
    },
    {
      id: 'extension-cils',
      name: 'Extension Cils',
      icon: <IoSparklesSharp className="text-3xl" />,
      description: 'Extensions de cils naturelles et volumineuses',
      images: ['/extensdream.jpg', '/extensdream1.jpg', 'extensdream2.jpg', 'extensdream3.jpg']
    },
    {
      id: 'hommes',
      name: 'Coiffures',
      icon: <PiScissorsBold className="text-3xl" />,
      description: 'Coiffures et brushings',
      images: ['/coiffuredream.jpg', 'coiffuredream1.jpg', '/coiffuredream2.jpg', '/coiffuredream3.jpg']
    },
    {
      id: 'tresses',
      name: 'Tresses',
  icon: <GiFlowerEmblem className="text-3xl" />,
      description: 'Tresses africaines et coiffures protectrices',
      images: ['/tressy.jpeg', '/tressy1.jpeg', 'tressy2.jpeg', 'tressedream6.webp']
    },
    {
      id: 'nail-art',
      name: 'Nail Art',
      icon: <GiLotusFlower className="text-3xl" />,
      description: 'Créations artistiques sur ongles',
      images: ['art10.jpeg', 'art13.jpeg', 'ongle1.jpg', 'art12.jpeg']
    }
    ,

       {
      id: 'coiffures',
      name: 'Coiffures  Hommes',
      icon: <PiScissorsBold className="text-3xl" />,
      description: 'Coiffures mixtes',
      images: ['/homme1.jpg', 'homme2.jpg', '/homme3.jpg', '/hoome4.jpg']
    }
  ];

  const handleWhatsApp = () => {
    const message = "Bonjour ! Je souhaite prendre rendez-vous à l'Institut Dr. Aïcha Beauty";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center mb-8 mt-40">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mr-4 px-4 py-2 bg-rose-400 text-white rounded-lg hover:bg-pink-500 transition-colors shadow-md"
            >
              ← Retour
            </button>
            <h1 className="text-4xl font-playfair text-rose-700">{category?.name}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {category?.images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={image}
                  alt={`${category.name} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Réserver maintenant</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/review-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-300/80 to-fuchsia-300/80 backdrop-blur-sm" />
        </div>

        <div className="relative container mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl font-bold md:text-6xl font-playfair text-white mb-6" data-aos="fade-up">
            Galerie par Catégories
          </h1>
          <p className="text-xl font-bold text-white/90 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Découvrez nos créations organisées par spécialités
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="group cursor-pointer bg-white/40 backdrop-blur-md rounded-3xl p-8 hover:bg-white/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-300 to-fuchsia-500 rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-playfair text-rose-700 mb-4 group-hover:text-fuchsia-400 transition-colors">
                  {category.name}
                </h3>

                <p className="text-rose-700/80 mb-6">
                  {category.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {category.images.slice(0, 4).map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden shadow-sm">
                      <img
                        src={image}
                        alt={`${category.name} preview ${imgIndex + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                <button className="text-fuchsia-400 font-semibold group-hover:text-rose-500 transition-colors">
                  Voir tout →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-rose-400 to-fuchsia-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair text-white mb-6" data-aos="fade-up">
            Prête à transformer votre look ?
          </h2>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center space-x-3 bg-white text-rose-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
            <span>Contactez-nous sur WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalerieCategories;
