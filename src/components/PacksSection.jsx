import PackCard from './PackCard';
import React from 'react'

const PacksSection = () => {
  const packs = [
    {
      name: "Pack Complet Premium",
      price: "15 000 F",
      services: [
        "Pose vernis gel main",
        "Pédicure chaude",
        "Manucure complète",
        "Hammam relaxant",
        "Savon noir purifiant",
        "Gommage corporel",
        "Soin visage complet",
        "Luminothérapie LED",
        "Dermaplaning"
      ],
      isPopular: true,
      whatsappMessage: "Bonjour Dream Beauty Spa ! Je souhaite réserver le Pack Complet Premium à 15000 F ✨"
    },
    {
      name: "Pack Beauté Essentiel",
      price: "10 000 F",
      services: [
        "Hammam relaxant",
        "Savon noir purifiant",
        "Gommage éclaircissant",
        "Luminothérapie",
        "Soin visage",
        "Dermaplaning",
        "Pédicure complète"
      ],
      whatsappMessage: "Bonjour ! Je veux le Pack Beauté Essentiel à 10000 F chez Dream Beauty & Spa 💆‍♀️"
    },
    {
      name: "Pack Éclat & Bien-être",
      price: "8 500 F",
      services: [
        "Hammam double session",
        "Savon noir purifiant",
        "Gommage relaxant",
        "Soin visage personnalisé",
        "Dermaplaning",
        "Luminothérapie"
      ],
      whatsappMessage: "Bonjour ! Je souhaite réserver le Pack Éclat & Bien-être à 8500 F ✨"
    },
    {
      name: "Pack Détente",
      price: "5 000 F",
      services: [
        "Hammam double session",
        "Savon noir purifiant",
        "Gommage corporel",
        "Soin visage relaxant"
      ],
      whatsappMessage: "Bonjour Dream Beauty Spa ! Je veux réserver le Pack Détente à 5000 F 🌸"
    },
    {
      name: "Pack Mains & Pieds",
      price: "5 000 F",
      services: [
        "Soin visage complet",
        "Dermaplaning",
        "Pédicure professionnelle",
        "Modelage pieds",
        "Vernis gel pieds"
      ],
      whatsappMessage: "Bonjour ! Je souhaite le Pack Mains & Pieds à 5000 F chez Dream Beauty & Spa 💅"
    }
  ];

  return (
    <section id="packs" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Packs Beauté
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos offres exceptionnelles conçues pour sublimer votre beauté 
            et vous offrir une expérience de bien-être inoubliable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packs.map((pack, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <PackCard {...pack} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PacksSection