
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TrustBadge from './TrustBadge';
import { Star } from 'lucide-react';

interface Cook {
  id: number;
  name: string;
  image: string;
  rating: number;
  speciality: string;
  badge: 'gold' | 'silver' | 'bronze';
  verifiedSince: string;
  badges: Array<'verified' | 'clean' | 'eco' | 'fresh' | 'certified'>;
}

const FeaturedCooks: React.FC = () => {
  const cooks: Cook[] = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      speciality: "North Indian Cuisine",
      badge: "gold",
      verifiedSince: "Apr 2023",
      badges: ['verified', 'clean', 'certified']
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      speciality: "Chinese Homestyle",
      badge: "silver",
      verifiedSince: "Jun 2023",
      badges: ['verified', 'clean', 'eco']
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      speciality: "Mexican Authentic",
      badge: "gold",
      verifiedSince: "Mar 2023",
      badges: ['verified', 'clean', 'fresh']
    },
    {
      id: 4,
      name: "James Williams",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      speciality: "Soul Food",
      badge: "bronze",
      verifiedSince: "Aug 2023",
      badges: ['verified', 'clean']
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

  return (
    <section className="bg-beige-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Trusted Home Chefs</h2>
        <p className="section-subtitle">Meet our verified cooks who prepare delicious meals with love and care</p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {cooks.map(cook => (
            <Card key={cook.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="relative">
                    <img 
                      src={cook.image} 
                      alt={cook.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <Badge className={`absolute bottom-0 right-0 ${getBadgeColor(cook.badge)}`}>
                      {cook.badge.charAt(0).toUpperCase() + cook.badge.slice(1)} Cook
                    </Badge>
                  </div>
                  <div className="flex items-center bg-beige-100 px-2 py-1 rounded-md">
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <span className="ml-1 text-sm font-medium text-brown-600">{cook.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-brown-600">{cook.name}</h3>
                <p className="text-sm text-brown-500">{cook.speciality}</p>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {cook.badges.map((badge, index) => (
                    <TrustBadge key={index} type={badge} />
                  ))}
                </div>
                
                <p className="text-xs text-brown-400 mt-3">
                  Verified since {cook.verifiedSince}
                </p>
                
                <button className="w-full mt-4 text-sm font-medium text-orange-500 hover:text-orange-600 py-2 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
                  View Profile
                </button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
            View All Cooks
            <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCooks;
