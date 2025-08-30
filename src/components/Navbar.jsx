import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const active = ({ isActive }) => ({ fontWeight: isActive ? 700 : 400 });
  return (
    <nav className="nav">
      <Link className="brand" to="/">Speedcar</Link>
      <NavLink to="/" style={active} end>Home</NavLink>
      <NavLink to="/about" style={active}>About</NavLink>
    </nav>
  );
}
