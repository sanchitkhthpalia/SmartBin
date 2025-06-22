import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoleToggle from '../components/Auth/RoleToggle';
import './Login.css';

const Login = () => {
  const [activeRole, setActiveRole] = useState('producer');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="illustration-side">
        <div className="circular-economy-graphic">
          {/* SVG or image would go here */}
        </div>
        <footer>Connecting industries for zero-waste futures</footer>
      </div>
      
      <div className="form-side">
        <div className="login-form">
          <div className="logo">
            <h1>EcoLoop</h1>
            <p>Industrial Circular Economy Platform</p>
          </div>
          
          <RoleToggle activeRole={activeRole} setActiveRole={setActiveRole} />
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@company.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>
            
            <button type="submit" className="submit-btn">Sign In</button>
            
            <div className="register-link">
              Don't have an account? <a href="#">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;