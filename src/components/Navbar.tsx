
import React, { useState } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-display font-semibold text-brown-600">HomePlate</span>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-brown-600 hover:text-orange-500 font-medium">Home</Link>
          <Link to="/how-it-works" className="text-brown-600 hover:text-orange-500 font-medium">How It Works</Link>
          <Link to="/browse-meals" className="text-brown-600 hover:text-orange-500 font-medium">Browse Meals</Link>
          <Link to="/our-cooks" className="text-brown-600 hover:text-orange-500 font-medium">Our Cooks</Link>
          <Link to="/become-seller">
            <Button className="btn-primary">Become a Seller</Button>
          </Link>
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
            <Link to="/" className="text-brown-600 hover:text-orange-500 font-medium px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/how-it-works" className="text-brown-600 hover:text-orange-500 font-medium px-4 py-2" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link to="/browse-meals" className="text-brown-600 hover:text-orange-500 font-medium px-4 py-2" onClick={() => setIsMenuOpen(false)}>Browse Meals</Link>
            <Link to="/our-cooks" className="text-brown-600 hover:text-orange-500 font-medium px-4 py-2" onClick={() => setIsMenuOpen(false)}>Our Cooks</Link>
            <Link to="/become-seller" onClick={() => setIsMenuOpen(false)}>
              <Button className="btn-primary w-full">Become a Seller</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
