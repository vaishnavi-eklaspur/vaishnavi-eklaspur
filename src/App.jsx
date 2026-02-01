import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsSection from './components/ProjectsSection';
import SkillsetBoard from './components/SkillsetBoard';
import CareerTimeline from './components/CareerTimeline';
import ContactForm from './components/ContactForm';
import Certificates from './pages/Certificates';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app">
            {/* Section 1: What I've Built (Projects) */}
            <ProjectsSection />
            
            {/* Section 2: Skillset Board */}
            <SkillsetBoard />
            
            {/* Section 3: Career Timeline */}
            <CareerTimeline />
            
            {/* Section 4: Contact Form */}
            <ContactForm />
            
            {/* Footer */}
            <footer className="app-footer">
              <div className="footer-content">
                <p className="footer-text">
                  Built with React, GSAP, and passion ✨
                </p>
                <p className="footer-copyright">
                  © 2024 Vaishnavi Eklaspur. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        } />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;
