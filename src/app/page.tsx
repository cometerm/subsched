'use client';

import React from 'react';
import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import FeatureColumns from '@/components/landing/feature-column';
import HighlightSection from '@/components/landing/highlight-section';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <HeroSection />
      <FeatureColumns />
      <HighlightSection />
    </div>
  );
}
