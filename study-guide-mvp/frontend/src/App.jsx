import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subject from './pages/Subject';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar could go here */}
        <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--primary)' }}>StudyPlatform<span style={{ color: 'white' }}>.MVP</span></span>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:id" element={<Subject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
