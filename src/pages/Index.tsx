
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeaturedCooks from '@/components/FeaturedCooks';
import QualityAssurance from '@/components/QualityAssurance';
import Testimonials from '@/components/Testimonials';
import CookOfTheWeek from '@/components/CookOfTheWeek';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedCooks />
      <QualityAssurance />
      <Testimonials />
      <CookOfTheWeek />
      <Footer />
    </div>
  );
};

export default Index;
