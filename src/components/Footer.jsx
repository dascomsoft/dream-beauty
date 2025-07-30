import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdSpa } from 'react-icons/md';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-300 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MdSpa className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Dream Beauty & Spa</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Votre destination beauté et bien-être à Yaoundé. Nous révélons votre éclat naturel 
              grâce à nos soins professionnels et notre expertise reconnue.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/237670310388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] p-3 rounded-full hover:bg-[#20B358] transition-colors"
              >
                <FaWhatsapp className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-[#1877F2] p-3 rounded-full hover:bg-[#166FE5] transition-colors"
              >
                <FaFacebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gradient-to-r from-[#405DE6] to-[#E1306C] p-3 rounded-full hover:opacity-80 transition-opacity"
              >
                <FaInstagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Nos Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>Soins visage</li>
              <li>Manucure & Pédicure</li>
              <li>Hammam & Gommage</li>
              <li>Luminothérapie</li>
              <li>Dermaplaning</li>
              <li>Packs beauté</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>Nouvelle route Omnisports</p>
                  <p>Immeuble STV, entrée ISMTI</p>
                  <p>Yaoundé, Cameroun</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-primary" />
                <span>670 31 03 38</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-primary" />
                <span>contact@dreambeautyspa.cm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Dream Beauty & Spa. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;