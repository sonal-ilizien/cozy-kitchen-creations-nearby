
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TrustBadge from './TrustBadge';
import { Clock, Info } from 'lucide-react';

interface MealCardProps {
  id: number;
  title: string;
  chef: string;
  price: number;
  image: string;
  prepTime: string;
  shelfLife: string;
  allergens?: string[];
  badges: Array<'verified' | 'clean' | 'eco' | 'fresh' | 'certified'>;
}

const MealCard: React.FC<MealCardProps> = ({
  id,
  title,
  chef,
  price,
  image,
  prepTime,
  shelfLife,
  allergens = [],
  badges,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-medium text-orange-500">
          ${price.toFixed(2)}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-brown-600">{title}</h3>
        <p className="text-sm text-brown-500">by {chef}</p>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {badges.map((badge, index) => (
            <TrustBadge key={index} type={badge} />
          ))}
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-brown-500">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1 text-brown-400" />
            <span>Prep: {prepTime}</span>
          </div>
          <div className="flex items-center">
            <Info className="h-3.5 w-3.5 mr-1 text-brown-400" />
            <span>Best before: {shelfLife}</span>
          </div>
        </div>
        
        {allergens.length > 0 && (
          <div className="mt-2 text-xs text-brown-500">
            <span className="font-medium">Allergens:</span> {allergens.join(', ')}
          </div>
        )}
        
        <div className="mt-auto pt-4">
          <Button className="w-full btn-primary">Order Now</Button>
        </div>
      </div>
    </Card>
  );
};

export default MealCard;
