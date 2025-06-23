import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Simulated bin data
const bins = [
  { id: 1, lat: 28.6139, lng: 77.209, fill: 80, area: 'Connaught Place' },
  { id: 2, lat: 28.7041, lng: 77.1025, fill: 30, area: 'Chandni Chowk' },
  { id: 3, lat: 28.5355, lng: 77.391, fill: 95, area: 'Noida Sector 18' },
  { id: 4, lat: 28.4595, lng: 77.0266, fill: 20, area: 'Gurgaon Cyber Hub' },
];

function ProblemBanner() {
  return (
    <div className="w-screen bg-gradient-to-r from-red-100 via-yellow-100 to-green-100 py-4 px-0 flex justify-center border-b-2 border-green-700">
      <div className="max-w-screen-2xl w-full flex items-center gap-8 px-16">
        <span className="text-3xl">🚨</span>
        <div className="text-lg font-semibold text-gray-800">
          <span className="text-red-700 font-bold">Overflowing bins</span> and <span className="text-yellow-700 font-bold">inefficient pickups</span> are a major urban challenge. <span className="text-green-700 font-bold">SmartBinSense</span> uses IoT, ML, and citizen input to make cities cleaner and smarter.
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const totalBins = bins.length;
  const overflows = bins.filter(b => b.fill > 80).length;
  const requests = 12; // Simulated
  return (
    <div className="w-full bg-white border-b flex justify-center py-3 shadow-sm">
      <div className="max-w-screen-2xl w-full flex gap-16 justify-center text-lg font-semibold px-16">
        <div className="flex items-center gap-2"><span className="text-green-700 text-2xl">🗑️</span> Total Bins: <span className="text-gray-900">{totalBins}</span></div>
        <div className="flex items-center gap-2"><span className="text-red-700 text-2xl">⚠️</span> Overflows: <span className="text-red-700">{overflows}</span></div>
        <div className="flex items-center gap-2"><span className="text-blue-700 text-2xl">📥</span> Requests: <span className="text-blue-700">{requests}</span></div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur shadow-sm w-full">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between px-16 py-3">
        <div className="flex items-center gap-2">
          <span className="text-green-700 text-3xl font-extrabold tracking-tight">🗑️ SmartBinSense</span>
        </div>
        <div className="flex gap-12 text-xl font-bold">
          <NavLink to="/" end className={({isActive}) => isActive ? 'text-green-800 border-b-2 border-green-700 pb-1' : 'text-gray-700 hover:text-green-700'}>Home</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'text-green-800 border-b-2 border-green-700 pb-1' : 'text-gray-700 hover:text-green-700'}>Dashboard</NavLink>
          <NavLink to="/admin" className={({isActive}) => isActive ? 'text-green-800 border-b-2 border-green-700 pb-1' : 'text-gray-700 hover:text-green-700'}>Admin</NavLink>
          <NavLink to="/feedback" className={({isActive}) => isActive ? 'text-green-800 border-b-2 border-green-700 pb-1' : 'text-gray-700 hover:text-green-700'}>Feedback</NavLink>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <motion.section initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="w-full flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-green-100 via-blue-50 to-white border-b">
      <h1 className="text-6xl font-extrabold text-green-800 mb-4 drop-shadow-lg">SmartBinSense</h1>
      <p className="text-2xl text-gray-800 max-w-3xl mb-8">India's cities generate <span className='text-red-700 font-bold'>tons of waste</span> daily. Overflowing bins, missed pickups, and static schedules make it worse. <span className="text-green-700 font-bold">SmartBinSense</span> brings <span className="text-blue-700 font-bold">data-driven, citizen-powered</span> solutions for a cleaner tomorrow.</p>
      <NavLink to="/" className="inline-block bg-green-700 text-white px-12 py-4 rounded-full shadow-lg font-bold text-2xl hover:bg-green-800 transition">Request a Bin</NavLink>
    </motion.section>
  );
}

function BinRequest() {
  const [form, setForm] = useState({ location: '', photo: null, footfall: '' });
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setForm(f => ({ ...f, photo: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="w-full max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-2xl mt-12 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-green-800 flex items-center gap-2"><span>➕</span>Request a New Bin</h2>
      {submitted ? (
        <div className="text-green-700 font-semibold text-xl">Request submitted! Thank you for helping keep your city clean.</div>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-semibold text-gray-800">Location (Area/Address)</label>
            <input name="location" required className="w-full border border-gray-300 rounded px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300 text-lg" value={form.location} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-800">Photo (optional)</label>
            <input name="photo" type="file" accept="image/*" onChange={handleChange} className='border border-1 border-gray-300 rounded p-4 w-full bg-gray-50 text-black' />
            {preview && <img src={preview} alt="preview" className="mt-2 h-32 rounded shadow border border-1 border-black" />}
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-800">Estimated Footfall (per day)</label>
            <input name="footfall" type="number" min="1" required className="w-full border border-gray-300 rounded px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300 text-lg" value={form.footfall} onChange={handleChange} />
          </div>
          <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 font-bold text-lg">Submit Request</button>
        </form>
      )}
    </motion.div>
  );
}

function BinDashboard() {
  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="w-full max-w-6xl mx-auto bg-white p-12 rounded-3xl shadow-2xl mt-12 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-green-800 flex items-center gap-2"><span>📊</span>Bin Status Dashboard</h2>
      <div className="h-[500px] rounded-xl overflow-hidden mb-8 border border-gray-200 relative">
        <MapContainer center={[28.6139, 77.209]} zoom={11} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {bins.map(bin => (
            <Marker key={bin.id} position={[bin.lat, bin.lng]}>
              <Popup>
                <div>
                  <div className="font-bold text-gray-900">{bin.area}</div>
                  <div>Fill Level: <span className={bin.fill > 80 ? 'text-red-700 font-bold' : bin.fill > 50 ? 'text-yellow-700' : 'text-green-700'}>{bin.fill}%</span></div>
                  {bin.fill > 80 && <div className="text-red-700 font-bold mt-2">Overflow Warning!</div>}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        {/* Overlay bin icons for visual effect */}
        <div className="absolute top-4 right-8 flex gap-4">
          {bins.map(bin => (
            <span key={bin.id} className={bin.fill > 80 ? 'text-red-700 text-3xl animate-bounce' : 'text-green-700 text-3xl'}>🗑️</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {bins.map(bin => (
          <div key={bin.id} className={`p-6 rounded-xl bg-gray-50 border-2 flex flex-col items-center gap-2 shadow-sm ${bin.fill > 80 ? 'border-red-700' : 'border-green-200'}`}>
            <span className={bin.fill > 80 ? 'text-red-700 text-4xl' : 'text-green-700 text-4xl'}>🗑️</span>
            <div className="font-semibold text-gray-900 text-lg">{bin.area}</div>
            <div>Fill Level: <span className={bin.fill > 80 ? 'text-red-700 font-bold' : bin.fill > 50 ? 'text-yellow-700' : 'text-green-700'}>{bin.fill}%</span></div>
            {bin.fill > 80 && <div className="text-red-700 font-bold">Overflow!</div>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function AdminScheduler() {
  // Simulate a simple route: bins sorted by fill descending
  const sorted = [...bins].sort((a, b) => b.fill - a.fill);
  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="w-full h-full max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-2xl mt-12 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-green-800 flex items-center gap-2"><span>🛻</span>Admin Cleanup Scheduler</h2>
      <div className="mb-4 text-gray-800 text-lg">Suggested Route (by fill level):</div>
      <ol className="list-decimal pl-6 space-y-4">
        {sorted.map(bin => (
          <li key={bin.id}>
            <span className="font-semibold text-gray-900 text-lg">{bin.area}</span> — Fill: <span className={bin.fill > 80 ? 'text-red-700 font-bold' : bin.fill > 50 ? 'text-yellow-700' : 'text-green-700'}>{bin.fill}%</span>
            {bin.fill > 80 && <span className="ml-2 text-red-700 font-bold">(Overflow!)</span>}
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

function Feedback() {
  const [form, setForm] = useState({ area: '', issue: '' });
  const [submitted, setSubmitted] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="w-full max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-2xl mt-12 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-green-800 flex items-center gap-2"><span>📣</span>Report Missed Pickup / Feedback</h2>
      {submitted ? (
        <div className="text-green-700 font-semibold text-xl">Thank you for your feedback!</div>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-semibold text-gray-800">Area/Location</label>
            <input name="area" required className="w-full border border-gray-300 rounded px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300 text-lg" value={form.area} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-800">Issue/Feedback</label>
            <textarea name="issue" required className="w-full border border-gray-300 rounded px-4 py-3 text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300 text-lg" value={form.issue} onChange={handleChange} />
          </div>
          <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 font-bold text-lg">Submit</button>
        </form>
      )}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <>
            <Hero />
            <BinRequest />
          </>
        } />
        <Route path="/dashboard" element={<BinDashboard />} />
        <Route path="/admin" element={<AdminScheduler />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-blue-50 to-white w-full overflow-x-hidden">
        <Navbar />
        <ProblemBanner />
        <StatsBar />
        <main className="flex-1 w-full flex flex-col items-center bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center bg-no-repeat bg-fixed" style={{minHeight:'700px'}}>
          <div className="w-full bg-white/80 pb-24">
            <AnimatedRoutes />
          </div>
        </main>
        <footer className="text-gray-600 text-base text-center py-8 border-t mt-8 bg-white/90 font-medium w-full">&copy; {new Date().getFullYear()} SmartBinSense | Hackathon Prototype</footer>
      </div>
    </Router>
  );
}
