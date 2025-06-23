import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTrash, FaUserShield, FaGlobe } from 'react-icons/fa';

const navItems = [
  { label: 'Citizen Request', path: '/citizen-request', icon: <FaTrash /> },
  { label: 'Admin Dashboard', path: '/admin', icon: <FaUserShield /> },
  { label: 'Public Dashboard', path: '/public', icon: <FaGlobe /> },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      width: '100%',
      padding: '32px 32px 32px 32px',
      background: 'rgba(24,28,31,0.85)',
      boxShadow: '0 8px 32px 0 rgba(0,230,118,0.25)',
      borderRadius: 24,
      margin: '32px auto 48px auto',
      maxWidth: 1200,
      zIndex: 100,
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 900, color: '#00b894', letterSpacing: 2, textShadow: '0 0 12px #00e67688', margin: 0 }}>
        SmartBinSense
      </h1>
      <div style={{ display: 'flex', gap: 16 }}>
        {navItems.map((item) => (
          <Link to={item.path} key={item.path} style={{ textDecoration: 'none' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontWeight: 700,
                fontSize: '1.05rem',
                borderRadius: 12,
                padding: '10px 24px',
                margin: '0 4px',
                background: location.pathname === item.path ? 'linear-gradient(90deg,#00e67655,#00b89433)' : 'none',
                boxShadow: location.pathname === item.path ? '0 2px 12px #00e67644' : 'none',
                color: location.pathname === item.path ? '#fff' : '#00e676',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>
              {item.label}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
} 