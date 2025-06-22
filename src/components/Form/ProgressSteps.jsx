const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Offer/Request' },
    { number: 2, label: 'Details' },
    { number: 3, label: 'Confirm' }
  ];

  return (
    <div className="progress-bar">
      <div className="progress-steps">
        {steps.map(step => (
          <div 
            key={step.number} 
            className={`step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
          >
            <div className="step-number">{step.number}</div>
            <div className="step-label">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;