import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
    const [text, setText] = useState('');
    const fullText = "Full-stack JS Developer";
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % 2; // Can add more phrases later
            const currentFullText = i === 0 ? fullText : "Web Systems Architect";

            setText(isDeleting
                ? currentFullText.substring(0, text.length - 1)
                : currentFullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 100);

            if (!isDeleting && text === currentFullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-cyan font-mono mb-4 text-lg md:text-xl tracking-widest uppercase">
                        Hello, World! I am
                    </h2>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight relative inline-block group">
                        <span className="relative z-10 group-hover:text-neon-cyan transition-colors duration-300">
                            Vladimir
                        </span>
                        <span className="block text-2xl md:text-3xl text-gray-400 mt-2 font-mono">
                            (Volodyapro1337)
                        </span>
                        <div className="absolute -inset-1 bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </h1>

                    <div className="h-12 md:h-16 mb-8 text-2xl md:text-4xl text-neon-purple font-mono font-bold">
                        {text}
                        <span className="animate-pulse">|</span>
                    </div>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                        Разрабатываю сайты, AI-инструменты, Telegram-ботов и сложные web-системы.
                        Фокус на <span className="text-white font-medium">производительности</span> и <span className="text-white font-medium">футуристичном UI</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-md transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 border border-neon-cyan group-hover:bg-neon-cyan/10 transition-colors" />
                            <div className="relative flex items-center space-x-2 text-neon-cyan">
                                <span className="font-bold">Hire Me</span>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>

                        <button
                            onClick={() => window.open('/resume', '_blank')}
                            className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 rounded-md transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
                        >
                            <div className="flex items-center space-x-2 text-white">
                                <Download size={20} />
                                <span className="font-bold">Download CV</span>
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
