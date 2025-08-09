import { FiPhone, FiMapPin, FiClock, FiMail, FiInstagram, FiFacebook } from 'react-icons/fi';
import WhatsAppButton from '../components/WhatsAppButton';
import React from 'react';
import { useEffect } from 'react';

const Contact = () => {
      useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/237670310338?text=Bonjour%20Dream%20Beauty%20Spa%20!%20Je%20souhaite%20réserver%20un%20soin%20✨', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    const whatsappMessage = `Bonjour Dream Beauty Spa ! 
    
Nom: ${name}
Téléphone: ${phone}
Message: ${message}

Merci ! ✨`;
    
    window.open(`https://wa.me/237670310338?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: "Téléphone",
      value: "670 31 03 38",
      action: () => window.open('tel:+237670310388')
    },
    {
      icon: FiMapPin,
      title: "Adresse",
      value: "Nouvelle route Omnisports, immeuble STV, entrée ISMTI, Yaoundé",
      action: () => window.open('https://maps.google.com/?q=Nouvelle+route+Omnisports+Yaoundé')
    },
    {
      icon: FiClock,
      title: "Horaires",
      value: "Lun-Sam: 8h30min-20h, Dim: 10h00-19h",
      action: null
    },
    {
      icon: FiMail,
      title: "Email",
      value: "contact@dreambeautyspa.cm",
      action: () => window.open('mailto:contact@dreambeautyspa.cm')
    }
  ];

  const socialLinks = [
    {
      icon: FiInstagram,
      name: "Instagram",
      url: "https://instagram.com/dreambeautyspa",
      color: "text-pink-600"
    },
    {
      icon: FiFacebook,
      name: "Facebook",
      url: "https://facebook.com/dreambeautyspa",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Prenez rendez-vous et laissez-nous prendre soin de votre beauté
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center p-6 ${
                  info.action ? 'cursor-pointer hover:scale-105' : ''
                }`}
                onClick={info.action || undefined}
              >
                <div className="pb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg text-purple-600">{info.title}</h3>
                </div>
                <div className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl">
              <div className="p-6">
                <h2 className="text-2xl text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  Réservez votre soin
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Remplissez le formulaire et nous vous contacterons rapidement
                </p>
              
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Numéro de téléphone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="6XX XX XX XX"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service souhaité
                    </label>
                    <select 
                      id="service"
                      name="service"
                      className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Choisissez un service</option>
                      <option value="Pack 1 - 15000F">Pack 1 - 15 000 F</option>
                      <option value="Pack 2 - 10000F">Pack 2 - 10 000 F</option>
                      <option value="Pack 3 - 8500F">Pack 3 - 8 500 F</option>
                      <option value="Pack 4 - 5000F">Pack 4 - 5 000 F</option>
                      <option value="Pack 5 - 5000F">Pack 5 - 5 000 F</option>
                      <option value="Consultation">Consultation personnalisée</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez vos besoins ou posez vos questions..."
                      className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-lg py-4 text-white rounded-md font-medium"
                  >
                    Envoyer via WhatsApp
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Quick Contact */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-lg shadow-xl">
                <div className="p-6">
                  <h3 className="text-xl text-center text-purple-600 mb-4">
                    Notre Localisation
                  </h3>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <FiMapPin className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                      <p className="text-gray-600">
                        Nouvelle route Omnisports<br />
                        Immeuble STV, entrée ISMTI<br />
                        Yaoundé, Cameroun
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open('https://maps.google.com/?q=Nouvelle+route+Omnisports+Yaoundé')}
                    className="w-full p-3 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
                  >
                    Voir sur Google Maps
                  </button>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-lg shadow-xl">
                <div className="p-6">
                  <h3 className="text-xl text-center text-purple-600 mb-4">
                    Contact Rapide
                  </h3>
                  <div className="space-y-4">
                    <button 
                      onClick={handleWhatsApp}
                      className="w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded-md flex items-center justify-center"
                    >
                      <FiPhone className="mr-2 h-4 w-4" />
                      WhatsApp: 670 31 03 38
                    </button>
                    
                    <button 
                      onClick={() => window.open('tel:+237670310388')}
                      className="w-full p-3 border border-gray-300 hover:bg-gray-50 rounded-md flex items-center justify-center"
                    >
                      <FiPhone className="mr-2 h-4 w-4" />
                      Appeler directement
                    </button>
                    
                    <div className="flex justify-center space-x-4 pt-4">
                      {socialLinks.map((social, index) => (
                        <button
                          key={index}
                          onClick={() => window.open(social.url, '_blank')}
                          className={`p-2 rounded-full hover:bg-gray-100 ${social.color}`}
                        >
                          <social.icon className="h-5 w-5" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Questions Fréquentes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-lg text-purple-600 mb-2">Comment réserver ?</h3>
                <p className="text-gray-600">
                  Vous pouvez réserver via WhatsApp au 670 31 03 38 ou utiliser notre formulaire de contact.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-lg text-purple-600 mb-2">Quels moyens de paiement ?</h3>
                <p className="text-gray-600">
                  Nous acceptons les espèces, Mobile Money et virements bancaires.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-lg text-purple-600 mb-2">Peut-on annuler un RDV ?</h3>
                <p className="text-gray-600">
                  Oui, vous pouvez annuler jusqu'à 24h avant votre rendez-vous.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-lg text-purple-600 mb-2">Produits utilisés ?</h3>
                <p className="text-gray-600">
                  Nous utilisons des produits professionnels de qualité premium et bio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;