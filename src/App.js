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

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path='/Projec' element = {<ProjectPage/>} />
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