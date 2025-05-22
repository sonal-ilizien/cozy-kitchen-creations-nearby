
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MealCard from '@/components/MealCard';
import { Button } from '@/components/ui/button';
import { Search, ChefHat, Leaf, ShieldCheck } from 'lucide-react';

const BrowseMeals: React.FC = () => {
  // Mock meal data
  const meals = [
    {
      id: 1,
      title: "Homemade Butter Chicken",
      chef: "Priya Sharma",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      prepTime: "2 hours ago",
      shelfLife: "24 hours",
      allergens: ["Dairy", "Nuts"],
      badges: ["verified", "clean", "fresh"]
    },
    {
      id: 2,
      title: "Authentic Pad Thai",
      chef: "Michael Chen",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      prepTime: "1 hour ago",
      shelfLife: "12 hours",
      allergens: ["Peanuts", "Shellfish"],
      badges: ["verified", "eco"]
    },
    {
      id: 3,
      title: "Homestyle Chicken Enchiladas",
      chef: "Sophia Rodriguez",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      prepTime: "3 hours ago",
      shelfLife: "24 hours",
      allergens: ["Dairy"],
      badges: ["verified", "clean", "certified"]
    },
    {
      id: 4,
      title: "Classic Southern Gumbo",
      chef: "James Williams",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      prepTime: "4 hours ago",
      shelfLife: "48 hours",
      allergens: ["Shellfish"],
      badges: ["verified", "fresh"]
    },
    {
      id: 5,
      title: "Vegan Buddha Bowl",
      chef: "Emma Johnson",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1546069901-5ec6a79120b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      prepTime: "1 hour ago",
      shelfLife: "24 hours",
      allergens: ["Nuts"],
      badges: ["verified", "eco", "certified"]
    },
    {
      id: 6,
      title: "Traditional Biryani",
      chef: "Raj Patel",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      prepTime: "5 hours ago",
      shelfLife: "36 hours",
      allergens: ["Dairy"],
      badges: ["verified", "clean", "certified"]
    },
    {
      id: 7,
      title: "Fresh Garden Lasagna",
      chef: "Maria Rossi",
      price: 12.49,
      image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      prepTime: "3 hours ago",
      shelfLife: "48 hours",
      allergens: ["Dairy", "Gluten"],
      badges: ["verified", "eco", "fresh"]
    },
    {
      id: 8,
      title: "Homemade Dumplings",
      chef: "Liu Wei",
      price: 10.49,
      image: "https://images.unsplash.com/photo-1607626614580-3a9b048ec223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      prepTime: "2 hours ago",
      shelfLife: "24 hours",
      allergens: ["Gluten"],
      badges: ["verified", "clean"]
    }
  ];

  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);

  // Filter options
  const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free"];

  // Toggle dietary filter
  const toggleDietaryFilter = (filter: string) => {
    if (dietaryFilters.includes(filter)) {
      setDietaryFilters(dietaryFilters.filter(item => item !== filter));
    } else {
      setDietaryFilters([...dietaryFilters, filter]);
    }
  };

  // Filter meals based on search and dietary filters
  const filteredMeals = meals.filter(meal => {
    const matchesSearch = meal.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         meal.chef.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For this demo, we're not actually filtering by dietary restrictions since our mock data doesn't include that info
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-brown-600">Browse Home-Cooked Meals</h1>
          <p className="text-lg text-brown-500 mb-6 max-w-2xl">
            Discover delicious, freshly-prepared meals made with love by verified home chefs in your area.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-brown-400" />
            </div>
            <input
              type="text"
              className="bg-beige-100 border border-beige-200 text-brown-600 text-sm rounded-full w-full pl-10 p-3 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Search for dishes or chefs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section className="bg-beige-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-brown-600">100% Verified Cooks</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-brown-600">Hygiene Certified</span>
            </div>
            <div className="flex items-center">
              <Leaf className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-brown-600">Eco-Packaging</span>
            </div>
            <div className="flex items-center">
              <Search className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-brown-600">Full Ingredients List</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4 text-brown-600">Filters</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-brown-600 mb-2">Dietary Preferences</h4>
                  <div className="space-y-2">
                    {dietaryOptions.map(option => (
                      <label key={option} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={dietaryFilters.includes(option)}
                          onChange={() => toggleDietaryFilter(option)}
                          className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 mr-2"
                        />
                        <span className="text-brown-500">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-brown-600 mb-2">Price Range</h4>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-brown-500">$0</span>
                    <span className="text-sm text-brown-500">$50</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-brown-600 mb-2">Distance</h4>
                  <select className="bg-beige-100 border border-beige-200 text-brown-600 text-sm rounded-lg w-full p-2.5">
                    <option value="5">Within 5 miles</option>
                    <option value="10">Within 10 miles</option>
                    <option value="15">Within 15 miles</option>
                    <option value="20">Within 20 miles</option>
                  </select>
                </div>
                
                <Button className="w-full bg-orange-100 text-orange-500 hover:bg-orange-200 border border-orange-200">
                  Clear All Filters
                </Button>
              </div>
            </div>
            
            {/* Meal Cards */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-brown-600">{filteredMeals.length} meals found</p>
                <select className="bg-white border border-beige-200 text-brown-600 text-sm rounded-lg p-2">
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMeals.map(meal => (
                  <MealCard key={meal.id} {...meal} />
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-10">
                <Button className="btn-secondary">
                  Load More Meals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BrowseMeals;
