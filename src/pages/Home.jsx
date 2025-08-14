



import HeroSlider from '../components/HeroSlider';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packsData = [
    {
      title: "Pack 1",
      price: "15,000 F",
      color: "from-pink-500 to-pink-400",
      textColor: "text-pink-500",
      features: [
        "Pose vernis gel main",
        "Pédicure chaude",
        "Manicure",
        "Hammam 1",
        "Soin au savon noir",
        "Hammam 2",
        "Gommage éclaircissant",
        "Soin de visage complet",
        "Luminotherapie",
        "Dermaplaning",
      ],
      link: "https://wa.me/237670310338?text=Bonjour%20!%20Je%20veux%20le%20Pack%201%20à%2015000%20F%20chez%20Dream%20Beauty%20&%20Spa%20💆‍♀️",
    },
    {
      title: "Pack 2",
      price: "10,000 F",
      color: "from-amber-500 to-amber-400",
      textColor: "text-amber-500",
      features: [
        "Hammam 1",
        "Soin au savon noir",
        "Gommage éclaircissant",
        "Hammam 2",
        "Luminothérapie",
        "Soin de visage complet",
        "Dermaplaning",
        "Pédicure",
      ],
      link: "https://wa.me/237670310338?text=Bonjour%20!%20Je%20veux%20le%20Pack%202%20à%2010000%20F%20chez%20Dream%20Beauty%20&%20Spa%20💆‍♀️",
    },
    {
      title: "Pack 3",
      price: "8,500 F",
      color: "from-purple-500 to-purple-400",
      textColor: "text-purple-500",
      features: [
        "Hammam 1",
        "Soin au Savon noir",
        "Hamman 2",
        "Gommage éclaircissant",
        "Soin de visage complet",
        "Dermaplaning",
        "Luminothérapie",
      ],
      link: "https://wa.me/237670310338?text=Bonjour%20!%20Je%20veux%20le%20Pack%203%20à%208500%20F%20chez%20Dream%20Beauty%20&%20Spa%20💆‍♀️",
    },
    {
      title: "Pack 4",
      price: "5,000 F",
      color: "from-blue-500 to-blue-400",
      textColor: "text-blue-500",
      features: ["Hammam 1", "Soin au Savon noir", "Gommage éclaircissant", "Hamman 2", "Soin de visage complet"],
      link: "https://wa.me/237670310338?text=Bonjour%20!%20Je%20veux%20le%20Pack%204%20à%205000%20F%20chez%20Dream%20Beauty%20&%20Spa%20💆‍♀️",
    },
    {
      title: "Pack 5",
      price: "5,000 F",
      color: "from-teal-500 to-teal-400",
      textColor: "text-teal-500",
      features: [
        "Soin visage complet",
        "Dermaplaning",
        "Pédicure",
        "Modelage pieds",
        "Vernis gel pieds",
      ],
      link: "https://wa.me/237670310338?text=Bonjour%20!%20Je%20veux%20le%20Pack%205%20à%205000%20F%20chez%20Dream%20Beauty%20&%20Spa%20💆‍♀️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
              Bienvenue chez Dream Beauty & Spa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez un havre de paix où votre beauté naturelle est sublimée par nos soins d'exception.
              Notre équipe de professionnels vous accueille dans un cadre luxueux et apaisant pour une
              expérience unique de bien-être et de beauté.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "✨",
                title: "Excellence",
                description: "Des soins de qualité premium avec les meilleures techniques de beauté"
              },
              {
                icon: "💆‍♀️",
                title: "Détente",
                description: "Un environnement serein conçu pour votre relaxation totale"
              },
              {
                icon: "👑",
                title: "Personnalisé",
                description: "Chaque soin est adapté à vos besoins spécifiques"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-rose-800">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rose-800 mb-4">
              Pourquoi choisir Dream Beauty & Spa ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-certificate",
                title: "Professionnalisme",
                description: "Une équipe d'experts formés aux dernières techniques de beauté et bien-être"
              },
              {
                icon: "fas fa-heart",
                title: "Produits naturels",
                description: "Nous utilisons exclusivement des produits bio et adaptés à chaque type de peau"
              },
              {
                icon: "fas fa-spa",
                title: "Ambiance zen",
                description: "Un cadre luxueux conçu pour votre détente et votre confort absolu"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-rose-50 hover:border-pink-100 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-rose-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-center text-rose-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rose-800 mb-4">
              Nos Services Exclusifs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ['fas fa-hand-sparkles', 'Onglerie', 'Manucure, vernis gel, nail art haut de gamme pour des ongles sublimes.'],
              ['fas fa-eye', 'Extension des Cils', 'Volume russe, cil à cil , classique ou hybride pour un regard irrésistible.'],
              ['fas fa-spa', 'Hammam & Gommage Corporel', 'Détente et purification complète avec hammam traditionnel et gommage au savon noir.'],
              ['fas fa-leaf', 'Soin de Visage', 'Nettoyage profond, hydratation et traitements éclat pour votre peau.'],
              ['fas fa-shoe-prints', 'Pédicure', 'Soin complet des pieds, hydratation et vernis longue tenue.'],
              ['fas fa-pen', 'Microblanding', 'Restructuration des sourcils pour un effet naturel et élégant.'],
              ['fas fa-paint-brush', 'Manicure', 'Pose vernis, french manucure et soins réparateurs haut de gamme.'],
            ].map(([icon, title, text], i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg flex items-center justify-center mr-5 group-hover:rotate-6 transition-transform duration-300">
                    <i className={`${icon} text-rose-600 text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rose-800 mb-2">{title}</h3>
                    <p className="text-gray-600">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rose-800 mb-4">Nos Clients Témoignent</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ['Amina K.', '"Le Pack Éclat est tout simplement parfait ! Mon visage n\'a jamais été aussi lumineux et mes mains sont magnifiques. Je recommande vivement !"'],
              ['Claire P.', '"L\'équipe de Dream Beauty est aux petits soins. Le Hammam et le gommage m\'ont fait retrouver une peau de bébé. J\'y retournerai sans hésiter."'],
              ['Fatou N.', '"Le dermaplaning m\'a été conseillé par l\'esthéticienne et c\'était exactement ce dont ma peau avait besoin. Résultat immédiat et durable. Merci !"']
            ].map(([name, message], index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-rose-50 hover:border-pink-100 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-rose-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-rose-800">{name}</h4>
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-4xl font-bold text-rose-800 mb-6">Notre Philosophie</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Chez Dream Beauty & Spa, nous croyons que chaque personne mérite de se sentir belle et épanouie dans sa peau...
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Nous utilisons exclusivement des produits bio certifiés, sans parabènes ni ingrédients nocifs...
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="/services"
                    className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Nos services
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Nous joindre
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-3xl font-bold text-rose-800 mb-8 text-center">Notre Équipe</h3>

                {[
                  ['fas fa-user-tie', 'Esthéticiennes diplômées', 'Formées aux dernières techniques internationales'],
                  ['fas fa-heart', 'Approche personnalisée', 'Des soins adaptés à vos besoins spécifiques'],
                  ['fas fa-leaf', 'Engagement éco-responsable', 'Produits naturels et respectueux de l\'environnement'],
                ].map(([icon, title, subtitle], index) => (
                  <div key={index} className="flex items-center mb-6 p-4 hover:bg-rose-50 rounded-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mr-6">
                      <i className={`${icon} text-rose-600 text-2xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-rose-800">{title}</h4>
                      <p className="text-gray-600">{subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section id="packs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rose-800 mb-4">
              Nos Packs Beauté
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packsData.map((pack, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${pack.color} p-8 text-center text-white`}
                >
                  <h3 className="text-2xl font-bold">{pack.title}</h3>
                  <p className="text-2xl mt-2 font-medium">{pack.price}</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <i className={`fas fa-check ${pack.textColor} mr-3 mt-1`}></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={pack.link}
                    className={`block mt-6 ${pack.textColor.replace(
                      "text-",
                      "bg-"
                    )} hover:${pack.textColor.replace(
                      "text-",
                      "bg-"
                    )}-600 text-white text-center py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    <i className="fab fa-whatsapp mr-2"></i> Réserver ce pack
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Prêt(e) pour votre transformation beauté ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Réservez dès maintenant votre soin et découvrez l'expérience Dream Beauty & Spa
          </p>
          <a
            href="https://wa.me/237670310338"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Consultation Gratuite
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;