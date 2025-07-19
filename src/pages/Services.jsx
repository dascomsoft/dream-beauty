import WhatsAppButton from '../components/WhatsAppButton';
import React from 'react';

const Services = () => {
  const services = [
    {
      category: "Soins Visage",
      description: "Révélez l'éclat naturel de votre peau",
      treatments: [
        { name: "Soin visage complet", description: "Nettoyage, gommage, masque et hydratation", price: "À partir de 8 000 F" },
        { name: "Dermaplaning", description: "Exfoliation douce pour une peau lisse", price: "Inclus dans nos packs" },
        { name: "Luminothérapie LED", description: "Traitement anti-âge par la lumière", price: "Inclus dans nos packs" },
        { name: "Gommage éclaircissant", description: "Pour un teint uniforme et lumineux", price: "Inclus dans nos packs" }
      ]
    },
    {
      category: "Soins Corps",
      description: "Détendez-vous avec nos rituels bien-être",
      treatments: [
        { name: "Hammam traditionnel", description: "Purification et relaxation profonde", price: "Inclus dans nos packs" },
        { name: "Gommage au savon noir", description: "Exfoliation traditionnelle orientale", price: "Inclus dans nos packs" },
        { name: "Modelage relaxant", description: "Massage détente corps entier", price: "Sur demande" },
        { name: "Enveloppement corporel", description: "Hydratation intense de la peau", price: "Sur demande" }
      ]
    },
    {
      category: "Soins Mains & Pieds",
      description: "Prenez soin de vos extrémités",
      treatments: [
        { name: "Manucure complète", description: "Soin des ongles et des cuticules", price: "Inclus dans nos packs" },
        { name: "Pédicure chaude", description: "Soin relaxant des pieds", price: "Inclus dans nos packs" },
        { name: "Pose vernis gel", description: "Manucure longue durée", price: "Inclus Pack 1" },
        { name: "Modelage des pieds", description: "Massage relaxant et hydratant", price: "Inclus Pack 5" }
      ]
    },
    {
      category: "Rituels Spa",
      description: "Expériences complètes de bien-être",
      treatments: [
        { name: "Rituel Détox", description: "Purification complète corps et visage", price: "Pack 3 - 8 500 F" },
        { name: "Rituel Anti-âge", description: "Soins ciblés jeunesse", price: "Pack 2 - 10 000 F" },
        { name: "Rituel Royal", description: "L'expérience spa ultime", price: "Pack 1 - 15 000 F" },
        { name: "Rituel Express", description: "Bien-être rapide et efficace", price: "Pack 4 - 5 000 F" }
      ]
    }
  ];

  const handleWhatsApp = (service) => {
    const message = `Bonjour Dream Beauty Spa ! Je souhaite réserver un ${service} ✨`;
    window.open(`https://wa.me/237670310388?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Découvrez notre gamme complète de soins beauté et bien-être, 
            conçus pour révéler votre éclat naturel
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-12">
            {services.map((category, index) => (
              <div key={index} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {category.category}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.treatments.map((treatment, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 p-6">
                      <div className="pb-3">
                        <h3 className="text-lg font-bold text-purple-600">
                          {treatment.name}
                        </h3>
                      </div>
                      <div className="pt-0">
                        <p className="text-gray-600 mb-4 text-sm">
                          {treatment.description}
                        </p>
                        <div className="space-y-3">
                          <p className="font-semibold text-pink-500">
                            {treatment.price}
                          </p>
                          <button 
                            onClick={() => handleWhatsApp(treatment.name)}
                            className="w-full p-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-colors"
                          >
                            Réserver
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Prêt(e) pour votre transformation beauté ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Réservez dès maintenant votre soin et découvrez l'expérience Dream Beauty & Spa
          </p>
          <button 
            onClick={() => handleWhatsApp("consultation personnalisée")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-lg px-8 py-4 text-white rounded-md font-medium"
          >
            Consultation Gratuite
          </button>
        </div>
      </section>

    </div>
  );
};

export default Services;