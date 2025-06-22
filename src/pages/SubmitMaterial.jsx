import { useState } from 'react';
import ProgressSteps from '../components/Form/ProgressSteps';
import MaterialForm from '../components/Form/MaterialForm';
import './SubmitMaterial.css';

const SubmitMaterial = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    offerType: 'offer',
    materialType: '',
    quantity: '',
    unit: 'kg',
    condition: '',
    frequency: '',
    description: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="submit-material-container">
      <header>
        <h1>EcoLoop</h1>
        <div className="user-menu">
          <span>Welcome, Industrial User</span>
          <button>Logout</button>
        </div>
      </header>
      
      <ProgressSteps currentStep={currentStep} />
      
      <div className="form-container">
        <div className="form-header">
          <h2>List Your Materials</h2>
          <p>Help create a circular economy by connecting your waste with potential users</p>
        </div>
        
        <MaterialForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
        />
      </div>
    </div>
  );
};

export default SubmitMaterial;