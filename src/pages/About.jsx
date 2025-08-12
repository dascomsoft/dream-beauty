



import React, { useEffect } from 'react';
import { FaSpa, FaGem, FaHeart, FaCrown } from 'react-icons/fa';
import { IoIosLeaf } from 'react-icons/io';
import { MdOutlineStar } from 'react-icons/md';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/237670310338?text=Bonjour%20Dream%20Beauty%20Spa%20!%20Je%20souhaite%20en%20savoir%20plus%20sur%20votre%20salon%20✨',
      '_blank'
    );
  };

  const teamMembers = [
    {
      name: "Sandra",
      role: "Esthéticienne Numéro 1",
      experience: "10 ans d'expérience",
      specialty: "Soins visage haut de gamme et massages relaxants",
      icon: <FaSpa className="text-3xl text-emerald-600" />,
    },
    {
      name: "Patricia",
      role: "Prothésiste Ongulaire",
      experience: "7 ans d'expérience",
      specialty: "Manucure, pédicure et nail art de luxe",
      icon: <FaGem className="text-3xl text-emerald-600" />,
    },
    {
      name: "Clarisse",
      role: "Coiffeuse",
      experience: "8 ans d'expérience",
      specialty: "Tresses, coiffures femmes et poses lace frontale",
      icon: <FaCrown className="text-3xl text-emerald-600" />,
    },
    {
      name: "Seraphine",
      role: "Esthéticienne Masseuse",
      experience: "9 ans d'expérience",
      specialty: "Massages relaxants et hammam & gommage corporel",
      icon: <FaSpa className="text-3xl text-emerald-600" />,
    },
    {
      name: "Christelle",
      role: "Spécialiste Extensions de Cils & Micropigmentation",
      experience: "6 ans d'expérience",
      specialty: "Extensions de cils professionnelles et microblading",
      icon: <FaGem className="text-3xl text-emerald-600" />,
    },
    {
      name: "Jerry",
      role: "Coiffeur",
      experience: "5 ans d'expérience",
      specialty: "Coiffures homme et coupe tendance",
      icon: <FaCrown className="text-3xl text-emerald-600" />,
    },
    {
      name: "Megane",
      role: "Esthéticienne Numéro 2",
      experience: "4 ans d'expérience",
      specialty: "Soin du visage et pédicure spa",
      icon: <FaSpa className="text-3xl text-emerald-600" />,
    },
  ];

  const values = [
    {
      icon: <IoIosLeaf className="text-4xl text-emerald-600" />,
      title: "Produits Naturels",
      description: "Nous utilisons des produits bio pour respecter votre peau et la planète.",
    },
    {
      icon: <FaSpa className="text-4xl text-emerald-600" />,
      title: "Expertise Professionnelle",
      description: "Une équipe formée aux techniques les plus récentes pour des soins d’exception.",
    },
    {
      icon: <FaHeart className="text-4xl text-emerald-600" />,
      title: "Personnalisation",
      description: "Des soins sur mesure adaptés à vos besoins et à votre type de peau.",
    },
    {
      icon: <FaCrown className="text-4xl text-emerald-600" />,
      title: "Cadre Luxueux",
      description: "Un espace raffiné pour une expérience de détente inoubliable.",
    },
  ];

  const testimonials = [
    {
      name: "Sophie M.",
      feedback: "Une expérience incroyable ! L’équipe est tellement professionnelle et l’ambiance est apaisante. Je recommande vivement !",
      rating: 5,
    },
    {
      name: "Aline T.",
      feedback: "Les soins sont personnalisés et les résultats sont spectaculaires. Dream Beauty & Spa est mon adresse préférée !",
      rating: 5,
    },
    {
      name: "Lucas B.",
      feedback: "Un service impeccable et un cadre magnifique. J’ai adoré ma coupe et je reviendrai sans hésiter !",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-sky-100 pt-20 font-sans">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('header-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            À Propos de Dream Beauty & Spa
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez notre histoire, notre passion et notre engagement pour sublimer votre beauté.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-600">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chez Dream Beauty & Spa, nous révélons votre beauté naturelle avec des soins personnalisés et une approche holistique du bien-être.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Depuis notre création, nous offrons une expérience unique dans un cadre élégant, où chaque détail est pensé pour votre confort.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Découvrir nos Services
              </button>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Salon Dream Beauty & Spa"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-emerald-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-600">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Les principes qui façonnent notre vision de la beauté et du bien-être.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-600">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Rencontrez nos expertes dévouées à votre beauté et votre bien-être.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex justify-center mb-4">{member.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-600">{member.name}</h3>
                <p className="text-emerald-500 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                <p className="text-sm text-gray-600 italic">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-600">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Découvrez les expériences de nos clients satisfaits qui ont choisi Dream Beauty & Spa.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MdOutlineStar key={i} className="text-2xl text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
                <h3 className="text-lg font-semibold text-emerald-600">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-600">
            Notre Philosophie
          </h2>
          <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-8 leading-relaxed">
            "La beauté véritable naît de l’harmonie entre le corps et l’esprit. Notre sanctuaire vous aide à rayonner de confiance."
          </blockquote>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-emerald-600">Pourquoi nous choisir ?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <FaSpa className="mr-2 text-emerald-600" /> Expertise
                </h4>
                <p className="text-sm text-gray-600">
                  Plus de 10 ans d’expérience dans la beauté et le bien-être.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <FaGem className="mr-2 text-emerald-600" /> Qualité
                </h4>
                <p className="text-sm text-gray-600">
                  Produits premium et techniques innovantes pour des résultats exceptionnels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <FaHeart className="mr-2 text-emerald-600" /> Service
                </h4>
                <p className="text-sm text-gray-600">
                  Un accueil chaleureux et un suivi personnalisé pour chaque client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;