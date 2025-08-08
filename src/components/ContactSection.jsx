import { FiMapPin, FiPhone, FiClock, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';
import React from 'react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Adresse",
      details: ["Nouvelle route Omnisports", "Immeuble STV, entrée ISMTI", "Yaoundé, Cameroun"]
    },
    {
      icon: FiPhone,
      title: "Téléphone",
      details: ["670 31 03 38"]
    },
    {
      icon: FiClock,
      title: "Horaires",
      details: ["Lundi - Samedi: 8h30min - 20h", "Dimanche: 10h - 19h"]
    }
  ];

  const quickActions = [
    {
      title: "Réservation générale",
      message: "Bonjour ! Je souhaite réserver un soin chez Dream Beauty & Spa ✨",
      icon: "📅"
    },
    {
      title: "Soin visage complet",
      message: "Bonjour, je souhaite réserver un soin complet visage ✨",
      icon: "✨"
    },
    {
      title: "Manucure & Pédicure",
      message: "Bonjour Dream Beauty Spa ! Je veux réserver une manucure et pédicure 💅",
      icon: "💅"
    },
    {
      title: "Information sur les tarifs",
      message: "Bonjour ! Pouvez-vous me donner plus d'informations sur vos tarifs ? 💆‍♀️",
      icon: "💰"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prenez rendez-vous dès maintenant pour vivre une expérience beauté exceptionnelle. 
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in p-6"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-0">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <FiMapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Carte Google Maps</p>
                    <p className="text-sm text-muted-foreground">
                      Nouvelle route Omnisports, Yaoundé
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Actions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Rapide WhatsApp
              </h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in p-6"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{action.icon}</span>
                        <span className="font-semibold text-foreground">{action.title}</span>
                      </div>
                      <WhatsAppButton 
                        message={action.message}
                        className="text-sm px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors flex items-center gap-2"
                      >
                        <FaWhatsapp className="h-4 w-4" />
                      </WhatsAppButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main WhatsApp Contact */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md">
              <div className="p-8 text-center">
                <FaWhatsapp className="h-16 w-16 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-4">
                  Réservation Immédiate
                </h4>
                <p className="mb-6 text-white/90">
                  Contactez-nous directement sur WhatsApp pour une réponse rapide 
                  et personnalisée à vos besoins.
                </p>
                <WhatsAppButton 
                  message="Bonjour Dream Beauty & Spa ! Je souhaite prendre rendez-vous ✨"
                  className="bg-white text-[#25D366] hover:bg-white/90 font-semibold px-8 py-3 rounded-md transition-colors"
                >
                  Nous contacter maintenant
                </WhatsAppButton>
              </div>
            </div>

            {/* Hashtags */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                <span className="bg-gray-100 px-3 py-1 rounded-full">#rendezvousbeaute</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">#promobeauté</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">#visageéclat</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">#yaoundéspa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;