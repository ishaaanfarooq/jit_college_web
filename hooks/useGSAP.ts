'use client';

import { useEffect, useRef, DependencyList } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAP(
  callback: (context: gsap.Context) => void | (() => void),
  deps: DependencyList = []
) {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx);
    });
    contextRef.current = ctx;
    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return contextRef;
}

export default useGSAP;
