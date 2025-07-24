import styles from '@/pages/review/review-page.module.css';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesPerGroup = 5;
  const currentGroup = Math.ceil(currentPage / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  return (
    <nav className={styles.pagination} aria-label="페이지 네비게이션">
      <button
        className={styles.paginationItem}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <ChevronsLeft />
      </button>
      <button
        className={styles.paginationItem}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          key={startPage + i}
          onClick={() => onPageChange(startPage + i)}
          className={`${styles.paginationItem} ${
            currentPage === startPage + i ? styles.active : ''
          }`}
        >
          {startPage + i}
        </button>
      ))}

      <button
        className={styles.paginationItem}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>
      <button
        className={styles.paginationItem}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <ChevronsRight />
      </button>
    </nav>
  );
};
