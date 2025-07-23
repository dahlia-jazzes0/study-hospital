import { Link } from 'react-router';
import {
  PhoneCall,
  Monitor,
  AlarmClock,
  MessageSquareText,
  MapPin,
  ChevronUp,
} from 'lucide-react';
import styles from './quick-menu.module.css';

const quickMenuItems = [
  {
    href: 'tel:0212345678',
    icon: PhoneCall,
    label: '전화상담',
    ariaLabel: '전화상담 02-1234-5678로 전화걸기',
  },
  {
    href: '/appointment',
    icon: Monitor,
    label: '온라인예약',
    ariaLabel: '온라인 예약 페이지로 이동',
  },
  {
    href: '/schedule',
    icon: AlarmClock,
    label: '진료안내',
    ariaLabel: '진료시간 안내 페이지로 이동',
  },
  {
    href: '/review-page',
    icon: MessageSquareText,
    label: '치료후기',
    ariaLabel: '치료후기 페이지로 이동',
  },
  {
    href: '/directions',
    icon: MapPin,
    label: '오시는 길',
    ariaLabel: '병원 위치 안내 페이지로 이동',
  },
];

// TOP 버튼 함수
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function ChooseLink({ href, ariaLabel, className, children }) {
  if (
    href.startsWith('tel:') ||
    href.startsWith('mailto:') ||
    href.startsWith('http')
  ) {
    return (
      <a href={href} aria-label={ariaLabel} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  );
}

export function QuickMenu() {
  return (
    <aside className={styles.quickMenu}>
      <nav aria-label="주요 서비스 바로가기">
        <ul>
          {quickMenuItems.map((item) => {
            const IconComponent = item.icon;

            return (
              <li key={item.label}>
                <ChooseLink
                  href={item.href}
                  ariaLabel={item.ariaLabel}
                  className={styles.quickMenuItem}
                >
                  <IconComponent
                    className={styles.quickMenuIcon}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </ChooseLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <button className={styles.topButton} onClick={scrollToTop} type="button">
        <div className={styles.topBtnWrap}>
          <ChevronUp className={styles.topArrow} aria-hidden="true" />
          <span aria-hidden="true">TOP</span>
        </div>
      </button>
    </aside>
  );
}
