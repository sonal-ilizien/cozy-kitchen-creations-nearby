
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  dish: string;
  cook: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Chicago, IL",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "The butter chicken was absolutely delicious! It tasted just like my grandmother used to make. I love knowing exactly who cooked my food and when it was prepared.",
      dish: "Butter Chicken",
      cook: "Priya Sharma"
    },
    {
      id: 2,
      name: "David Martinez",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 4,
      text: "The dumplings were incredible. The eco-friendly packaging was a nice touch too. Will definitely order again!",
      dish: "Homestyle Dumplings",
      cook: "Michael Chen"
    },
    {
      id: 3,
      name: "Emily Roberts",
      location: "Portland, OR",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      text: "The enchiladas were perfect! So nice to have authentic home cooking without having to do it myself. The cleanliness certification gave me peace of mind.",
      dish: "Authentic Enchiladas",
      cook: "Sophia Rodriguez"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="bg-beige-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Customer Testimonials</h2>
        <p className="section-subtitle">See what our happy customers are saying about their home-cooked experiences</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-brown-600">{testimonial.name}</p>
                    <p className="text-sm text-brown-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <blockquote className="italic text-brown-500 mb-4">
                "{testimonial.text}"
              </blockquote>
              
              <div className="pt-4 mt-4 border-t border-beige-100">
                <p className="text-sm text-brown-400">
                  Ordered <span className="font-medium text-brown-600">{testimonial.dish}</span> from <span className="font-medium text-brown-600">{testimonial.cook}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
