import { useState, useEffect } from 'react';
import styles from './hero-section.module.css';

const slideData = [
  {
    id: 1,
    title: '모두한방이야기',
    image: null,
    alt: '모두한방이야기 슬라이드 이미지',
  },
  {
    id: 2,
    title: '교통사고후유증',
    image: null,
    alt: '교통사고후유증 치료 슬라이드 이미지',
  },
  {
    id: 3,
    title: '추나치료요법',
    image: null,
    alt: '추나치료요법 슬라이드 이미지',
  },
  {
    id: 4,
    title: '만성소화불량',
    image: null,
    alt: '만성소화불량 치료 슬라이드 이미지',
  },
  {
    id: 5,
    title: '체질개선',
    image: null,
    alt: '체질개선 슬라이드 이미지',
  },
  {
    id: 6,
    title: '과민성대장증후군',
    image: null,
    alt: '과민성대장증후군 치료 슬라이드 이미지',
  },
  {
    id: 7,
    title: '스포츠재활',
    image: null,
    alt: '스포츠재활 슬라이드 이미지',
  },
  {
    id: 8,
    title: '소아성장 클리닉',
    image: null,
    alt: '소아성장 클리닉 슬라이드 이미지',
  },
  {
    id: 9,
    title: '체질 다이어트',
    image: null,
    alt: '체질 다이어트 슬라이드 이미지',
  },
  {
    id: 10,
    title: '체질 맞춤 한약',
    image: null,
    alt: '체질 맞춤 한약 슬라이드 이미지',
  },
];

const preloadImages = () => {
  slideData.forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
  });
};

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingSlideId, setPendingSlideId] = useState(null);

  useEffect(() => {
    preloadImages();
  }, []);

  const handleSlideChange = (slideId) => {
    if (slideId === activeSlide) return;

    if (isTransitioning) {
      setPendingSlideId(slideId);
      return;
    }

    startTransition(slideId);
  };

  const startTransition = (slideId) => {
    setIsTransitioning(true);
    setPendingSlideId(null);

    setTimeout(() => {
      setActiveSlide(slideId);

      setTimeout(() => {
        setIsTransitioning(false);

        if (pendingSlideId && pendingSlideId !== slideId) {
          startTransition(pendingSlideId);
        }
      }, 100);
    }, 500);
  };

  const currentSlide = slideData.find((slide) => slide.id === activeSlide);

  return (
    <main className={styles.mainContainer}>
      <section className={styles.heroSection}>
        <h2 className={styles.srOnly}>서브 메뉴 슬라이드</h2>
        <div
          className={`${styles.heroSlide} ${!isTransitioning ? styles.active : ''}`}
          style={{ backgroundImage: `url('${currentSlide?.image}')` }}
        ></div>
      </section>

      <nav className={styles.subMenu}>
        <ul className={styles.subMenuList}>
          {slideData.map((slide) => {
            const isActiveButton = activeSlide === slide.id;

            return (
              <li key={slide.id}>
                <button
                  onClick={() => handleSlideChange(slide.id)}
                  className={`${styles.submenuLink} ${
                    isActiveButton ? styles.active : ''
                  }`}
                  type="button"
                >
                  {slide.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
