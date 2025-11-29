// src/App.js

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Home from './Home';
import About from './About';
import ContactPage from './ContactPage';
import NotFound from './NotFound.js';
import ProjectPage from './ProjectPage.js';
import ProjectDetailPage from './ProjectDetailPage.js';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/Portfolio/about" element={<About />} />
            <Route path="/Portfolio/contact" element={<ContactPage />} />
            
            {/* ✅ Projects List Page */}
            <Route path="/Portfolio/projects" element={<ProjectPage />} />
            
            {/* ✅ Individual Project Detail Page */}
            <Route path="/Portfolio/projects/:id" element={<ProjectDetailPage />} />
            
            {/* 404 route - this should be the last route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;