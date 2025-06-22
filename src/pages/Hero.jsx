import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Link } from 'react-router-dom';

function Dustbin3D() {
  return (
    <group>
      {/* Bin body */}
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.6, 1.4, 32]} />
        <meshStandardMaterial color="#00b894" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Lid */}
      <mesh position={[0, 1.45, 0]} castShadow>
        <torusGeometry args={[0.62, 0.08, 16, 100]} />
        <meshStandardMaterial color="#222" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Handle */}
      <mesh position={[0, 1.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.18, 0.03, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#888" />
      </mesh>
    </group>
  );
}

export default function Hero() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', position: 'relative' }}>
      <div
        style={{
          background: 'rgba(24,28,31,0.92)',
          boxShadow: '0 8px 32px 0 #00e67644, 0 1.5px 8px 0 #00b89433',
          border: '2px solid #00e67633',
          borderRadius: 8,
          padding: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          maxWidth: 520,
        }}
      >
        <div style={{ width: '100%', height: 260, marginBottom: 16, borderRadius: 8, overflow: 'hidden', background: '#181c1f' }}>
          <Canvas shadows camera={{ position: [2, 2, 3], fov: 40 }} style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <Stage environment="city" intensity={0.5} shadows>
              <Dustbin3D />
            </Stage>
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />
          </Canvas>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#00b894', textAlign: 'center', textShadow: '0 0 24px #00e67688', marginBottom: 8 }}>
          SmartBinSense
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#e6fff2', textAlign: 'center', marginBottom: 12, fontWeight: 500 }}>
          Revolutionizing Waste Management for a Cleaner, Greener India
        </p>
        <Link to="/citizen-request" style={{ textDecoration: 'none', width: '100%' }}>
          <button style={{
            width: '100%',
            background: '#00b894',
            color: '#fff',
            fontWeight: 900,
            fontSize: '1.2rem',
            padding: '18px 0',
            borderRadius: 12,
            boxShadow: '0 4px 24px #00e67677',
            letterSpacing: 1,
            marginTop: 8,
            border: 'none',
            cursor: 'pointer',
          }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
} 