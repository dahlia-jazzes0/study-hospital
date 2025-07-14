import { NavLink } from 'react-router';

export function NavigationView() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
        <li>
          <NavLink to="/appointment">진료예약</NavLink>
        </li>
      </ul>
    </nav>
  );
}
