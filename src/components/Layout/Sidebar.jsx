import { 
  FiPieChart, 
  FiRepeat, 
  FiMap, 
  FiBarChart2, 
  FiMail 
} from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>EcoLoop</h2>
        <p>Industrial Circular Economy</p>
      </div>
      
      <div className="user-profile">
        <div className="user-avatar">IU</div>
        <div className="user-info">
          <h4>Industrial User</h4>
          <p>Waste Producer</p>
        </div>
      </div>
      
      <div className="stats-card">
        <h3>Waste Diverted</h3>
        <p>12.8T</p>
      </div>
      
      <div className="stats-card">
        <h3>Circular Score</h3>
        <p>78%</p>
      </div>
      
      <nav className="nav-menu">
        <a href="#" className="nav-item active">
          <FiPieChart /> Dashboard
        </a>
        <a href="#" className="nav-item">
          <FiRepeat /> My Materials
        </a>
        <a href="#" className="nav-item">
          <FiMap /> Marketplace
        </a>
        <a href="#" className="nav-item">
          <FiBarChart2 /> Analytics
        </a>
        <a href="#" className="nav-item">
          <FiMail /> Messages
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;