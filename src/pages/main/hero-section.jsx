import { useState, useEffect } from 'react';
import styles from './hero-section.module.css';

const slideData = [
  {
    id: 1,
    title: '모두한방이야기',
    description: '모두한의원의 전통과 현대가 만나는 한방 치료 이야기',
    image: null,
    alt: '모두한방이야기 슬라이드 이미지',
  },
  {
    id: 2,
    title: '교통사고후유증',
    description: '교통사고로 인한 후유증 전문 치료',
    image: null,
    alt: '교통사고후유증 치료 슬라이드 이미지',
  },
  {
    id: 3,
    title: '추나치료요법',
    description: '척추와 관절의 균형을 맞추는 추나치료',
    image: null,
    alt: '추나치료요법 슬라이드 이미지',
  },
  {
    id: 4,
    title: '만성소화불량',
    description: '소화기능 개선을 위한 맞춤 치료',
    image: null,
    alt: '만성소화불량 치료 슬라이드 이미지',
  },
  {
    id: 5,
    title: '체질개선',
    description: '개인 체질에 맞춘 종합적인 건강 관리',
    image: null,
    alt: '체질개선 슬라이드 이미지',
  },
  {
    id: 6,
    title: '과민성대장증후군',
    description: '장 건강 회복을 위한 전문 치료',
    image: null,
    alt: '과민성대장증후군 치료 슬라이드 이미지',
  },
  {
    id: 7,
    title: '스포츠재활',
    description: '운동선수와 활동적인 분들을 위한 재활 치료',
    image: null,
    alt: '스포츠재활 슬라이드 이미지',
  },
  {
    id: 8,
    title: '소아성장 클리닉',
    description: '아이들의 건강한 성장을 돕는 클리닉',
    image: null,
    alt: '소아성장 클리닉 슬라이드 이미지',
  },
  {
    id: 9,
    title: '체질 다이어트',
    description: '체질에 맞는 건강한 다이어트 프로그램',
    image: null,
    alt: '체질 다이어트 슬라이드 이미지',
  },
  {
    id: 10,
    title: '체질 맞춤 한약',
    description: '개인 체질에 맞춘 맞춤형 한약 처방',
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

  useEffect(() => {
    preloadImages();
  }, []);

  const handleSlideChange = (slideId) => {
    if (slideId === activeSlide || isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSlide(slideId);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 500);
  };

  const currentSlide = slideData.find((slide) => slide.id === activeSlide);

  return (
    <main className={styles.mainContainer}>
      <section className={styles.heroSection} aria-label="메인 슬라이드">
        <h2 className={styles.srOnly}>서브 메뉴 슬라이드</h2>
        <div className={styles.heroSlider}>
          <div
            className={`${styles.heroSlide} ${!isTransitioning ? styles.active : ''}`}
            style={{
              backgroundImage: `url('${currentSlide?.image}')`,
            }}
          >
            <div
              className={`${styles.heroContent} ${!isTransitioning ? styles.active : ''}`}
            >
              <h2>{currentSlide?.title}</h2>
              <p>{currentSlide?.description}</p>
            </div>
          </div>
        </div>
      </section>

      <nav className={styles.subMenu}>
        <ul className={styles.subMenuList}>
          {slideData.map((slide) => (
            <li key={slide.id}>
              <button
                onClick={() => handleSlideChange(slide.id)}
                className={`${styles.submenuLink} ${
                  activeSlide === slide.id ? styles.active : ''
                }`}
                type="button"
              >
                {slide.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
