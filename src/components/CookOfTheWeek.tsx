
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import TrustBadge from './TrustBadge';
import MealCard from './MealCard';
import { Star, Award } from 'lucide-react';

const CookOfTheWeek: React.FC = () => {
  const featuredMeals = [
    {
      id: 1,
      title: "Homestyle Butter Chicken",
      chef: "Priya Sharma",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80",
      prepTime: "45 mins",
      shelfLife: "8 hours",
      allergens: ["Dairy", "Nuts"],
      badges: ['verified', 'clean', 'fresh'] as const
    },
    {
      id: 2,
      title: "Garlic Naan Bread",
      chef: "Priya Sharma",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      prepTime: "20 mins",
      shelfLife: "6 hours",
      allergens: ["Gluten", "Dairy"],
      badges: ['verified', 'fresh'] as const
    },
    {
      id: 3,
      title: "Vegetable Biryani",
      chef: "Priya Sharma",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      prepTime: "60 mins",
      shelfLife: "10 hours",
      allergens: ["None"],
      badges: ['verified', 'clean', 'eco'] as const
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-600">Cook of the Week</h2>
            <p className="text-lg text-brown-500 mt-2">Meet our exceptional culinary talent</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Award className="h-6 w-6 text-yellow-500 mr-2" />
            <span className="text-lg font-medium text-brown-600">Gold Cook Recognition</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Card className="overflow-hidden h-full">
              <div className="h-64 relative">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Priya Sharma" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-yellow-100 px-3 py-1 rounded-full text-sm font-medium text-yellow-600 flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    Cook of the Week
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-brown-600">Priya Sharma</h3>
                  <div className="flex items-center bg-beige-100 px-2 py-1 rounded-md">
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <span className="ml-1 text-sm font-medium text-brown-600">4.9</span>
                  </div>
                </div>
                
                <p className="text-brown-500 mb-4">
                  Specializing in North Indian cuisine, Priya brings authentic flavors and family recipes to your table. With over 10 years of cooking experience, she prides herself on using fresh, local ingredients.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <TrustBadge type="verified" />
                  <TrustBadge type="clean" />
                  <TrustBadge type="certified" />
                  <TrustBadge type="eco" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-beige-100 p-3 rounded-lg text-center">
                    <p className="text-sm font-medium text-brown-600">Orders Completed</p>
                    <p className="text-2xl font-bold text-orange-500">527</p>
                  </div>
                  <div className="bg-beige-100 p-3 rounded-lg text-center">
                    <p className="text-sm font-medium text-brown-600">Cook Since</p>
                    <p className="text-2xl font-bold text-orange-500">2023</p>
                  </div>
                </div>
                
                <Button className="w-full btn-primary">View Full Profile</Button>
              </div>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold text-brown-600 mb-6">Featured Meals by Priya</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMeals.map(meal => (
                <MealCard 
                  key={meal.id}
                  id={meal.id}
                  title={meal.title}
                  chef={meal.chef}
                  price={meal.price}
                  image={meal.image}
                  prepTime={meal.prepTime}
                  shelfLife={meal.shelfLife}
                  allergens={meal.allergens}
                  badges={meal.badges}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookOfTheWeek;
