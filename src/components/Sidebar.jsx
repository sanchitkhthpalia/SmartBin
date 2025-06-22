import React from 'react';
import { FaTrash, FaUserShield, FaGlobe, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Citizen Request', path: '/citizen-request', icon: <FaTrash /> },
  { label: 'Admin Dashboard', path: '/admin', icon: <FaUserShield /> },
  { label: 'Public Dashboard', path: '/public', icon: <FaGlobe /> },
];

export default function Sidebar() {
  const location = useLocation();
  // For simplicity, always show sidebar (no Drawer)
  return (
    <div style={{ width: 80, paddingTop: 16, background: 'rgba(24,28,31,0.92)', height: '100vh', borderRight: '2px solid #00e67633', boxShadow: '4px 0 32px #00e67622', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', left: 0, top: 0 }}>
      <div style={{ marginBottom: 32 }}>
        <img src="/logo192.png" alt="logo" style={{ width: 48, filter: 'drop-shadow(0 0 12px #00e676)' }} />
      </div>
      <div style={{ width: '100%' }}>
        {navItems.map((item) => (
          <Link to={item.path} key={item.path} style={{ textDecoration: 'none' }}>
            <div
              style={{
                marginBottom: 16,
                borderRadius: 12,
                background: location.pathname === item.path ? 'linear-gradient(180deg,#00e67655,#00b89433)' : 'none',
                boxShadow: location.pathname === item.path ? '0 2px 12px #00e67644' : 'none',
                color: location.pathname === item.path ? '#fff' : '#00e676',
                transition: 'all 0.2s',
                justifyContent: 'center',
                minWidth: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                fontSize: 28,
                cursor: 'pointer',
              }}
              title={item.label}
            >
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 