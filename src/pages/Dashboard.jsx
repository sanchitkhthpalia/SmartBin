import { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Navbar from '../components/Layout/Navbar';
import MaterialCard from '../components/Dashboard/MaterialCard';
import StatsCard from '../components/Dashboard/StatsCard';
import './Dashboard.css';

const Dashboard = () => {
  const [activeMaterials, setActiveMaterials] = useState([
    {
      id: 1,
      name: "HDPE Pellets",
      quantity: "500kg weekly",
      distance: "15km radius",
      matchPercentage: 85,
      matches: 3,
      icon: "♻️"
    },
    {
      id: 2,
      name: "Steel Slag",
      quantity: "2 tons monthly",
      distance: "25km radius",
      matchPercentage: 72,
      matches: 1,
      icon: "⚙️"
    }
  ]);

  const [potentialMatches, setPotentialMatches] = useState([
    {
      id: 1,
      name: "Acme Packaging",
      need: "HDPE",
      distance: "8km away",
      matchPercentage: 92,
      co2Saved: "2.1T CO2e",
      icon: "🏭"
    },
    {
      id: 2,
      name: "Urban Foundry",
      need: "Steel",
      distance: "18km away",
      matchPercentage: 85,
      co2Saved: "1.7T CO2e",
      icon: "🏗️"
    }
  ]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="main-content">
        <Navbar title="Dashboard" description="Welcome back! Here's your circular economy overview" />
        
        <div className="dashboard-grid">
          <div className="card">
            <div className="card-header">
              <h3>Your Active Listings</h3>
              <span className="badge">{activeMaterials.length} Items</span>
            </div>
            
            {activeMaterials.map(material => (
              <MaterialCard 
                key={material.id}
                icon={material.icon}
                title={material.name}
                subtitle={`${material.quantity} | ${material.distance}`}
                stat1={`${material.matchPercentage}%`}
                stat2={`${material.matches} matches`}
              />
            ))}
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3>Potential Matches</h3>
              <span className="badge">New</span>
            </div>
            
            {potentialMatches.map(match => (
              <MaterialCard 
                key={match.id}
                icon={match.icon}
                title={match.name}
                subtitle={`Needs ${match.need} | ${match.distance}`}
                stat1={`${match.matchPercentage}%`}
                stat2={match.co2Saved}
              />
            ))}
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3>Your Circularity</h3>
            </div>
            <div className="circularity-chart">
              {/* Chart component would go here */}
              <p>Circular Economy Diagram</p>
            </div>
          </div>
          
          <div className="card full-width">
            <div className="card-header">
              <h3>Material Flow Map</h3>
            </div>
            <div className="map-container">
              {/* Map component would go here */}
              <p>Interactive Map Showing Waste Flows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;