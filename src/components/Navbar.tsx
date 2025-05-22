
import React, { useState } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <ChefHat className="h-8 w-8 text-orange-500" />
          <span className="ml-2 text-xl font-display font-semibold text-brown-600">HomePlate</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-brown-600 hover:text-orange-500 font-medium">Home</a>
          <a href="#" className="text-brown-600 hover:text-orange-500 font-medium">How It Works</a>
          <a href="#" className="text-brown-600 hover:text-orange-500 font-medium">Browse Meals</a>
          <a href="#" className="text-brown-600 hover:text-orange-500 font-medium">Our Cooks</a>
          <Button className="btn-primary">Get Started</Button>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? 
              <X className="h-6 w-6 text-brown-600" /> : 
              <Menu className="h-6 w-6 text-brown-600" />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-50 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="text-brown-600 hover:text-orange-500 font-medium px-4 py-2">Home</a>
            <a href="#" className="text-brown-600 hover:text-orange-500 font-medium px-4 py-2">How It Works</a>
            <a href="#" className="text-brown-600 hover:text-orange-500 font-medium px-4 py-2">Browse Meals</a>
            <a href="#" className="text-brown-600 hover:text-orange-500 font-medium px-4 py-2">Our Cooks</a>
            <Button className="btn-primary w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
