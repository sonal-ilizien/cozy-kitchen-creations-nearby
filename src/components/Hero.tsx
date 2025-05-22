
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-beige-100 to-beige-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-100">
                <ShieldCheck className="h-4 w-4 mr-1" /> Quality Assured
              </Badge>
              <Badge className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-100">
                <Star className="h-4 w-4 mr-1" /> Verified Cooks
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brown-600 leading-tight">
              Fresh, Safe & Home-Cooked Meals Near You
            </h1>
            
            <p className="text-lg text-brown-500 max-w-lg">
              Connect with verified local chefs offering authentic home-cooked meals with the highest standards of safety and quality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">Browse Meals</Button>
              <Button className="btn-secondary">Become a Seller</Button>
            </div>
            
            <div className="flex items-center gap-4 mt-8 text-sm text-brown-500">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-green-500 mr-1" />
                <span>100% Verified Cooks</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-green-500 mr-1" />
                <span>Hygiene Certified</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Home cooked meal" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-brown-600">Prepared by Priya S.</p>
                    <p className="text-sm text-brown-500">Certified Cook | Cooked: Today 1:30 PM</p>
                  </div>
                  <Badge className="bg-green-500 text-white">Best Before: 6:30 PM</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
