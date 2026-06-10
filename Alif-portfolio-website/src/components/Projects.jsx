import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ALL_PROJECTS = [
  {
    id: 1,
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    title: 'ShopVerse — E-Commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, cart system, payment integration with Stripe, and an admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80',
    title: 'TaskFlow — Project Management App',
    description: 'A collaborative task management application featuring drag-and-drop Kanban boards, team workspaces, real-time updates, and role-based access control.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma']
  },
  {
    id: 3,
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    title: 'DataPulse — Analytics Dashboard',
    description: 'An interactive analytics dashboard with real-time data visualization, customizable charts and graphs, data export functionality, and responsive layouts.',
    tags: ['React', 'Chart.js', 'Tailwind']
  },
  {
    id: 4,
    category: 'backend',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    title: 'AuthGuard — Secure REST API',
    description: 'A production-ready RESTful API with JWT authentication, rate limiting, input validation, error handling, and comprehensive API documentation with Swagger.',
    tags: ['Node.js', 'Express', 'JWT', 'MongoDB']
  },
  {
    id: 5,
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80',
    title: 'SkyWatch — Weather Application',
    description: 'A sleek weather app with real-time forecasts, location search, animated weather icons, hourly & weekly views, and dynamic background themes based on conditions.',
    tags: ['JavaScript', 'API', 'CSS3']
  },
  {
    id: 6,
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
    title: 'DevNotes — Developer Blog Platform',
    description: 'A modern blogging platform with a rich markdown editor, syntax highlighting, SEO optimization, comment system, and headless CMS integration with Sanity.',
    tags: ['Next.js', 'MDX', 'Sanity']
  }
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(ALL_PROJECTS.length / projectsPerPage);
  const clampPage = (page) => Math.min(Math.max(page, 1), totalPages);
  const goToPage = (page) => setCurrentPage(clampPage(page));
  const pageStart = (currentPage - 1) * projectsPerPage;
  const visibleProjects = ALL_PROJECTS.slice(pageStart, pageStart + projectsPerPage);

  const getPageRange = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pageRange = getPageRange();

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Pro<span>jects</span></h2>
          <div className="gradient-line"></div>
        </div>

        <div key={currentPage} className="projects-grid">
          {visibleProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="project-card glass-card" 
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-overlay">
                  <div className="project-overlay-actions">
                    <a href="#" className="project-overlay-btn" aria-label="View Live">
                      <ExternalLink size={18} />
                    </a>
                    <a href="#" className="project-overlay-btn" aria-label="View Code">
                      <FaGithub size={18} />
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
          ))}
        </div>

        <div className="projects-pagination reveal">
          <button
            className="pagination-arrow"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <div className="pagination-pages">
            {pageRange.map((page, index) => (
              typeof page === 'string' ? (
                <span key={`ellipsis-${index}`} className="pagination-page ellipsis">{page}</span>
              ) : (
                <button
                  key={page}
                  className={`pagination-page ${page === currentPage ? 'active' : ''}`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              )
            ))}
          </div>

          <button
            className="pagination-arrow"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
