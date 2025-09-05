import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Extras from './pages/Extras';
import Skills from './pages/Skills';

import NotFound from './pages/NotFound';


// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/TechBadge';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <ThemeToggle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                  <Route path="/skills" element={<Skills />} />
                <Route path="/extras" element={<Extras />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
