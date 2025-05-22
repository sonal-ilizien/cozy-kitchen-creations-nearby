
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TrustBadge from './TrustBadge';
import { Star, Check } from 'lucide-react';

const CookOfTheWeek: React.FC = () => {
  const cookOfTheWeek = {
    name: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    speciality: "Authentic Mexican",
    verifiedSince: "Jan 2023",
    location: "Denver, CO",
    story: "Growing up in a small town in Oaxaca, I learned to cook from my grandmother who taught me the secret family recipes passed down through generations. After moving to the United States, I missed the authentic flavors of home and started cooking for friends and neighbors who encouraged me to share my food more widely.",
    badges: ['verified', 'clean', 'fresh'] as Array<'verified' | 'clean' | 'eco' | 'fresh' | 'certified'>,
    featuredDishes: [
      {
        name: "Mole Poblano",
        image: "https://images.unsplash.com/photo-1599456870450-6b85b243c1ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        description: "A rich, complex sauce with over 20 ingredients including chocolate and multiple chili varieties, served over tender chicken.",
        price: 14.99
      },
      {
        name: "Chiles en Nogada",
        image: "https://images.unsplash.com/photo-1678187912138-c43a5d9c0484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        description: "Poblano chiles filled with a mixture of ground meat, fruits, and spices, topped with a walnut-based cream sauce and pomegranate seeds.",
        price: 16.99
      },
      {
        name: "Homemade Tamales",
        image: "https://images.unsplash.com/photo-1617918160302-f2dfbcb3f0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        description: "Traditional corn masa dough filled with your choice of chicken in red sauce, pork in green sauce, or cheese with roasted peppers.",
        price: 12.99
      }
    ],
    testimonial: {
      customer: "Sarah Johnson",
      text: "Maria's cooking transported me straight to Mexico! Her mole sauce is the best I've ever tasted, and the tamales are authentic and delicious. Every bite feels made with love and tradition.",
      date: "Last week"
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Cook of the Week</h2>
        <p className="section-subtitle">Meet the talented chef behind some of our most loved dishes</p>
        
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Chef Profile */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden h-full">
              <div className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <img 
                      src={cookOfTheWeek.image} 
                      alt={cookOfTheWeek.name} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-orange-100"
                    />
                    <Badge className="absolute bottom-2 right-2 bg-yellow-100 text-yellow-600">
                      Featured Chef
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-brown-600">{cookOfTheWeek.name}</h3>
                  <p className="text-brown-500">{cookOfTheWeek.speciality}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <span className="ml-1 text-brown-600 font-medium">{cookOfTheWeek.rating}</span>
                  </div>
                </div>
                
                <div className="flex justify-center flex-wrap gap-2 mb-6">
                  {cookOfTheWeek.badges.map((badge, index) => (
                    <TrustBadge key={index} type={badge} />
                  ))}
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-brown-500 text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Verified since {cookOfTheWeek.verifiedSince}</span>
                  </div>
                  <div className="flex items-center text-brown-500 text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Based in {cookOfTheWeek.location}</span>
                  </div>
                  <div className="flex items-center text-brown-500 text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Kitchen safety certified</span>
                  </div>
                </div>
                
                <Button className="w-full btn-primary">View Full Profile</Button>
              </div>
            </Card>
          </div>
          
          {/* Chef Story & Featured Dishes */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden h-full">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-brown-600">Maria's Cooking Story</h3>
                <p className="text-brown-500 mb-6">{cookOfTheWeek.story}</p>
                
                <h4 className="text-lg font-semibold mb-4 text-brown-600">Featured Dishes</h4>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {cookOfTheWeek.featuredDishes.slice(0, 2).map((dish, index) => (
                    <Card key={index} className="overflow-hidden">
                      <img 
                        src={dish.image} 
                        alt={dish.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-brown-600">{dish.name}</h5>
                          <span className="text-orange-500 font-medium">${dish.price}</span>
                        </div>
                        <p className="text-sm text-brown-500 line-clamp-2">{dish.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
                
                {/* Customer Testimonial */}
                <div className="bg-beige-100 rounded-xl p-5">
                  <h4 className="text-lg font-semibold mb-3 text-brown-600">What Customers Say</h4>
                  <p className="text-brown-500 italic mb-3">"{cookOfTheWeek.testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="text-brown-600 font-medium">{cookOfTheWeek.testimonial.customer}</p>
                    <p className="text-sm text-brown-400">{cookOfTheWeek.testimonial.date}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookOfTheWeek;
