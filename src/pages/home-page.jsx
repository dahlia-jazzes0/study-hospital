import { HeroSection } from '@/pages/main/hero-section.jsx';
import { ReviewSection } from '@/pages/main/review-section.jsx';
import { CounterSection } from '@/pages/main/counter-section.jsx';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ReviewSection />
      <CounterSection />
    </>
  );
}
