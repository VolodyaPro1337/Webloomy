import React from 'react';
import { Github, Send, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-dark border-t border-white/10 py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
                    <div className="mb-4 md:mb-0">
                        <p className="font-mono text-sm">© {new Date().getFullYear()} Volodyapro1337. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/volodyapro1337" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://t.me/volodyapro1337" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">
                            <Send size={20} />
                        </a>
                        <a href="mailto:kuleminson@gmail.com" className="hover:text-neon-cyan transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
