import { useState, useEffect, useRef } from 'react';
import styles from './counter-section.module.css';

function Counter({ targetNumber, startAnimation }) {
  const [count, setCount] = useState(0);

  const numericTarget = parseInt(String(targetNumber).replace(/,/g, '')) || 0;

  useEffect(() => {
    if (!startAnimation) {
      setCount(0);
      return;
    }

    const animationDuration = 3000;
    let animationStartTime = null;

    const animate = (currentTime) => {
      if (!animationStartTime) animationStartTime = currentTime;
      const elapsed = currentTime - animationStartTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(easeOutProgress * numericTarget);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericTarget);
      }
    };

    requestAnimationFrame(animate);
  }, [startAnimation, numericTarget]);

  return count.toLocaleString();
}

export function CounterSection() {
  const counterData = [
    {
      id: 1,
      icon: 'images/icon-logo.png',
      alt: '치료 아이콘',
      count: '1,094,358',
      label: '총 치료건수',
    },
    {
      id: 2,
      icon: 'images/icon-tuna.png',
      alt: '추나 아이콘',
      count: '94,358',
      label: '총 추나 건수',
    },
    {
      id: 3,
      icon: 'images/icon-medicine.png',
      alt: '한약 아이콘',
      count: '120,264',
      label: '처방한 한약',
    },
    {
      id: 4,
      icon: 'images/icon-together.png',
      alt: '함께한 시간 아이콘',
      count: '23,131',
      label: '모두한의원과 함께한 시간',
    },
  ];

  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || animationStarted) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        setAnimationStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationStarted]);

  return (
    <section className={styles.mainCounter} ref={sectionRef}>
      <div className={styles.counterWrap}>
        <h2 className={styles.counterTitle}>모두(謨)의 발자취</h2>
        <p>2025년 6월 말 / 기준</p>
      </div>
      <ul className={styles.mainCounterStats}>
        {counterData.map((item) => (
          <li key={item.id}>
            <img src={item.icon} alt={item.alt} />
            <strong>
              <Counter
                targetNumber={item.count}
                startAnimation={animationStarted}
              />
            </strong>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
