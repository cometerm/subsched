import React from 'react';

const Header = () => {
  return (
    <header className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-mono text-lg font-semibold text-zinc-50 lowercase">
            subsched.co
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-sans font-semibold uppercase tracking-wide text-zinc-300 hover:text-zinc-100 transition-colors duration-200">
              FEATURES
            </a>
            <a href="#" className="text-sm font-sans font-semibold uppercase tracking-wide text-zinc-300 hover:text-zinc-100 transition-colors duration-200">
              PRICING
            </a>
            <a href="#" className="text-sm font-sans font-semibold uppercase tracking-wide text-zinc-300 hover:text-zinc-100 transition-colors duration-200">
              ABOUT
            </a>
          </nav>
        </div>
        
        <div className="mt-3 text-xs font-mono text-zinc-500">
          Dashboard &gt; Subscription Management &gt; Platform Overview &gt; Pricing
        </div>
      </div>
    </header>
  );
};

export default Header; 