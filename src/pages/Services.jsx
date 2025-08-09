




import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';





const ServicesPage = () => {


    useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);




  const services = [
    {
      id: 1,
      title: "Massages Relaxants",
      description: "Détendez-vous avec nos massages professionnels aux huiles essentielles premium. Laissez nos thérapeutes expérimentés dissiper votre stress.",
      image: "hero.jpg",
      alt: "Massage relaxant dans un spa luxueux"
    },
    {
      id: 2,
      title: "Tresses & Coiffures Femmes",
      description: "Transformez votre look avec nos créations capillaires sur mesure. Des tresses africaines aux coupes tendance, notre styliste vous conseille.",
      image: "coiffure.jpg",
      alt: "Coiffure élégante pour femme"
    },
    {
      id: 3,
      title: "Onglerie Artistique",
      description: "Des mains parfaitement manucurées avec nos techniques de nail art exclusives. Vernis semi-permanent, capsules ou french élégant.",
      image: "ong2.jpeg",
      alt: "Ongles artistiquement décorés"
    },
    {
      id: 4,
      title: "Hammam & Gommage Corporel",
      description: "Purifiez votre peau avec notre rituel de hammam traditionnel suivi d'un gommage enveloppant aux produits naturels pour une peau de bébé.",
      image: "gommage.jpg",
      alt: "Espace hammam luxueux"
    },
    {
      id: 5,
      title: "Extensions de Cils",
      description: "Un regard intense et naturel avec nos extensions de cils premium, posées une à une par notre experte certifiée. Effet wow garanti.",
      image: "cils4.jpg",
      alt: "Extensions de cils parfaites"
    },
    {
      id: 6,
      title: "Micro-pigmentation",
      description: "Correction ou embellissement des sourcils, lèvres ou contour des yeux par notre spécialiste en dermopigmentation médicale.",
      image: "visage.jpeg",
      alt: "Micro-pigmentation de précision"
    },
    {
      id: 7,
      title: "Soins de Visage",
      description: "Rituels de soins personnalisés avec des produits de luxe pour une peau éclatante. Diagnostic peau et protocole sur mesure.",
      image: "soins.jpeg",
      alt: "Soin du visage haut de gamme"
    },
    {
      id: 8,
      title: "Coiffure Homme",
      description: "Salon dédié aux hommes avec coupe barbe et soins capillaires premium. Des produits masculins haut de gamme pour un style impeccable.",
      image: "mencut.jpg",
      alt: "Coiffure élégante pour homme"
    },
    {
      id: 9,
      title: "Cosmétiques",
      description: "Boutique exclusive de produits de beauté soigneusement sélectionnés. Des marques prestigieuses pour prolonger l'expérience spa à domicile.",
      image: "product.jpg",
      alt: "Produits cosmétiques de luxe"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/237670310338?text=Bonjour%20Dream%20Beauty%20%26%20Spa,%20je%20souhaite%20prendre%20rendez-vous`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative pt-50 pb-28 bg-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Nos Prestations d'Excellence</h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Découvrez l'art du bien-être avec nos services haut de gamme, dispensés par des experts passionnés.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-6">Prêt à vivre l'expérience Dream Beauty & Spa ?</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Réservez dès maintenant votre moment de détente et de beauté.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center mx-auto transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="mr-2 text-xl md:text-2xl" />
            <span className="text-base md:text-lg">Réserver via WhatsApp</span>
          </button>
          <p className="mt-4 text-pink-200">670 31 03 38</p>
        </div>
      </div>

      {/* Luxury Note */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-6 md:mb-8">L'Excellence à Votre Service</h3>
          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            Chez <span className="font-semibold text-pink-700">Dream Beauty & Spa</span>, chaque détail compte. Nous sélectionnons avec soin les meilleurs produits et formons continuellement notre équipe pour vous offrir une expérience unique, alliant tradition et innovation.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Dans un cadre épuré et raffiné, laissez-vous guider par nos experts pour un moment de pur bien-être où le luxe se mêle à l'authenticité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;