
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TrustBadge from '@/components/TrustBadge';
import { Star, Check, Search, ChefHat } from 'lucide-react';

interface Cook {
  id: number;
  name: string;
  image: string;
  rating: number;
  speciality: string;
  badge: 'gold' | 'silver' | 'bronze';
  verifiedSince: string;
  location: string;
  bio: string;
  badges: Array<'verified' | 'clean' | 'eco' | 'fresh' | 'certified'>;
  topDishes: Array<{
    name: string;
    price: number;
    image: string;
  }>;
}

const OurCooks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState<string>('');
  
  const cuisineTypes = [
    "All Cuisines", 
    "Indian", 
    "Chinese", 
    "Mexican", 
    "Soul Food", 
    "Italian", 
    "Mediterranean", 
    "Japanese", 
    "Thai"
  ];

  // Mock cooks data
  const cooks: Cook[] = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      speciality: "North Indian Cuisine",
      badge: "gold",
      verifiedSince: "Apr 2023",
      location: "Seattle, WA",
      bio: "I specialize in authentic North Indian dishes passed down through generations in my family. Every meal is prepared with fresh ingredients and traditional spices imported from India.",
      badges: ['verified', 'clean', 'certified'],
      topDishes: [
        { name: "Butter Chicken", price: 12.99, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { name: "Vegetable Biryani", price: 10.99, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      speciality: "Chinese Homestyle",
      badge: "silver",
      verifiedSince: "Jun 2023",
      location: "Portland, OR",
      bio: "Growing up in a traditional Chinese household, I learned to cook from my grandmother. My dishes feature authentic flavors from various regions of China, made with locally sourced ingredients.",
      badges: ['verified', 'clean', 'eco'],
      topDishes: [
        { name: "Homemade Dumplings", price: 9.99, image: "https://images.unsplash.com/photo-1607626614580-3a9b048ec223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { name: "Kung Pao Chicken", price: 11.99, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      speciality: "Mexican Authentic",
      badge: "gold",
      verifiedSince: "Mar 2023",
      location: "Austin, TX",
      bio: "My passion is sharing the authentic flavors of my Mexican heritage. Every dish is made from scratch using family recipes that have been perfected over generations.",
      badges: ['verified', 'clean', 'fresh'],
      topDishes: [
        { name: "Homestyle Enchiladas", price: 11.99, image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { name: "Street Tacos", price: 9.99, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      id: 4,
      name: "James Williams",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      speciality: "Soul Food",
      badge: "bronze",
      verifiedSince: "Aug 2023",
      location: "New Orleans, LA",
      bio: "Born and raised in the South, I cook hearty, soulful dishes that comfort the heart. My recipes have been passed down through generations of my family.",
      badges: ['verified', 'clean'],
      topDishes: [
        { name: "Southern Gumbo", price: 13.99, image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { name: "Creole Jambalaya", price: 12.99, image: "https://images.unsplash.com/photo-1568574728383-011f8cd17e70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      id: 5,
      name: "Emma Johnson",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      speciality: "Mediterranean",
      badge: "gold",
      verifiedSince: "Feb 2023",
      location: "San Francisco, CA",
      bio: "My Mediterranean dishes combine fresh California produce with traditional recipes from Greece, Italy, and Morocco. I focus on healthy, flavorful meals using olive oil, fresh herbs, and lean proteins.",
      badges: ['verified', 'eco', 'fresh'],
      topDishes: [
        { name: "Greek Salad & Pita", price: 9.99, image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { name: "Moroccan Tagine", price: 13.99, image: "https://images.unsplash.com/photo-1611683795210-ba8f0a784e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      id: 6,
      name: "Maria Rossi",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      speciality: "Italian",
      badge: "silver",
      verifiedSince: "May 2023",
      location: "Chicago, IL",
      bio: "As a third-generation Italian-American, I create dishes that blend old-world tradition with modern techniques. My pasta is made fresh daily, and I source ingredients from local farms.",
      badges: ['verified', 'clean', 'certified'],
      topDishes: [
        { name: "Fresh Garden Lasagna", price: 12.49, image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" },
        { name: "Risotto al Funghi", price: 11.99, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" }
      ]
    }
  ];
  
  const getBadgeColor = (badge: 'gold' | 'silver' | 'bronze') => {
    switch (badge) {
      case 'gold':
        return 'bg-yellow-100 text-yellow-600';
      case 'silver':
        return 'bg-slate-100 text-slate-600';
      case 'bronze':
        return 'bg-amber-100 text-amber-600';
    }
  };
  
  // Filter cooks based on search and cuisine filter
  const filteredCooks = cooks.filter(cook => {
    const matchesSearch = cook.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cook.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cook.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCuisine = !cuisineFilter || cuisineFilter === "All Cuisines" || 
                           cook.speciality.toLowerCase().includes(cuisineFilter.toLowerCase());
    
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-brown-600">Our Verified Home Chefs</h1>
          <p className="text-lg text-brown-500 mb-6 max-w-2xl">
            Meet the talented culinary creators behind your favorite home-cooked meals. 
            Each chef is thoroughly vetted and certified for food safety.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-brown-400" />
              </div>
              <input
                type="text"
                className="bg-beige-100 border border-beige-200 text-brown-600 text-sm rounded-full w-full pl-10 p-3 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Search by name, cuisine or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto">
              <select 
                className="bg-beige-100 border border-beige-200 text-brown-600 text-sm rounded-full w-full md:w-auto px-4 py-3 focus:ring-orange-500 focus:border-orange-500"
                value={cuisineFilter}
                onChange={(e) => setCuisineFilter(e.target.value)}
              >
                {cuisineTypes.map(cuisine => (
                  <option key={cuisine} value={cuisine}>{cuisine}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Banner */}
      <section className="bg-beige-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 items-center">
            <div className="flex items-center">
              <ChefHat className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-brown-600 font-medium">100% Verified Cooks</span>
            </div>
            <div className="flex items-center">
              <Check className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-brown-600 font-medium">Background Checked</span>
            </div>
            <div className="flex items-center">
              <Check className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-brown-600 font-medium">Food Safety Certified</span>
            </div>
            <div className="flex items-center">
              <Check className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-brown-600 font-medium">Kitchen Inspections</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cooks Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCooks.map(cook => (
              <Card key={cook.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                <div className="p-6">
                  <div className="flex items-start mb-6">
                    <div className="mr-4">
                      <div className="relative">
                        <img 
                          src={cook.image} 
                          alt={cook.name} 
                          className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        <Badge className={`absolute bottom-0 right-0 ${getBadgeColor(cook.badge)}`}>
                          {cook.badge.charAt(0).toUpperCase() + cook.badge.slice(1)} Chef
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-xl text-brown-600">{cook.name}</h3>
                        <div className="flex items-center bg-beige-100 px-2 py-1 rounded-md">
                          <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                          <span className="ml-1 text-sm font-medium text-brown-600">{cook.rating}</span>
                        </div>
                      </div>
                      <p className="text-brown-500 font-medium">{cook.speciality}</p>
                      <p className="text-brown-400 text-sm">{cook.location}</p>
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {cook.badges.map((badge, index) => (
                          <TrustBadge key={index} type={badge} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-brown-500 text-sm mb-6 line-clamp-3">
                    {cook.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-brown-600 mb-3">Popular Dishes:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {cook.topDishes.map((dish, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden group">
                          <img 
                            src={dish.image} 
                            alt={dish.name} 
                            className="w-full h-24 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-2">
                            <p className="text-white text-sm font-medium">{dish.name}</p>
                            <p className="text-white text-xs opacity-90">${dish.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full btn-primary">View Profile</Button>
                    <p className="text-xs text-center text-brown-400 mt-2">
                      Verified chef since {cook.verifiedSince}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredCooks.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-brown-600 mb-2">No cooks found</h3>
              <p className="text-brown-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
          
          {filteredCooks.length > 0 && filteredCooks.length < cooks.length && (
            <div className="text-center mt-8">
              <p className="text-brown-500 mb-4">Showing {filteredCooks.length} of {cooks.length} verified cooks</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Join as Chef CTA */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Share Your Culinary Talents</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Join our community of passionate home chefs and turn your love for cooking into a rewarding business.</p>
          <Button className="bg-white text-orange-500 hover:bg-beige-100 font-semibold text-lg py-5 px-8 rounded-full">Become a HomePlate Chef</Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurCooks;
