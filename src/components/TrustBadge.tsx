
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, ShieldCheck, Award, Clock, Leaf } from 'lucide-react';

type BadgeType = 'verified' | 'clean' | 'eco' | 'fresh' | 'certified';

interface TrustBadgeProps {
  type: BadgeType;
  label?: string;
  className?: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ 
  type, 
  label, 
  className 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'verified':
        return <Check className="h-4 w-4" />;
      case 'clean':
        return <ShieldCheck className="h-4 w-4" />;
      case 'eco':
        return <Leaf className="h-4 w-4" />;
      case 'fresh':
        return <Clock className="h-4 w-4" />;
      case 'certified':
        return <Award className="h-4 w-4" />;
      default:
        return <Check className="h-4 w-4" />;
    }
  };

  const getBadgeStyle = () => {
    switch (type) {
      case 'verified':
        return 'bg-blue-100 text-blue-500';
      case 'clean':
        return 'bg-green-100 text-green-500';
      case 'eco':
        return 'bg-emerald-100 text-emerald-500';
      case 'fresh':
        return 'bg-orange-100 text-orange-500';
      case 'certified':
        return 'bg-purple-100 text-purple-500';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  const defaultLabel = {
    verified: 'Verified Seller',
    clean: 'Hygiene Certified',
    eco: 'Eco-Packaging',
    fresh: 'Freshly Made',
    certified: 'Certified Cook'
  };

  return (
    <div className={cn(
      'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
      getBadgeStyle(),
      className
    )}>
      {getIcon()}
      <span className="ml-1">{label || defaultLabel[type]}</span>
    </div>
  );
};

export default TrustBadge;
