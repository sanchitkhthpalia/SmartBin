import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const bins = [
  { id: 1, name: 'Bin A', position: [19.076, 72.8777], fill: 80, status: 'Overflow' },
  { id: 2, name: 'Bin B', position: [19.08, 72.88], fill: 30, status: 'Normal' },
  { id: 3, name: 'Bin C', position: [19.07, 72.87], fill: 60, status: 'Normal' },
];

export default function PublicDashboard() {
  const handleReport = () => {
    alert('Thank you for reporting! The admin has been notified.');
  };
  return (
    <div style={{ maxWidth: 900, margin: '32px auto 0 auto', padding: 8 }}>
      <div style={{ background: '#fff', boxShadow: '0 2px 8px #00b89422', borderRadius: 12, padding: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 12, color: '#00b894' }}>Public Dashboard</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: 12 }}>See all bins and their live status. Report missed pickups to help keep the city clean!</p>
        <div style={{ height: 300, marginBottom: 16, borderRadius: 8, overflow: 'hidden', border: '2px solid #0984e3' }}>
          <MapContainer center={[19.076, 72.8777]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {bins.map(bin => (
              <Marker key={bin.id} position={bin.position}>
                <Popup>
                  <div style={{ textAlign: 'center' }}>
                    <strong>{bin.name}</strong>
                    <p>Fill: <b>{bin.fill}%</b></p>
                    <p>Status: <b>{bin.status}</b></p>
                    <button style={{ background: '#e17055', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', marginTop: 8, cursor: 'pointer' }} onClick={handleReport}>
                      Report Missed Pickup
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 180, textAlign: 'center', background: '#e0f7fa', boxShadow: '0 2px 8px #00b89422', borderRadius: 8, padding: 24 }}>
            <p style={{ fontWeight: 600 }}>Total Bins</p>
            <h3 style={{ color: '#00b894', fontSize: '1.5rem' }}>{bins.length}</h3>
          </div>
          <div style={{ flex: 1, minWidth: 180, textAlign: 'center', background: '#e0f7fa', boxShadow: '0 2px 8px #00b89422', borderRadius: 8, padding: 24 }}>
            <p style={{ fontWeight: 600 }}>Overflowing</p>
            <h3 style={{ color: '#e17055', fontSize: '1.5rem' }}>{bins.filter(b => b.status === 'Overflow').length}</h3>
          </div>
          <div style={{ flex: 1, minWidth: 180, textAlign: 'center', background: '#e0f7fa', boxShadow: '0 2px 8px #00b89422', borderRadius: 8, padding: 24 }}>
            <p style={{ fontWeight: 600 }}>Normal</p>
            <h3 style={{ color: '#00b894', fontSize: '1.5rem' }}>{bins.filter(b => b.status === 'Normal').length}</h3>
          </div>
        </div>
      </div>
    </div>
  );
} 