import React from 'react';
import FeatureCard from './feature-card';

const FeatureColumns = () => {
  const features = [
    {
      title: "Automated Billing & Invoicing",
      description: "Intelligent billing systems engineered for complex subscription models. Our platform handles prorations, usage-based billing, and multi-tier pricing with precision and reliability across all payment scenarios."
    },
    {
      title: "Compliance & Security Standards", 
      description: "All operations adhere to PCI DSS, SOC 2, and international data protection standards. Comprehensive audit trails and security protocols ensure regulatory compliance across all jurisdictions."
    },
    {
      title: "Analytics & Performance Metrics",
      description: "Advanced reporting and analytics drive data-informed decisions. We optimize subscription metrics for maximum revenue retention, reduced churn rates, and enhanced customer lifetime value."
    }
  ];

  return (
    <section className="bg-zinc-900 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureColumns; 