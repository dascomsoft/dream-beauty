import { FiHeart, FiStar, FiUsers } from 'react-icons/fi';
import { MdSpa, MdNaturePeople } from 'react-icons/md';
import React from 'react';

const AboutSection = () => {
  const values = [
    {
      icon: MdSpa,
      title: "Excellence & Expertise",
      description: "Notre équipe de professionnels qualifiés vous offre des soins de haute qualité avec les meilleures techniques de beauté."
    },
    {
      icon: FiHeart,
      title: "Bien-être & Détente",
      description: "Un cadre apaisant et luxueux pour vous permettre de vous ressourcer et de retrouver votre éclat naturel."
    },
    {
      icon: MdNaturePeople,
      title: "Soins Personnalisés",
      description: "Chaque soin est adapté à vos besoins spécifiques pour des résultats optimaux et durables."
    },
    {
      icon: FiStar,
      title: "Qualité Premium",
      description: "Nous utilisons uniquement des produits de qualité supérieure pour garantir votre satisfaction."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À Propos de Dream Beauty & Spa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Notre mission est de révéler l'éclat naturel de votre beauté dans un environnement 
            luxueux et apaisant, où chaque détail est pensé pour votre bien-être.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Notre Philosophie
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chez Dream Beauty & Spa, nous croyons que la beauté authentique naît 
              de l'harmonie entre le corps et l'esprit. Notre approche holistique 
              combine techniques modernes et soins traditionnels pour vous offrir 
              une expérience unique de transformation et de bien-être.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Situés au cœur de Yaoundé, nous vous accueillons dans un espace 
              entièrement dédié à votre beauté et votre détente, avec un service 
              personnalisé et des équipements de dernière génération.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <FiUsers className="h-8 w-8" />
                <h4 className="text-2xl font-bold">Notre Équipe</h4>
              </div>
              <p className="text-lg leading-relaxed">
                Des professionnels passionnés et expérimentés, formés aux dernières 
                techniques de beauté et de bien-être, sont à votre service pour 
                vous accompagner dans votre parcours beauté.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group animate-fade-in p-6 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="pt-2 pb-4">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-float" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;








