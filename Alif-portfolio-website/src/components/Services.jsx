import React, { useState } from 'react';
import { Monitor, Server, Cloud } from 'lucide-react';

const SERVICES = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    features: ['Responsive interfaces that convert', 'Accessible experiences for all users', 'Interactive designs with smooth flow'],
    more: ['Design systems that keep your brand consistent', 'UI testing and polish for better conversion']
  },
  {
    title: 'Backend Development',
    icon: Server,
    features: ['Secure authentication and authorization', 'Reliable API and data workflows', 'Performance tuned for scale'],
    more: ['Data validation and error handling for stability', 'Integrations with third-party services and tools']
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    features: ['Automated deployment for fast releases', 'Cloud hosting with uptime and scaling', 'Monitoring and support-ready operations'],
    more: ['Rollback and recovery strategies for safety', 'Cost-aware hosting and deployment optimization']
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Development <span>Services</span></h2>
          <div className="gradient-line"></div>
        </div>

        <div className="services-grid reveal">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const expanded = expandedIndex === idx;
            return (
              <article key={service.title} className="service-card glass-card" style={{ '--order': idx }}>
                <div className="service-card-meta">
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="service-title">{service.title}</h3>

                <ul className="service-feature-list">
                  {service.features.map(feature => (
                    <li key={feature} className="service-feature-item">{feature}</li>
                  ))}
                </ul>

                <button className="service-more-btn" onClick={() => toggleExpand(idx)}>
                  {expanded ? 'Hide options' : 'View more options'}
                </button>

                {expanded && (
                  <div className="service-more-panel">
                    <h4>More Options</h4>
                    <ul>
                      {service.more.map(item => (
                        <li key={item} className="service-more-item">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
