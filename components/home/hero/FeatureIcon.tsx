'use client';

import React from 'react';
import {
  GraduationCap,
  Clock,
  Award,
  Coins,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  Briefcase,
  Headphones,
  Compass,
  IndianRupee,
} from 'lucide-react';

interface FeatureIconProps {
  name: string;
  className?: string;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({ 
  name, 
  className = 'w-6 h-6' 
}) => {
  switch (name) {
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Coins':
      return <Coins className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Headphones':
      return <Headphones className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'IndianRupee':
      return <IndianRupee className={className} />;
    default:
      return <Award className={className} />;
  }
};

export default FeatureIcon;