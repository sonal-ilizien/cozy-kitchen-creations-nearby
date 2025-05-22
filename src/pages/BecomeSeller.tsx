
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChefHat, Check, ShieldCheck, Leaf, Clock } from 'lucide-react';

const BecomeSeller: React.FC = () => {
  const benefits = [
    {
      icon: <ChefHat className="h-8 w-8 text-orange-500" />,
      title: "Share Your Passion",
      description: "Turn your love for cooking into a flexible income source. Share authentic recipes and cultural dishes with your community."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Flexible Schedule",
      description: "Cook when it works for you. Set your own availability and choose which orders to accept."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
      title: "Verified Status",
      description: "Gain customer trust with our verification badges. We help you meet all local regulations and food safety standards."
    },
    {
      icon: <Leaf className="h-8 w-8 text-orange-500" />,
      title: "Sustainable Impact",
      description: "Join our eco-friendly packaging initiative and make a positive environmental impact in your community."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Fill out our simple application form with your cooking specialties and kitchen information."
    },
    {
      number: 2,
      title: "Verification",
      description: "Complete our virtual kitchen inspection and food safety certification process."
    },
    {
      number: 3,
      title: "Setup",
      description: "Create your profile, set your menu items, and specify availability."
    },
    {
      number: 4,
      title: "Start Selling",
      description: "Receive orders, prepare delicious meals, and build your cooking reputation."
    }
  ];

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Share Your Cooking Talent With Your Community</h1>
            <p className="text-lg md:text-xl mb-8">Join our network of trusted home chefs and turn your passion for cooking into a rewarding business.</p>
            <Button className="bg-white text-orange-500 hover:bg-beige-100 font-semibold text-lg py-6 px-8 rounded-full">Apply Now</Button>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Become a HomePlate Chef?</h2>
          <p className="section-subtitle">Join hundreds of home cooks who are sharing their passion and earning extra income</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brown-600">{benefit.title}</h3>
                <p className="text-brown-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Seller Success Story */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Chef Priya" 
                  className="rounded-2xl w-full"
                />
              </div>
              <div className="md:col-span-3 md:pl-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-brown-600">
                  "HomePlate helped me turn my family recipes into a thriving business"
                </h2>
                <p className="text-brown-500 mb-6">
                  "I've always loved cooking traditional Indian dishes, but never thought I could make money from it. 
                  Since joining HomePlate last year, I've served over 500 meals to people in my neighborhood and 
                  built a loyal customer base who appreciate authentic home cooking."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-brown-600">Priya Sharma</p>
                    <p className="text-brown-400">HomePlate Chef since 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Join */}
      <section className="py-16 md:py-24 bg-beige-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">How to Become a HomePlate Chef</h2>
          <p className="section-subtitle">Our simple 4-step process to get you cooking</p>
          
          <div className="max-w-4xl mx-auto mt-12">
            {steps.map((step, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="mr-6">
                  <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-orange-300 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-brown-600">{step.title}</h3>
                  <p className="text-brown-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-primary text-lg py-6 px-8">Apply Now</Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-brown-600">What equipment do I need?</h3>
              <p className="text-brown-500">You'll need a clean kitchen that meets basic health standards. Our team will guide you through any necessary upgrades or certifications required in your area.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-brown-600">How much can I earn?</h3>
              <p className="text-brown-500">Earnings vary based on your menu, pricing, and how often you cook. Many of our active chefs earn between $500-$2000 per month working part-time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-brown-600">Do I need food safety certification?</h3>
              <p className="text-brown-500">Yes, all HomePlate chefs must complete our food safety training program. If you already have certification, we'll help you verify it as part of the application process.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-brown-600">How do I get paid?</h3>
              <p className="text-brown-500">HomePlate processes all payments securely. You'll receive weekly direct deposits for your sales, minus our service fee of 15%.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Share Your Cooking with the World?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Join our community of passionate home chefs today and start your culinary journey with HomePlate.</p>
          <Button className="bg-white text-orange-500 hover:bg-beige-100 font-semibold text-lg py-6 px-8 rounded-full">Start Your Application</Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BecomeSeller;
