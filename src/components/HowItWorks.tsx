
import React from 'react';
import { ShoppingCart, ChefHat, Star } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-orange-500" />,
      title: "Browse & Order",
      description: "Choose from a variety of delicious home-cooked meals prepared by verified local cooks.",
      forBuyer: "Find dishes that match your taste preferences.",
      forSeller: "List your specialties with detailed descriptions."
    },
    {
      icon: <ChefHat className="h-10 w-10 text-orange-500" />,
      title: "Fresh Preparation",
      description: "Meals are freshly prepared following strict hygiene standards in certified kitchens.",
      forBuyer: "Know exactly when your food was cooked.",
      forSeller: "Cook meals only after receiving orders."
    },
    {
      icon: <Star className="h-10 w-10 text-orange-500" />,
      title: "Enjoy & Rate",
      description: "Savor authentic home-cooked goodness and share your experience.",
      forBuyer: "Rate your experience to help other customers.",
      forSeller: "Build your reputation with great reviews."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Our platform makes it easy to connect food lovers with talented home chefs</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-beige-100 rounded-2xl p-6 h-full">
                <div className="mb-4 bg-white p-3 rounded-full inline-block">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brown-600">{step.title}</h3>
                <p className="text-brown-500 mb-4">{step.description}</p>
                
                <div className="space-y-2">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-700 mb-1">For Customers:</p>
                    <p className="text-sm text-green-700">{step.forBuyer}</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <p className="text-sm font-medium text-orange-700 mb-1">For Cooks:</p>
                    <p className="text-sm text-orange-700">{step.forSeller}</p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-12 h-0.5 bg-beige-300 transform translate-x-3">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-orange-500 rounded-full transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
