import React, { useEffect, useRef } from 'react';
import { FolderOpen, Download } from 'lucide-react';

export default function Hero() {
  const typedRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const typedElement = typedRef.current;
    if (!typedElement) return;

    const words = [
      'Full-Stack Developer',
      'React Specialist',
      'Node.js Developer',
      'UI/UX Enthusiast',
      'Problem Solver'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let timeoutId;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typedElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typedElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    }

    const startTimeout = setTimeout(type, 1000);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseParticle = { x: -1000, y: -1000 };
    let animationFrameId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      mouseParticle.x = e.clientX;
      mouseParticle.y = e.clientY;
    };
    document.addEventListener('mousemove', onMouseMove);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const dx = mouseParticle.x - this.x;
        const dy = mouseParticle.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x -= dx * force * 0.02;
          this.y -= dy * force * 0.02;
        }

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas id="particles-canvas" ref={canvasRef}></canvas>
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>

      <section className="hero section" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-greeting">        
              <span>Hi! I'm</span>
            </div>

            <h1 className="hero-name">
              <span className="first-name">Md Alif</span><br />
              <span className="last-name">Hossain</span>
            </h1>

            <div className="hero-title-wrapper">
              <span className="hero-title-static">I'm a</span>
              <span className="hero-title-dynamic" id="typed-text" ref={typedRef}></span>
            </div>

            <p className="hero-description">
              Passionate full-stack developer who transforms ideas into elegant, 
              high-performance digital experiences. I craft clean code, pixel-perfect 
              interfaces, and robust back-end systems that scale.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <FolderOpen size={18} />
                View My Work
              </a>
              <a href="/assets/resume.pdf" className="btn-secondary" target="_blank" download>
                <Download size={18} />
                Download CV
              </a>
            </div>

          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-glow"></div>
              <img src="/assets/profile.jpg" alt="Md Alif Hossain - Full-Stack Web Developer" className="hero-image" />

              <div className="hero-float-badge badge-1">
                <span className="badge-icon">⚛️</span>
                <span>React.js</span>
              </div>
              <div className="hero-float-badge badge-2">
                <span className="badge-icon">🟢</span>
                <span>Node.js</span>
              </div>
              <div className="hero-float-badge badge-3">
                <span className="badge-icon">🍃</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse"></div>
          <span>Scroll Down</span>
        </div>
      </section>
    </>
  );
}
