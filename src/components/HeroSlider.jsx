import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { MdSpa } from 'react-icons/md';
import React from 'react';

// // Import hero images
// import heroSpa1 from '@/assets/hero-spa-1.jpg';
// import heroSpa2 from '@/assets/hero-spa-2.jpg';
// import heroSpa3 from '@/assets/hero-spa-3.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'blog-banner.jpg',
      title: "Sublimez votre beauté naturelle",
      subtitle: "chez Dream Beauty & Spa",
      description: "Découvrez nos soins exceptionnels dans un cadre luxueux et apaisant"
    },
    {
      image: 'contact-bg.jpg',
      title: "Soins visage professionnels",
      subtitle: "Pour une peau éclatante",
      description: "Traitements personnalisés avec les meilleures techniques de beauté"
    },
    {
      image: 'index.jpg',
      title: "Manucure & Pédicure",
      subtitle: "L'art du détail",
      description: "Prenez soin de vos mains et pieds avec nos services premium"
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/237670310338?text=Bonjour%20Dream%20Beauty%20Spa%20!%20Je%20souhaite%20réserver%20un%20soin%20✨', '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6 animate-fade-in">
            <MdSpa className="h-16 w-16 text-accent mx-auto mb-4" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-accent animate-fade-in">
            {slides[currentSlide].subtitle}
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-lg px-8 py-4 rounded-lg text-white font-medium flex items-center justify-center"
            >
              <FiPhone className="mr-2 h-5 w-5" />
              Réserver maintenant
            </button>
            
            <Link to="/services">
              <button
                className="border-2 border-white bg-amber-400 text-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-4 rounded-lg font-medium flex items-center justify-center"
              >
                Découvrir nos Services
                <FiArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;