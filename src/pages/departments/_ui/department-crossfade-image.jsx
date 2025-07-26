import { memo, useEffect, useState } from 'react';
import styles from './department-crossfade-image.module.css';

/**
 * @typedef {object} DepartmentCrossfadeImageProps
 * @prop {string} src
 * @prop {string} [alt]
 * @prop {number} [duration]
 */

/**
 * @type {import('react').FC<import('react').HTMLAttributes<HTMLDivElement> & DepartmentCrossfadeImageProps>}
 */
export const DepartmentCrossfadeImage = memo(
  ({ className, src, duration = 200, alt, ...rest }) => {
    const [ghostSrc, setGhostSrc] = useState();
    const [source, setSource] = useState();

    useEffect(() => {
      setGhostSrc(src);
      const timerId = setTimeout(() => {
        setGhostSrc(undefined);
        setSource(src);
      }, duration);
      return () => {
        clearTimeout(timerId);
      };
    }, [duration, src]);

    return (
      <div className={`${styles.container} ${className}`} {...rest}>
        <img src={source} className={styles.img} alt={alt} />
        {ghostSrc && (
          <img
            key={ghostSrc}
            src={ghostSrc}
            className={styles.img}
            data-type="ghost"
            style={{ '---duration': `${duration}ms` }}
            alt=""
          />
        )}
      </div>
    );
  }
);
