'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register plugins (client-side only)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export { gsap, ScrollTrigger };

export function initGSAP() {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // Set default easing
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.8,
  });

  // Configure ScrollTrigger
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
  });
}

export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

export default gsap;
