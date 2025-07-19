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

// Lucide 아이콘 정리
const iconComponents = {
  PhoneCall,
  Monitor,
  AlarmClock,
  MessageSquareText,
  MapPin,
};

const quickMenuItems = [
  {
    href: 'tel:0212345678',
    icon: 'PhoneCall',
    label: '전화상담',
    ariaLabel: '전화상담 02-1234-5678로 전화걸기',
  },
  {
    href: '/reservation',
    icon: 'Monitor',
    label: '온라인예약',
    ariaLabel: '온라인 예약 페이지로 이동',
  },
  {
    href: '/schedule',
    icon: 'AlarmClock',
    label: '진료안내',
    ariaLabel: '진료시간 안내 페이지로 이동',
  },
  {
    href: '/reviews',
    icon: 'MessageSquareText',
    label: '치료후기',
    ariaLabel: '치료후기 페이지로 이동',
  },
  {
    href: '/directions',
    icon: 'MapPin',
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

export function QuickMenu() {
  return (
    <aside
      className={styles.quickMenu}
      role="complementary"
      aria-label="퀵메뉴"
    >
      <nav aria-label="주요 서비스 바로가기">
        <ul role="list">
          {quickMenuItems.map((item) => {
            const IconComponent = iconComponents[item.icon];

            return (
              <li key={item.label} role="listitem">
                {item.href.startsWith('tel:') ? (
                  <a
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className={styles.quickMenuItem}
                  >
                    <IconComponent
                      className={styles.quickMenuIcon}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    aria-label={item.ariaLabel}
                    className={styles.quickMenuItem}
                  >
                    <IconComponent
                      className={styles.quickMenuIcon}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </Link>
                )}
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
