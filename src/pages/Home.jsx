import HeroSlider from '../components/HeroSlider';
import PacksSection from '../components/PacksSection';
import WhatsAppButton from '../components/WhatsAppButton';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';



const Home = () => {

      useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);

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

  {/* Pourquoi choisir Dream Beauty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-12">
            Pourquoi choisir Dream Beauty & Spa ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rose-50 p-6 rounded-lg shadow-md text-center transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-rose-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">Professionnalisme</h3>
              <p className="text-rose-700">
                Une équipe d'experts formés aux dernières techniques de beauté et bien-être
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg shadow-md text-center transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-rose-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">Produits naturels</h3>
              <p className="text-rose-700">
                Nous utilisons exclusivement des produits bio et adaptés à chaque type de peau
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-lg shadow-md text-center transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-spa text-rose-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">Ambiance zen</h3>
              <p className="text-rose-700">
                Un cadre luxueux conçu pour votre détente et votre confort absolu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-rose-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-12">Nos Services Exclusifs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ['fas fa-hand-sparkles', 'Soins des Mains', 'Manucure, vernis gel, soins nourrissants pour des mains parfaites.'],
              ['fas fa-tint', 'Soins du Visage', 'Nettoyage profond, hydratation, dermaplaning et luminothérapie.'],
              ['fas fa-umbrella-beach', 'Pédicure Chaude', 'Détente extrême avec notre pédicure chaude exclusive.'],
              ['fas fa-fire', 'Hammam', 'Purification de la peau avec hammam traditionnel et savon noir.'],
              ['fas fa-magic', 'Gommage', 'Élimination des cellules mortes pour une peau douce et éclatante.'],
              ['fas fa-lightbulb', 'Luminothérapie', 'Traitements LED pour stimuler la production de collagène.'],
            ].map(([icon, title, text], i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md gallery-item">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${icon} text-rose-600 text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rose-800 mb-2">{title}</h3>
                    <p className="text-rose-700">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-12">Nos Clients Témoignent</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['Amina K.', '"Le Pack Éclat est tout simplement parfait ! Mon visage n\'a jamais été aussi lumineux et mes mains sont magnifiques. Je recommande vivement !"'],
              ['Claire P.', '"L\'équipe de Dream Beauty est aux petits soins. Le Hammam et le gommage m\'ont fait retrouver une peau de bébé. J\'y retournerai sans hésiter."'],
              ['Fatou N.', '"Le dermaplaning m\'a été conseillé par l\'esthéticienne et c\'était exactement ce dont ma peau avait besoin. Résultat immédiat et durable. Merci !"']
            ].map(([name, message], index) => (
              <div key={index} className="bg-rose-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-rose-600"></i>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-rose-800">{name}</h4>
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-rose-700 italic">{message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="py-16 bg-rose-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-6">Notre Philosophie</h2>
              <p className="text-rose-700 mb-4">
                Chez Dream Beauty & Spa, nous croyons que chaque personne mérite de se sentir belle et épanouie dans sa peau...
              </p>
              <p className="text-rose-700 mb-6">
                Nous utilisons exclusivement des produits bio certifiés, sans parabènes ni ingrédients nocifs...
              </p>
              <div className="flex space-x-4">
                <a href="/services" className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full font-semibold transition">
                  Découvrir nos services
                </a>
                <a href="/contact" className="border-2 border-rose-600 text-rose-600 px-10 py-2 rounded-full font-semibold hover:bg-rose-600 hover:text-white transition">
                  Nous contacter
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-rose-800 mb-4">Notre Équipe</h3>

                {[
                  ['fas fa-user-tie', 'Esthéticiennes diplômées', 'Formées aux dernières techniques internationales'],
                  ['fas fa-heart', 'Approche personnalisée', 'Des soins adaptés à vos besoins spécifiques'],
                  ['fas fa-leaf', 'Engagement éco-responsable', 'Produits naturels et respectueux de l\'environnement'],
                ].map(([icon, title, subtitle], index) => (
                  <div key={index} className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mr-4">
                      <i className={`${icon} text-rose-600 text-2xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-rose-800">{title}</h4>
                      <p className="text-rose-600 text-sm">{subtitle}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
      <PacksSection />
    </div>
  );
};

export default Home;