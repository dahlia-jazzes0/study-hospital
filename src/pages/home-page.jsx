import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the hospital management system.</p>
      <Link to="/review-page">리뷰 페이지로 이동</Link>
    </div>
  );
}
