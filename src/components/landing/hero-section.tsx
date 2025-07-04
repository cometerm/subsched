import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-zinc-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-sans font-bold uppercase text-zinc-200 leading-tight mb-8 animate-fade-in">
            SUBSCRIPTION MANAGEMENT PLATFORM
          </h1>
          
          <div className="max-w-3xl">
            <p className="text-base lg:text-lg font-mono text-zinc-300 leading-relaxed animate-fade-in">
              From enterprise SaaS solutions to consumer applications, we provide 
              precision-engineered subscription management tools that handle complex billing 
              scenarios and scale with your business growth requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 