import React, { type ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Background from '../components/Background';

import Footer from '../components/Footer';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden flex flex-col">
            <Background />
            <Navbar />
            <main className="relative z-10 flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
