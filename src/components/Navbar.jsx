import { Link } from 'react-router-dom';
import lightIcon from '../assets/light.svg';
import darkIcon from '../assets/dark.svg';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <Link to="/" className="nav-link">What I'm Building</Link>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/contact" className="nav-link">Contact Info</Link>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        <img 
          src={theme === 'light' ? darkIcon : lightIcon} 
          alt={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
          className="theme-icon"
        />
      </button>
    </nav>
  );
};

export default Navbar;