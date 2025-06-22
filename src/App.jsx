import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SubmitMaterial from './pages/SubmitMaterial';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit-material" element={<SubmitMaterial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;