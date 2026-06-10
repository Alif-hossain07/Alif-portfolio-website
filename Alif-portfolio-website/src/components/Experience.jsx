import React from 'react';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// My Journey</span>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="gradient-line"></div>
          <p className="section-subtitle">
            My professional journey — where I've applied my skills to build real-world solutions.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-date">2024 — Present</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card glass-card">
              <h4>Full-Stack Web Developer</h4>
              <div className="company">Freelance / Self-Employed</div>
              <p>Building custom web applications for clients worldwide. Specializing in React, Next.js, and Node.js based solutions with a focus on performance and user experience.</p>
              <div className="timeline-tags">
                <span className="timeline-tag">React</span>
                <span className="timeline-tag">Next.js</span>
                <span className="timeline-tag">Node.js</span>
                <span className="timeline-tag">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-date">2023 — 2024</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card glass-card">
              <h4>Frontend Developer</h4>
              <div className="company">Web Development Agency</div>
              <p>Developed responsive, pixel-perfect interfaces from Figma designs. Collaborated with backend teams on API integration and delivered multiple client projects ahead of deadlines.</p>
              <div className="timeline-tags">
                <span className="timeline-tag">HTML/CSS</span>
                <span className="timeline-tag">JavaScript</span>
                <span className="timeline-tag">React</span>
                <span className="timeline-tag">Figma</span>
              </div>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-date">2022 — 2023</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card glass-card">
              <h4>Web Development Intern</h4>
              <div className="company">Tech Startup</div>
              <p>Kickstarted my career by building landing pages, fixing bugs, and learning production workflows. Gained experience in version control, code reviews, and agile development practices.</p>
              <div className="timeline-tags">
                <span className="timeline-tag">HTML</span>
                <span className="timeline-tag">CSS</span>
                <span className="timeline-tag">JavaScript</span>
                <span className="timeline-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
