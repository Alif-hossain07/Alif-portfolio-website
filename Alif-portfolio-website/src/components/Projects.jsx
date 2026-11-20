import React from 'react';
import { ExternalLink } from 'lucide-react';

const project = {
  id: 7,
  image: 'https://jhiltulysa.vercel.app/images/JSA%20LOGO%202.png',
  title: 'Jhiltuly Sports Association',
  description: 'A community sports website for Jhiltuly, Faridpur, featuring cricket and football programs, tournaments, events, and the association’s story.',
  tags: ['Community', 'Cricket', 'Football', 'Events'],
  liveUrl: 'https://jhiltulysa.vercel.app/'
};

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Pro<span>jects</span></h2>
          <div className="gradient-line"></div>
        </div>

        <div className="projects-grid">
          <div className="project-card glass-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
              <div className="project-overlay">
                <div className="project-overlay-actions">
                  <a
                    href={project.liveUrl}
                    className="project-overlay-btn"
                    aria-label={`View ${project.title} live`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
