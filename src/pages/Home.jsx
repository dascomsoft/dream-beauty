import HeroSlider from '../components/HeroSlider';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';



const Home = () => {

  useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
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
        "Hamman 2" ,
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
      features: ["Hammam 1", "Soin au Savon noir",  "Gommage éclaircissant", "Hamman 2" , "Soin de visage complet"],
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
    <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-12">
      Nos Services Exclusifs
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        ['fas fa-hand-sparkles', 'Onglerie', 'Manucure, vernis gel, nail art haut de gamme pour des ongles sublimes.'],
        ['fas fa-eye', 'Extension des Cils', 'Volume russe, cil à cil ou mixte pour un regard irrésistible.'],
        ['fas fa-spa', 'Hammam & Gommage Corporel', 'Détente et purification complète avec hammam traditionnel et gommage au savon noir.'],
        ['fas fa-leaf', 'Soin de Visage', 'Nettoyage profond, hydratation et traitements éclat pour votre peau.'],
        ['fas fa-shoe-prints', 'Pédicure', 'Soin complet des pieds, hydratation et vernis longue tenue.'],
        ['fas fa-pen', 'Microblending', 'Restructuration des sourcils pour un effet naturel et élégant.'],
        ['fas fa-paint-brush', 'Manicure', 'Pose vernis, french manucure et soins réparateurs haut de gamme.'],
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
                <a href="/services" className="bg-rose-600 hover:bg-rose-700 text-white px-7 py-2 rounded-full font-semibold transition">
                  Nos services
                </a>
                <a href="/contact" className="border-2 border-rose-600 text-rose-600 px-7 py-2 rounded-full font-semibold hover:bg-rose-600 hover:text-white transition">
                  Nous joindre
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
      <section id="packs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-16">
            Nos Packs Beauté
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packsData.map((pack, index) => (
              <div
                key={index}
                className="pack-card bg-white rounded-xl shadow-lg overflow-hidden transition"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${pack.color} p-6 text-center text-white`}
                >
                  <h3 className="text-2xl font-bold">{pack.title}</h3>
                  <p className="text-xl mt-2">{pack.price}</p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <i className={`fas fa-check ${pack.textColor} mr-2`}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a
                    href={pack.link}
                    className={`block mt-6 ${pack.textColor.replace(
                      "text-",
                      "bg-"
                    )} hover:${pack.textColor.replace(
                      "text-",
                      "bg-"
                    )}-600 text-white text-center py-3 px-6 rounded-lg transition`}
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

export default Home;