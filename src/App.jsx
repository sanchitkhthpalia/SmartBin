import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import CitizenRequest from './pages/CitizenRequest';
import AdminDashboard from './pages/AdminDashboard';
import PublicDashboard from './pages/PublicDashboard';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #23272f 0%, #003d29 100%)' }}>
        <Navbar />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/citizen-request" element={<CitizenRequest />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/public" element={<PublicDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
