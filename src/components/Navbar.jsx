import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <Link to="/" className="nav-link">What I'm Building</Link>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/contact" className="nav-link">Contact Info</Link>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;