import React from 'react';

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">My <span>Education</span></h2>
          <div className="gradient-line"></div>
        </div>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-date">2025 — 2029 (Expected)</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card glass-card">
              <h4>Bachelor of Science in Computer Science & Engineering</h4>
              <div className="company">American International University-Bangladesh</div>

            
              <div className="timeline-tags">
                <span className="timeline-tag">Data Structures</span>
                <span className="timeline-tag">Algorithms</span>
                <span className="timeline-tag">Web Technologies</span>
                <span className="timeline-tag">Artificial Intelligence</span>
              </div>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-date"> 2022</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card glass-card">
              <h4>Higher Secondary Certificate (HSC)</h4>
              <div className="company">Government Rajendra College,Faridpur </div>
                <div className="timeline-tags">
                <span className="timeline-tag">Science Division</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
