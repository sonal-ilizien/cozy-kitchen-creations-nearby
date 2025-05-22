
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ChefHat, Star, ShieldCheck, Clock, Leaf, Info, Check } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const customerSteps = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-orange-500" />,
      title: "Browse & Order",
      description: "Explore a variety of home-cooked meals in your area. Choose dishes that match your taste and dietary preferences.",
      details: [
        "Filter by cuisine type, dietary restrictions, or cook ratings",
        "Read detailed descriptions and ingredient lists",
        "Place your order directly through the platform",
        "Schedule your preferred pickup or delivery time"
      ]
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "Fresh Preparation",
      description: "Your meal is freshly prepared by your chosen home chef following the highest hygiene standards.",
      details: [
        "Meals are prepared just for you, not pre-made",
        "Track when your food begins preparation",
        "All cooks follow certified food safety protocols",
        "Receive updates on your order status"
      ]
    },
    {
      icon: <Star className="h-10 w-10 text-orange-500" />,
      title: "Enjoy & Rate",
      description: "Pick up your meal or have it delivered. Savor authentic home cooking and share your experience.",
      details: [
        "Contactless pickup or delivery options",
        "Meals packaged in eco-friendly containers",
        "Rate your experience and leave feedback",
        "Save your favorite dishes and cooks for future orders"
      ]
    }
  ];

  const cookSteps = [
    {
      icon: <ChefHat className="h-10 w-10 text-orange-500" />,
      title: "Apply & Get Certified",
      description: "Join our platform by completing an application and passing our kitchen inspection and food safety certification.",
      details: [
        "Simple online application process",
        "Virtual kitchen inspection",
        "Food safety training and certification",
        "Background verification for security"
      ]
    },
    {
      icon: <Info className="h-10 w-10 text-orange-500" />,
      title: "Create Your Menu",
      description: "Set up your profile and menu with your specialty dishes, pricing, and availability.",
      details: [
        "Upload professional photos of your dishes",
        "Set your own prices and working hours",
        "Highlight specialty cuisines and skills",
        "Specify dietary options and ingredients"
      ]
    },
    {
      icon: <Leaf className="h-10 w-10 text-orange-500" />,
      title: "Cook & Deliver",
      description: "Receive orders, prepare fresh meals, and arrange for pickup or delivery to customers.",
      details: [
        "Get notified of new orders instantly",
        "Prepare meals on your schedule",
        "Use our eco-friendly packaging",
        "Coordinate pickup times or delivery"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do you ensure food safety?",
      answer: "All HomePlate cooks undergo a rigorous verification process including kitchen inspections, food safety certifications, and background checks. We conduct regular follow-up inspections and maintain strict standards for food preparation and storage."
    },
    {
      question: "What are the delivery options?",
      answer: "HomePlate offers both pickup and delivery options. Delivery availability and fees vary by location and cook preferences. You can see delivery options for each meal when browsing."
    },
    {
      question: "Can I order in advance?",
      answer: "Yes! Many of our cooks accept advance orders for special occasions or meal planning. You can schedule orders up to 7 days in advance depending on cook availability."
    },
    {
      question: "How do I know about allergens and ingredients?",
      answer: "Each meal listing includes a complete ingredient list and allergen information provided by the cook. If you have severe allergies, you can also message the cook directly with specific questions."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "Your satisfaction is guaranteed. If you're not happy with your meal, contact our customer support within 24 hours and we'll make it right with a replacement or refund."
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-brown-600">How HomePlate Works</h1>
            <p className="text-lg md:text-xl text-brown-500 mb-8">
              Connecting food lovers with talented home chefs in a safe, trusted community
            </p>
          </div>
        </div>
      </section>
      
      {/* For Customers */}
      <section className="py-16 md:py-24 bg-beige-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">For Customers</h2>
          <p className="section-subtitle">Discover how to order fresh, home-cooked meals from verified local chefs</p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {customerSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 h-full shadow-md">
                  <div className="mb-4 bg-orange-100 p-3 rounded-full inline-block">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-brown-600">{step.title}</h3>
                  <p className="text-brown-500 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-brown-500">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index < customerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-12 h-0.5 bg-beige-300 transform translate-x-3">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-orange-500 rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button className="btn-primary">Find Meals Near You</Button>
          </div>
        </div>
      </section>
      
      {/* For Cooks */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">For Home Chefs</h2>
          <p className="section-subtitle">Learn how to share your cooking talents and earn income on your schedule</p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {cookSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-beige-100 rounded-2xl p-6 h-full shadow-md">
                  <div className="mb-4 bg-white p-3 rounded-full inline-block">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-brown-600">{step.title}</h3>
                  <p className="text-brown-500 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-brown-500">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index < cookSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-12 h-0.5 bg-beige-300 transform translate-x-3">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-orange-500 rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button className="btn-primary">Become a HomePlate Chef</Button>
          </div>
        </div>
      </section>
      
      {/* Safety Features */}
      <section className="py-16 md:py-24 bg-beige-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Safety Standards</h2>
          <p className="section-subtitle">We prioritize your health and safety above everything else</p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-10 w-10 text-green-500 mr-4" />
                <h3 className="text-xl font-semibold text-brown-600">Cook Verification</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-brown-500">Background checks for all platform cooks</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-brown-500">Kitchen inspections to verify cleanliness</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-brown-500">Food safety certification requirements</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-brown-500">Regular re-certification and surprise inspections</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <Leaf className="h-10 w-10 text-green-500 mr-4" />
                <h3 className="text-xl font-semibold text-brown-600">Food Quality & Packaging</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-brown-500">Strict ingredient sourcing guidelines</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-brown-500">Temperature-controlled delivery processes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-brown-500">Eco-friendly, sealed packaging</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <span className="text-brown-500">Clear labeling with ingredients and allergens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="mt-12 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-3 text-brown-600">{faq.question}</h3>
                <p className="text-brown-500">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-brown-500 mb-6">Still have questions?</p>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Taste the Difference?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Experience the joy of authentic home cooking from verified local chefs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-beige-100">Browse Meals</Button>
            <Button variant="outline" className="border-white text-white hover:bg-orange-600">Become a Chef</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
