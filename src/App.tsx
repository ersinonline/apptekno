import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RedirectPage from './pages/RedirectPage';
import DigiturkInternetForm from './pages/forms/DigiturkInternetForm';
import DSmartInternetForm from './pages/forms/DSmartInternetForm';
import SuperonlineForm from './pages/forms/SuperonlineForm';
// Import other form pages...

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yonlendirme" element={<RedirectPage />} />
        <Route path="/form/digiturk-internet" element={<DigiturkInternetForm />} />
        <Route path="/form/dsmart-internet" element={<DSmartInternetForm />} />
        <Route path="/form/superonline" element={<SuperonlineForm />} />
        {/* Add other form routes... */}
      </Routes>
    </Router>
  );
}