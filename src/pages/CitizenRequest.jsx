import React, { useState } from 'react';

export default function CitizenRequest() {
  const [footfall, setFootfall] = useState(50);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Request submitted! Thank you for contributing to a cleaner city.');
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 540, margin: '48px auto 0 auto', padding: 8 }}>
      <div
        style={{
          background: 'rgba(24,28,31,0.92)',
          boxShadow: '0 8px 32px 0 #00e67644, 0 1.5px 8px 0 #00b89433',
          border: '2px solid #00e67633',
          borderRadius: 24,
          padding: 32,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ width: 80, height: 80, marginBottom: 8, background: '#00e676', boxShadow: '0 0 32px #00e67699', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(1.1)' }}>
            <span style={{ fontSize: 54, color: '#181c1f', filter: 'drop-shadow(0 0 8px #00e676)' }}>🗑️</span>
          </div>
          <h2 style={{ fontWeight: 900, marginBottom: 8, color: '#00b894', textShadow: '0 0 16px #00e67688' }}>
            Request a Smart Bin
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <p style={{ fontWeight: 600, marginBottom: 4, color: '#e6fff2' }}>Location Picker (map removed)</p>
          <div style={{ height: 120, marginBottom: 12, borderRadius: 12, background: '#222', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>Map feature temporarily unavailable</span>
          </div>
          <p style={{ fontWeight: 600, marginBottom: 4, color: '#e6fff2' }}>Upload Photo (feature removed)</p>
          <div style={{ marginBottom: 12, borderRadius: 12, background: '#222', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
            <span>File upload temporarily unavailable</span>
          </div>
          <p style={{ fontWeight: 600, marginBottom: 4, color: '#e6fff2' }}>Footfall Estimate</p>
          <input type="number" min={0} max={100} value={footfall} onChange={e => setFootfall(Number(e.target.value))} style={{ width: '100%', marginBottom: 16, padding: 8, borderRadius: 8, border: '1px solid #00e676', fontSize: '1rem' }} />
          <button type="submit" style={{ width: '100%', background: '#00b894', color: '#fff', fontWeight: 900, fontSize: '1.1rem', padding: '18px 0', borderRadius: 12, boxShadow: '0 4px 24px #00e67677', letterSpacing: 1, marginTop: 8, border: 'none', cursor: 'pointer' }} disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
} 