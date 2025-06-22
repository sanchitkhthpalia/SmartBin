import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 64 }}>
      <h1 style={{ fontSize: '4rem', color: '#00b894', fontWeight: 700, marginBottom: 8 }}>404</h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: 8 }}>404 - Page Not Found</h2>
      <p style={{ marginBottom: 24 }}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={{ background: '#00b894', color: '#fff', fontSize: '1.2rem', padding: '16px 32px', borderRadius: 12, fontWeight: 700, border: 'none', cursor: 'pointer' }}>
          Go Home
        </button>
      </Link>
    </div>
  );
} 