import React from 'react';
import { Monitor, Server, Wrench } from 'lucide-react';

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">MY <span> SKILLS</span></h2>
          <div className="gradient-line"></div>
        </div>

        <div className="skills-grid">
          <div className="skill-category glass-card reveal" style={{ '--order': 0 }}>
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <Monitor size={28} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="skill-category-title">Frontend Engineering</h3>
              </div>
            </div>
            <div className="skill-chip-grid">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'].map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category glass-card reveal" style={{ '--order': 1 }}>
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <Server size={28} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="skill-category-title">Backend & APIs</h3>
              </div>
            </div>
            <div className="skill-chip-grid">
              {['Node.js', 'Express',  'PostgreSQL',' MongoDB', 'RESTful APIs'].map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category glass-card reveal" style={{ '--order': 2 }}>
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <Wrench size={28} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="skill-category-title">Cloud & DevOps</h3>    
              </div>
            </div>
            <div className="skill-chip-grid">
              {['Docker', 'AWS', 'Vercel', 'CI/CD', 'Monitoring'].map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
