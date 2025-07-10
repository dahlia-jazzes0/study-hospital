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
          <NavLink to="/doctors">Doctors</NavLink>
        </li>
      </ul>
    </nav>
  );
}
