import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX - 4 + 'px';
      dot.style.top = mouseY - 4 + 'px';
    };

    document.addEventListener('mousemove', onMouseMove);

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX - 20 + 'px';
      ring.style.top = ringY - 20 + 'px';
      animationFrameId = requestAnimationFrame(animateRing);
    }
    animateRing();

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .project-card, .filter-btn, .tech-item, .stat-card');
      if (target) {
        ring.classList.add('hover');
        dot.style.transform = 'scale(1.5)';
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .project-card, .filter-btn, .tech-item, .stat-card');
      if (target) {
        ring.classList.remove('hover');
        dot.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div className="cursor-dot" id="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
