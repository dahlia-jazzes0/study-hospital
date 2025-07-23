import { useCallback, useRef, useState } from 'react';

/**
 * @typedef {object} Options
 * @prop {number} [from]
 * @prop {number} to
 * @prop {number} [duration]
 * @prop {(t: number) => number} [ease]
 */

/**
 * @typedef {() => () => void} StartFunction
 */

/**
 *
 * @param {() => Options} setup
 * @returns {{ value: number, start: StartFunction, reset: () => void }}
 */
export function useIncreasingAnimation(setup) {
  const setupRef = useRef(setup);
  const [value, _setValue] = useState(setupRef.current().from ?? 0);
  const valueRef = useRef(value);
  const elapsedTimeRef = useRef(0);

  const setValue = useCallback((value) => {
    valueRef.current = value;
    _setValue(value);
  }, []);

  const start = useCallback(() => {
    const { to, duration = 1000, ease = (t) => t } = setupRef.current();
    const from = valueRef.current;
    if (from === to) {
      return () => {};
    }
    const startedAt = performance.now() - elapsedTimeRef.current;
    setValue(from);
    let isPlaying = getElapsedTime() < duration;
    requestAnimationFrame(update);
    return () => {
      isPlaying = false;
    };
    function update() {
      if (!isPlaying) return;

      const elapsedTime = getElapsedTime();
      elapsedTimeRef.current = elapsedTime;
      const t = elapsedTime / duration;

      isPlaying = t < 1;
      if (isPlaying) {
        setValue(lerp(from, to, ease(t)));
        requestAnimationFrame(update);
      } else {
        setValue(to);
      }
    }
    function getElapsedTime() {
      const now = performance.now();
      return now - startedAt;
    }
    function lerp(a, b, t) {
      return (b - a) * t + a;
    }
  }, [setValue]);

  const reset = useCallback(() => {
    const { from } = setupRef.current();
    setValue(from ?? 0);
    elapsedTimeRef.current = 0;
  }, [setValue]);

  return { value, start, reset };
}
