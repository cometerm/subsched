import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ title, description, index }: FeatureCardProps) => {
  return (
    <div className="group animate-fade-in">
      <div className="w-4 h-4 bg-zinc-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-200"></div>
      
      <h3 className="text-lg font-sans font-bold text-zinc-200 mb-4 uppercase tracking-wide">
        {title}
      </h3>
      
      <p className="text-sm font-mono text-zinc-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard; 