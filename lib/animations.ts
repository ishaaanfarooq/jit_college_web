'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Fade up animation for elements on scroll
export function fadeUpOnScroll(elements: string | Element | Element[], options?: gsap.TweenVars) {
  if (typeof window === 'undefined') return;
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: typeof elements === 'string' ? elements : (elements as Element[])[0] || elements,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      ...options,
    }
  );
}

// Stagger cards from bottom
export function staggerCards(container: string | Element, cardSelector: string, options?: gsap.TweenVars) {
  if (typeof window === 'undefined') return;
  return gsap.fromTo(
    `${typeof container === 'string' ? container : ''} ${cardSelector}`,
    { opacity: 0, y: 60, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      ...options,
    }
  );
}

// Counter animation
export function animateCounter(
  element: Element,
  target: number,
  suffix: string = '',
  prefix: string = ''
) {
  if (typeof window === 'undefined') return;
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
    },
  });
}

// Clip-path reveal for images
export function clipReveal(element: string | Element, direction: 'left' | 'right' | 'top' | 'bottom' = 'left') {
  if (typeof window === 'undefined') return;
  const clipStart = {
    left: 'inset(0 100% 0 0)',
    right: 'inset(0 0 0 100%)',
    top: 'inset(100% 0 0 0)',
    bottom: 'inset(0 0 100% 0)',
  };
  return gsap.fromTo(
    element,
    { clipPath: clipStart[direction] },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

// Parallax background
export function parallaxBg(element: string | Element, intensity: number = 30) {
  if (typeof window === 'undefined') return;
  return gsap.fromTo(
    element,
    { y: -intensity },
    {
      y: intensity,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }
  );
}

// Text split reveal (character by character)
export function splitTextReveal(element: string | Element) {
  if (typeof window === 'undefined') return;
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const text = el.textContent || '';
  el.innerHTML = text
    .split('')
    .map((char) => `<span class="char" style="display:inline-block; opacity:0; transform:translateY(20px)">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  return gsap.to(`${typeof element === 'string' ? element : ''} .char`, {
    opacity: 1,
    y: 0,
    duration: 0.05,
    stagger: 0.03,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
}

// Line reveal (word by word)
export function lineReveal(element: string | Element) {
  if (typeof window === 'undefined') return;
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const text = el.textContent || '';
  el.innerHTML = text
    .split(' ')
    .map((word) => `<span class="word" style="display:inline-block; overflow:hidden"><span style="display:inline-block; transform:translateY(100%)">${word}</span></span>`)
    .join(' ');

  return gsap.to(`${typeof element === 'string' ? element : ''} .word span`, {
    y: 0,
    duration: 0.6,
    stagger: 0.05,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
}

// Navbar reveal on load
export function navbarReveal(navElement: string | Element) {
  if (typeof window === 'undefined') return;
  return gsap.fromTo(
    navElement,
    { y: -80, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
  );
}

// Footer stagger reveal
export function footerReveal(container: string | Element) {
  if (typeof window === 'undefined') return;
  return gsap.fromTo(
    `${typeof container === 'string' ? container : ''} .footer-col`,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    }
  );
}
