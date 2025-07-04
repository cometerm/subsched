import React from 'react';

const HighlightSection = () => {
  const principles = [
    "AUTOMATED BILLING SYSTEMS",
    "REVENUE OPTIMIZATION", 
    "COMPLIANCE MONITORING"
  ];

  return (
    <section className="bg-zinc-900 py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-zinc-200/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-zinc-700/20 rounded-lg p-8 backdrop-blur-sm border border-zinc-600/30">
              <div className="w-full h-full border-2 border-dashed border-zinc-400/60 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-zinc-300/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-zinc-300/80 rounded"></div>
                  </div>
                  <p className="text-zinc-300 font-mono text-xs uppercase tracking-wider">
                    SUBSCRIPTION ARCHITECTURE
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-zinc-100 text-zinc-800 font-mono font-bold text-sm flex items-center justify-center rounded">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span className="font-sans font-semibold text-zinc-100 text-sm uppercase tracking-wide">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="border-l-4 border-zinc-400/80 pl-6 py-4">
              <p className="text-zinc-100 font-mono italic text-lg">
                Engineered for Scale. Built for Revenue.
              </p>
            </div>
            
            <div className="bg-zinc-700/20 backdrop-blur-sm rounded-lg p-6 border border-zinc-600/30">
              <p className="text-zinc-100 font-sans font-bold text-lg uppercase leading-tight">
                ALL BILLING OPERATIONS ARE ALIGNED WITH PCI DSS, SOC 2, AND GDPR STANDARDS
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-zinc-400 font-mono text-xs">
                SubscriptionCore Technologies · 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection; 