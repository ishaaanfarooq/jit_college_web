'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  useEffect(() => {
    // Only activate on desktop
    if (typeof window === 'undefined' || window.innerWidth <= 768) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    if (!dot || !ring) return;

    // Hide the default cursor
    document.body.style.cursor = 'none';

    // gsap.quickTo for performant cursor tracking
    const moveDotX = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'none' });
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'none' });
    const moveRingX = gsap.quickTo(ring, 'x', { duration: 0.2, ease: 'power2.out' });
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.2, ease: 'power2.out' });

    const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label';

    const onMouseMove = (e: MouseEvent) => {
      moveDotX(e.clientX);
      moveDotY(e.clientY);
      moveRingX(e.clientX);
      moveRingY(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };

    const onMouseEnterDocument = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    // Delegate hover detection for interactive elements
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) {
        document.body.classList.add('cursor-hover');
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) {
        document.body.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnterDocument);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnterDocument);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.body.style.cursor = '';
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}
