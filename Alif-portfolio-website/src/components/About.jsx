import React, { useEffect } from 'react';
import { User, Mail, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  useEffect(() => {
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute('data-count'), 10);
          animateCounter(target, countTo);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));

    return () => {
      statNumbers.forEach(stat => observer.unobserve(stat));
    };
  }, []);

  function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * eased);

      element.textContent = current + '+';

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + '+';
      }
    }
    requestAnimationFrame(update);
  }

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="gradient-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper reveal-left">
            <img src="/assets/profile.jpg" alt="Alif Hossain" className="about-image" />
            <div className="about-image-decoration"></div>
          </div>

          <div className="about-content reveal-right">
            <h3>Full-Stack Developer &amp; Creative Problem Solver</h3>
            <p>
              I'm Md Alif Hossain, a passionate full-stack web developer with a keen eye for
              crafting beautiful, functional, and user-centered digital experiences. With a strong
              foundation in both front-end and back-end technologies, I bring ideas to life through
              clean, efficient code and modern design principles.
            </p>
            <p>
              My journey in web development started with a curiosity to understand how things work
              on the internet, and it has evolved into a deep passion for building scalable,
              performant applications that make a real impact. I believe in continuous learning
              and staying updated with the latest technologies.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="info-icon">
                  <User size={16} />
                </div>
                <div className="info-text">
                  <div className="label">Name</div>
                  <div className="value">Md Alif Hossain</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="info-icon">
                  <Mail size={16} />
                </div>
                <div className="info-text">
                  <div className="label">Email</div>
                  <div className="value">alifhossain72003@gmail.com</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="info-icon">
                  <MapPin size={16} />
                </div>
                <div className="info-text">
                  <div className="label">Location</div>
                  <div className="value"> Dhaka,Bangladesh</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="info-icon">
                  <Briefcase size={16} />
                </div>
                <div className="info-text">
                  <div className="label">Available For</div>
                  <div className="value">Freelance & Full-Time</div>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary">
              <Mail size={18} style={{ marginRight: '8px' }} />
              Get In Touch
            </a>
          </div>
        </div>

        <div className="about-stats reveal">
          <div className="stat-card">
            <div className="stat-number" data-count="25">0</div>
            <div className="stat-label">Projects Done</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-count="2">0</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-count="15">0</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-count="500">0</div>
            <div className="stat-label">Cups of Coffee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
