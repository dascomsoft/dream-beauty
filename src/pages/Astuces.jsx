import React, { useEffect } from 'react';
import { FaTelegramPlane, FaSeedling, FaRegSmile, FaRegStar } from 'react-icons/fa';
import { GiDrop, GiFlowerPot, GiStrawberry } from 'react-icons/gi';
import { MdOutlineSpa, MdOutlineWbSunny } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Astuces = () => {
  const whatsappNumber = "237670310338";

  const whatsappMessage = "Bonjour! Je souhaiterais obtenir des conseils beauté personnalisés.";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tips = [
    {
      icon: <GiDrop className="text-4xl text-cyan-600" />,
      title: "Exfoliation Corporelle",
      tip: "Offrez à votre peau un gommage doux une à deux fois par semaine pour révéler son éclat naturel.",
      description: "L'exfoliation retire les cellules mortes et active la microcirculation. Massez en mouvements circulaires du bas vers le haut.",
      frequency: "1-2 fois par semaine",
      gradient: "bg-gradient-to-br from-cyan-50 to-blue-100"
    },
    {
      icon: <FaSeedling className="text-4xl text-lime-600" />,
      title: "Nourrir les Cuticules",
      tip: "Chaque soir, appliquez de l'huile végétale sur vos cuticules pour les maintenir souples.",
      description: "Des cuticules hydratées embellissent vos mains. Massez avec de l'huile de coco ou d'amande pour un soin profond.",
      frequency: "Tous les soirs",
      gradient: "bg-gradient-to-br from-lime-50 to-green-100"
    },
    {
      icon: <MdOutlineSpa className="text-4xl text-violet-600" />,
      title: "Nettoyage Quotidien",
      tip: "Nettoyez votre visage matin et soir avec un soin adapté à votre type de peau.",
      description: "Un nettoyage régulier protège la peau des impuretés et préserve son éclat. Terminez toujours par une hydratation adaptée.",
      frequency: "Matin et soir",
      gradient: "bg-gradient-to-br from-violet-50 to-purple-100"
    },
    {
      icon: <MdOutlineWbSunny className="text-4xl text-amber-500" />,
      title: "Masque Hydratant",
      tip: "Appliquez un masque nourrissant deux fois par semaine pour garder votre peau souple.",
      description: "Les masques apportent un soin intensif et un effet lumineux immédiat. Choisissez-le selon vos besoins.",
      frequency: "2 fois par semaine",
      gradient: "bg-gradient-to-br from-amber-50 to-yellow-100"
    },
    {
      icon: <FaRegSmile className="text-4xl text-rose-500" />,
      title: "Auto-massage Facial",
      tip: "Pratiquez un massage du visage pour stimuler la circulation et détendre les traits.",
      description: "Cinq minutes de massage chaque jour raffermissent la peau et apportent de l'éclat. Utilisez vos doigts en petits cercles.",
      frequency: "Quotidiennement",
      gradient: "bg-gradient-to-br from-rose-50 to-pink-100"
    },
    {
      icon: <GiStrawberry className="text-4xl text-orange-500" />,
      title: "Nutrition Beauté",
      tip: "Favorisez une alimentation riche en fruits et légumes colorés pour une peau éclatante.",
      description: "Les antioxydants contenus dans ces aliments protègent et revitalisent la peau de l'intérieur.",
      frequency: "Quotidiennement",
      gradient: "bg-gradient-to-br from-orange-50 to-red-100"
    }
  ];

  const diyRecipes = [
    {
      title: "Masque Miel & Flocons d’Avoine",
      ingredients: ["2 cuillères de miel", "1 cuillère de flocons d'avoine", "Quelques gouttes d'eau"],
      benefits: "Hydrate et exfolie tout en douceur",
      time: "15 minutes"
    },
    {
      title: "Gommage Sucre & Huile de Coco",
      ingredients: ["3 cuillères de sucre", "2 cuillères d'huile de coco", "Quelques gouttes d'huile essentielle"],
      benefits: "Nourrit et illumine instantanément",
      time: "10 minutes"
    },
    {
      title: "Masque Yaourt & Concombre",
      ingredients: ["2 cuillères de yaourt", "1/2 concombre mixé", "1 cuillère de miel"],
      benefits: "Calme et rafraîchit la peau",
      time: "20 minutes"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50 text-gray-900 font-poppins">
      {/* --- Hero Section --- */}
      <section className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1770&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/90 via-teal-500/80 to-lime-300/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Astuces Beauté
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              Explorez des conseils simples et efficaces pour prendre soin de votre peau et sublimer votre beauté jour après jour.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <MdOutlineWbSunny className="text-yellow-300 text-xl" />
              <span className="font-playfair text-lg">Astuces professionnelles</span>
              <MdOutlineWbSunny className="text-yellow-300 text-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Tips Section --- */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-playfair text-4xl font-bold text-teal-700 mb-4">
            Nos Conseils Clés
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des habitudes simples pour une routine beauté durable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${tip.gradient} rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {tip.icon}
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-teal-700 mb-3">
                {tip.title}
              </h3>
              
              <div className="bg-cyan-600 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                {tip.frequency}
              </div>
              
              <p className="text-teal-700 font-medium mb-3 leading-relaxed">
                "{tip.tip}"
              </p>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DIY Recipes Section --- */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-lime-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl font-bold text-teal-700 mb-4">
              Recettes Naturelles
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Préparez vos soins maison avec des ingrédients simples et efficaces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {diyRecipes.map((recipe, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-playfair text-xl font-semibold text-teal-700 mb-4">
                  {recipe.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Ingrédients :</h4>
                  <ul className="space-y-1">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaRegStar className="text-yellow-400 text-sm" />
                    <span className="text-sm font-medium text-gray-700">Bienfaits :</span>
                  </div>
                  <p className="text-sm text-gray-600">{recipe.benefits}</p>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <MdOutlineSpa className="text-teal-600 text-sm" />
                    <span className="text-sm font-medium text-gray-700">Temps de pose :</span>
                    <span className="text-sm text-teal-700 font-medium">{recipe.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Expert Quote Section --- */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in" className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-teal-600 to-lime-400 rounded-3xl p-8 md:p-12 text-white">
              <GiFlowerPot className="text-5xl mx-auto mb-6" />
              
              <blockquote className="font-playfair text-2xl md:text-3xl mb-6 italic">
                "La beauté se cultive jour après jour grâce à des gestes simples et constants."
              </blockquote>
              
              <p className="text-lg opacity-90 mb-8">
                - Naomie Campbell, Spécialiste en soins esthétiques
              </p>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaTelegramPlane className="text-cyan-500" />
                <span>Demander des conseils</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Astuces;
