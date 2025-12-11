import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Resume from './pages/Resume';
import PlaceholderPage from './components/PlaceholderPage';

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isResume = location.pathname === '/resume';
  return isResume ? <>{children}</> : <MainLayout>{children}</MainLayout>;
};

const App: React.FC = () => {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cases" element={<PlaceholderPage title="Cases" />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/certificates" element={<PlaceholderPage title="Certificates" />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
