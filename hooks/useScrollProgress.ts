'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollProgress() {
  useEffect(() => {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    const tween = gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, []);
}

export default useScrollProgress;
