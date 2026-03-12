import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Products from './components/Products';
import ExportServices from './components/ExportServices';
import WhyChooseUs from './components/WhyChooseUs';
import Packaging from './components/Packaging';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <About />
      <Products />
      <ExportServices />
      <WhyChooseUs />
      <Packaging />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}