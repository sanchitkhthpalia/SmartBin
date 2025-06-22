import { FiBell } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ title, description }) => {
  return (
    <div className="navbar">
      <div className="page-title">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      
      <div className="notification-bell">
        <FiBell size={20} />
        <span className="notification-badge">5</span>
      </div>
    </div>
  );
};

export default Navbar;