import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Edukasi from "./pages/edukasi/Edukasi";
import Gempabumi from "./pages/gempabumi/Gempabumi";
import EdukasiGempa from "./pages/edukasi/EdukasiGempa";
import EdukasiTsunami from "./pages/edukasi/EdukasiTsunami";
import Dashboard from "./pages/admin/Dashboard";
import Sos from "./pages/admin/Sos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/gempabumi" element={<Gempabumi />} />
        <Route path="/edukasigempa" element={<EdukasiGempa />} />
        <Route path="/edukasitsunami" element={<EdukasiTsunami />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sos" element={<Sos />} />
      </Routes>
    </Router>
  );
}

export default App;
