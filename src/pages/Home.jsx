import HeroSlider from '../components/HeroSlider';
import PacksSection from '../components/PacksSection';
import WhatsAppButton from '../components/WhatsAppButton';
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-spa bg-clip-text text-pink-500">
              Bienvenue chez Dream Beauty & Spa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez un havre de paix où votre beauté naturelle est sublimée par nos soins d'exception. 
              Notre équipe de professionnels vous accueille dans un cadre luxueux et apaisant pour une 
              expérience unique de bien-être et de beauté.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-background rounded-lg shadow-elegant shadow-lg">
              <div className="w-16 h-16 bg-gradient-spa rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Des soins de qualité premium avec les meilleures techniques de beauté
              </p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg shadow-elegant shadow-lg">
              <div className="w-16 h-16 bg-gradient-spa rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💆‍♀️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Détente</h3>
              <p className="text-muted-foreground">
                Un environnement serein conçu pour votre relaxation totale
              </p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg shadow-elegant shadow-lg">
              <div className="w-16 h-16 bg-gradient-spa rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personnalisé</h3>
              <p className="text-muted-foreground">
                Chaque soin est adapté à vos besoins spécifiques
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <PacksSection />
    </div>
  );
};

export default Home;