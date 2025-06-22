import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import 'leaflet/dist/leaflet.css';

const bins = [
  { id: 1, name: 'Bin A', position: [19.076, 72.8777], fill: 80, lastPickup: '2024-06-10', status: 'Overflow' },
  { id: 2, name: 'Bin B', position: [19.08, 72.88], fill: 30, lastPickup: '2024-06-11', status: 'Normal' },
  { id: 3, name: 'Bin C', position: [19.07, 72.87], fill: 60, lastPickup: '2024-06-09', status: 'Normal' },
];

const fillData = bins.map(bin => ({ name: bin.name, fill: bin.fill }));
const statusData = [
  { name: 'Overflow', value: bins.filter(b => b.status === 'Overflow').length },
  { name: 'Normal', value: bins.filter(b => b.status === 'Normal').length },
];
const COLORS = ['#e17055', '#00b894'];

export default function AdminDashboard() {
  const [selectedBin, setSelectedBin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = (bin) => {
    setSelectedBin(bin);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBin(null);
  };

  return (
    <div style={{ padding: 8 }}>
      <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 12, color: '#00b894' }}>Admin Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ background: '#fff', boxShadow: '0 2px 8px #00b89422', borderRadius: 12, padding: 24, marginBottom: 16 }}>
          <h3 style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 8 }}>City Bin Map</h3>
          <div style={{ height: 350, borderRadius: 8, overflow: 'hidden' }}>
            <MapContainer center={[19.076, 72.8777]} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {bins.map(bin => (
                <Marker key={bin.id} position={bin.position} eventHandlers={{ click: () => handleOpen(bin) }} />
              ))}
            </MapContainer>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', boxShadow: '0 2px 8px #00b89422', borderRadius: 12, padding: 24 }}>
            <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 8 }}>Bin Fill Levels</h4>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={fillData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="fill" fill="#00b894" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ background: '#fff', boxShadow: '0 2px 8px #00b89422', borderRadius: 12, padding: 24 }}>
            <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 8 }}>Bin Status</h4>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, minWidth: 320, boxShadow: '0 4px 32px #00b89444' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>{selectedBin?.name}</h3>
            {selectedBin && (
              <>
                <p>Fill Level: <b>{selectedBin.fill}%</b></p>
                <p>Status: <b>{selectedBin.status}</b></p>
                <p>Last Pickup: <b>{selectedBin.lastPickup}</b></p>
              </>
            )}
            <button onClick={handleClose} style={{ background: '#00b894', color: '#fff', fontWeight: 700, border: 'none', borderRadius: 8, padding: '12px 24px', marginTop: 16, cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
} 