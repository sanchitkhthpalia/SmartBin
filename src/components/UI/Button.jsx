import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  ...props 
}) => {
  return (
    <button 
      className={`button ${variant} ${size}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;