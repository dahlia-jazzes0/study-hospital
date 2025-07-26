import { useEffect, useRef } from 'react';

/**
 * @typedef {object} Options
 * @prop {import('react').RefObject<HTMLElement>} ref
 * @prop {IntersectionObserverInit} [options]
 * @prop {(entry: IntersectionObserverEntry) => void} [onIntersect]
 */

/**
 *
 * @param {() => Options} setup
 */
export function useIntersectionObserver(setup) {
  const setupRef = useRef(setup);
  useEffect(() => {
    const { ref, options, onIntersect } = setupRef.current();
    const target = ref.current;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) onIntersect?.(entry);
    }, options);
    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, []);
}
