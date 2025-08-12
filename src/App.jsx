
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Astuces from "./pages/Astuces";

import Contact from "./pages/Contact";
import GalerieCategories from "./pages/GalerieCategories";

import React from "react";


const App = () => (
  
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/galerie-categories" element={<GalerieCategories />} />
            <Route path="/about" element={<About />} />
             <Route path="/astuces" element={<Astuces />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
 
);

export default App;
