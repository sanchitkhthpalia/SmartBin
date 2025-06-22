const MaterialCard = ({ icon, title, subtitle, stat1, stat2 }) => {
  return (
    <div className="material-card">
      <div className="material-icon">{icon}</div>
      <div className="material-info">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
      <div className="material-stats">
        <div className="match-score">{stat1}</div>
        <p>{stat2}</p>
      </div>
    </div>
  );
};

export default MaterialCard;