import React from 'react';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';

const About: React.FC = () => {
    return (
        <div className="pt-16 min-h-screen bg-bg-dark">
            <AboutSection />
            <StatsSection />
        </div>
    );
};

export default About;
