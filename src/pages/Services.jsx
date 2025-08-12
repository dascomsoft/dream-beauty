




// import React from 'react';

// import { FaWhatsapp } from 'react-icons/fa';
// import { useEffect } from 'react';





// const ServicesPage = () => {


//     useEffect(() => {
//       // Faire défiler vers le haut au chargement de la page
//       window.scrollTo(0, 0);
//     }, []);




//   const services = [
//     {
//       id: 1,
//       title: "Massages Relaxants",
//       description: "Détendez-vous avec nos massages professionnels aux huiles essentielles premium. Laissez nos thérapeutes expérimentés dissiper votre stress.",
//       image: "gallery-3.jpg",
//       alt: "Massage relaxant dans un spa luxueux"
//     },
//     {
//       id: 2,
//       title: "Tresses & Coiffures Femmes",
//       description: "Transformez votre look avec nos créations capillaires sur mesure. Des tresses africaines aux coupes tendance, notre styliste vous conseille.",
//       image: "coiffure.jpg",
//       alt: "Coiffure élégante pour femme"
//     },
//     {
//       id: 3,
//       title: "Onglerie Artistique",
//       description: "Des mains parfaitement manucurées avec nos techniques de nail art exclusives. Vernis semi-permanent, capsules ou french élégant.Sans oublier les constructions gels , polygels , resines et gainages",
//       image: "ong2.jpeg",
//       alt: "Ongles artistiquement décorés"
//     },
//     {
//       id: 4,
//       title: "Hammam & Gommage Corporel",
//       description: "Purifiez votre peau avec notre rituel de hammam traditionnel suivi d'un gommage enveloppant aux produits naturels pour une peau de bébé.",
//       image: "gommage.jpg",
//       alt: "Espace hammam luxueux"
//     },
//     {
//       id: 5,
//       title: "Extensions de Cils",
//       description: "Un regard intense et naturel avec nos extensions de cils premium, posées une à une par notre experte certifiée. Effet wow garanti.",
//       image: "ex1.jpg",
//       alt: "Extensions de cils parfaites"
//     },
//     {
//       id: 6,
//       title: "Micro-pigmentation",
//       description: "Correction ou embellissement des sourcils, lèvres ou contour des yeux par notre spécialiste en dermopigmentation médicale.",
//       image: "visage.jpeg",
//       alt: "Micro-pigmentation de précision"
//     },
//     {
//       id: 7,
//       title: "Soins de Visage",
//       description: "Rituels de soins personnalisés avec des produits de luxe pour une peau éclatante. Diagnostic peau et protocole sur mesure.",
//       image: "soins.jpeg",
//       alt: "Soin du visage haut de gamme"
//     },
//     {
//       id: 8,
//       title: "Coiffure Homme",
//       description: "Salon dédié aux hommes avec coupe barbe et soins capillaires premium. Des produits masculins haut de gamme pour un style impeccable.",
//       image: "mencut.jpg",
//       alt: "Coiffure élégante pour homme"
//     },
//     {
//       id: 9,
//       title: "Cosmétiques",
//       description: "Boutique exclusive de produits de beauté soigneusement sélectionnés. Des marques prestigieuses pour prolonger l'expérience spa à domicile.",
//       image: "product.jpg",
//       alt: "Produits cosmétiques de luxe"
//     },
//       {
//     title: "Massage Relaxant aux Pierres Chaudes",
//     description:
//       "Profitez d’un massage luxueux aux pierres chaudes pour apaiser vos muscles, améliorer la circulation et offrir une relaxation profonde.",
//     image:
//       "hero.jpg",
//   },

//  {
//     title: "Coiffure Pose Lace Frontale",
//     description:
//       "Mettez en valeur votre style avec notre pose lace frontale professionnelle, pour un look naturel et glamour adapté à toutes vos envies.",
//     image:
//       "poselace.jpg",
//   },

//   ];

//   const handleWhatsAppClick = () => {
//     window.open(`https://wa.me/237670310338?text=Bonjour%20Dream%20Beauty%20%26%20Spa,%20je%20souhaite%20prendre%20rendez-vous`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-pink-50">
//       {/* Hero Section */}
//       <div className="relative pt-50 pb-28 bg-pink-900 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Nos Prestations d'Excellence</h1>
//           <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
//             Découvrez l'art du bien-être avec nos services haut de gamme, dispensés par des experts passionnés.
//           </p>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//           {services.map((service) => (
//             <div 
//               key={service.id}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
//             >
//               <div className="h-60 overflow-hidden relative">
//                 <img 
//                   src={service.image} 
//                   alt={service.alt}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//               </div>
//               <div className="p-6 md:p-8">
//                 <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-3 md:mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm md:text-base">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-pink-800 text-white py-16 md:py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-6">Prêt à vivre l'expérience Dream Beauty & Spa ?</h2>
//           <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
//             Réservez dès maintenant votre moment de détente et de beauté.
//           </p>
//           <button
//             onClick={handleWhatsAppClick}
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center mx-auto transition-all duration-300 transform hover:scale-105"
//           >
//             <FaWhatsapp className="mr-2 text-xl md:text-2xl" />
//             <span className="text-base md:text-lg">Réserver via WhatsApp</span>
//           </button>
//           <p className="mt-4 text-pink-200">670 31 03 38</p>
//         </div>
//       </div>

//       {/* Luxury Note */}
//       <div className="py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-6 text-center max-w-5xl">
//           <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-6 md:mb-8">L'Excellence à Votre Service</h3>
//           <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
//             Chez <span className="font-semibold text-pink-700">Dream Beauty & Spa</span>, chaque détail compte. Nous sélectionnons avec soin les meilleurs produits et formons continuellement notre équipe pour vous offrir une expérience unique, alliant tradition et innovation.
//           </p>
//           <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//             Dans un cadre épuré et raffiné, laissez-vous guider par nos experts pour un moment de pur bien-être où le luxe se mêle à l'authenticité.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;



















import React from 'react';
import { useEffect } from 'react';
import { 
  FaWhatsapp, 
  FaSpa, 
  FaCut, 
  FaHandSparkles, 
  FaHotTub, 
  FaEye, 
  FaPenFancy, 
  FaSmile, 
  FaMale,
  FaShoppingBasket,
  FaHandHoldingHeart,
  FaUserTie,
  FaCheck
} from 'react-icons/fa';
import { GiStonePath } from 'react-icons/gi';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Massages Relaxants",
      description: "Détendez-vous avec nos massages professionnels aux huiles essentielles premium.",
      icon: <FaSpa className="text-4xl text-pink-600" />,
      color: "bg-pink-100",
      prestations: [
        "Massage suédois relaxant (60min)",
        "Massage aux pierres chaudes (75min)",
        "Massage aromatique aux huiles essentielles (60min)",
        "Massage californien (90min)",
        "Massage du dos express (30min)"
      ]
    },
    {
      id: 2,
      title: "Tresses & Coiffures Femmes",
      description: "Transformez votre look avec nos créations capillaires sur mesure.",
      icon: <FaCut className="text-4xl text-purple-600" />,
      color: "bg-purple-100",
      prestations: [
        "Tresses africaines (box braids, cornrows)",
        "Pose de mèches et tissages",
        "Coupes tendance (carré, dégradé, pixie)",
        "Coloration professionnelle",
        "Lissage brésilien et botox capillaire",
        "Coiffures de mariage et événements"
      ]
    },
    {
      id: 3,
      title: "Onglerie Artistique",
      description: "Des mains parfaitement manucurées avec nos techniques exclusives.",
      icon: <FaHandSparkles className="text-4xl text-red-600" />,
      color: "bg-red-100",
      prestations: [
        "Pose de vernis semi-permanent",
        "French manucure classique et colorée",
        "Nail art personnalisé",
        "Construction gel et polygel",
        "Remplissage et réparation",
        "Soin des cuticules et hydratation"
      ]
    },
    {
      id: 4,
      title: "Hammam & Gommage Corporel",
      description: "Purifiez votre peau avec notre rituel traditionnel.",
      icon: <FaHotTub className="text-4xl text-amber-600" />,
      color: "bg-amber-100",
      prestations: [
        "Hammam traditionnel complet (60min)",
        "Gommage au savon noir",
        "Enveloppement au rhassoul",
        "Masque hydratant à l'argile rouge",
        "Massage après gommage",
        "Forfait hammam + gommage (90min)"
      ]
    },
    {
      id: 5,
      title: "Extensions de Cils",
      description: "Un regard intense et naturel avec nos extensions premium.",
      icon: <FaEye className="text-4xl text-blue-600" />,
      color: "bg-blue-100",
      prestations: [
        "Extensions cil à cil (classique)",
        "Volume russe (2D-6D)",
        "Effet wet look",
        "Lifting et coloration des cils",
        "Remplissage tous les 3 semaines",
        "Démaquillage et soin des cils"
      ]
    },
    {
      id: 6,
      title: "Micro-pigmentation",
      description: "Correction ou embellissement par notre spécialiste.",
      icon: <FaPenFancy className="text-4xl text-green-600" />,
      color: "bg-green-100",
      prestations: [
        "Microblading sourcils (effet poil à poil)",
        "Poudre sourcils (ombre powder)",
        "Contour des lèvres",
        "Repigmentation des aréoles",
        "Camouflage de cicatrices",
        "Touche-up après 4-6 semaines"
      ]
    },
    {
      id: 7,
      title: "Soins de Visage",
      description: "Rituels personnalisés pour une peau éclatante.",
      icon: <FaSmile className="text-4xl text-teal-600" />,
      color: "bg-teal-100",
      prestations: [
        "Nettoyage profond et extraction",
        "Hydrafacial et microdermabrasion",
        "Soin anti-âge avec collagène",
        "Masque personnalisé selon type de peau",
        "Dermaplaning (élimination duvet)",
        "Soin éclaircissant et anti-taches"
      ]
    },
    {
      id: 8,
      title: "Coiffure Homme",
      description: "Salon dédié avec coupe barbe et soins premium.",
      icon: <FaMale className="text-4xl text-indigo-600" />,
      color: "bg-indigo-100",
      prestations: [
        "Coupe de cheveux précise (ciseaux/tondeuse)",
        "Rasage traditionnel à l'ancienne",
        "Soin de barbe (huile, cire)",
        "Coloration barbe et cheveux",
        "Dégradé et motifs artistiques",
        "Massage crânien après coupe"
      ]
    },
    {
      id: 9,
      title: "Cosmétiques",
      description: "Boutique exclusive de produits de beauté sélectionnés.",
      icon: <FaShoppingBasket className="text-4xl text-rose-600" />,
      color: "bg-rose-100",
      prestations: [
        "Gammes professionnelles pour soins à domicile",
        "Huiles essentielles et beurres végétaux",
        "Maquillage longue tenue",
        "Produits capillaires spécialisés",
        "Accessoires de beauté premium",
        "Conseils personnalisés par nos experts"
      ]
    },
    {
      id: 10,
      title: "Massage aux Pierres Chaudes",
      description: "Apaisement profond avec nos pierres volcaniques.",
      icon: <GiStonePath className="text-4xl text-amber-800" />,
      color: "bg-amber-100",
      prestations: [
        "Massage complet corps (90min)",
        "Massage dos et épaules (45min)",
        "Combinaison pierres chaudes/froides",
        "Huiles chauffantes personnalisables",
        "Option aromathérapie",
        "Forfait relaxation totale (2h)"
      ]
    },
    {
      id: 11,
      title: "Pose Lace Frontale",
      description: "Look naturel et glamour adapté à vos envies.",
      icon: <FaUserTie className="text-4xl text-violet-600" />,
      color: "bg-violet-100",
      prestations: [
        "Customisation de la ligne frontale",
        "Collage professionnel longue durée",
        "Coiffage et styling personnalisé",
        "Produits d'entretien spécialisés",
        "Retouche et ajustement",
        "Démontage et soin du cuir chevelu"
      ]
    }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/237670310338?text=Bonjour%20Dream%20Beauty%20%26%20Spa,%20je%20souhaite%20prendre%20rendez-vous`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-28 bg-gradient-to-r from-pink-700 to-rose-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"></div>
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
              <div className={`h-40 ${service.color} flex items-center justify-center`}>
                <div className="p-4 bg-white rounded-full shadow-md group-hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {service.description}
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium text-gray-800 mb-3">Prestations incluses :</h4>
                  <ul className="space-y-2">
                    {service.prestations.map((prestation, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{prestation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-700 to-rose-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-6">Prêt à vivre l'expérience Dream Beauty & Spa ?</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Réservez dès maintenant votre moment de détente et de beauté.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
          <div className="flex justify-center mb-8">
            <FaHandHoldingHeart className="text-4xl text-pink-600" />
          </div>
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