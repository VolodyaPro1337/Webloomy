import React from 'react';
import { motion } from 'framer-motion';
import TechStack from './TechStack';
import { Code2, Zap, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-bg-dark relative overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:flex md:items-start md:space-x-12"
                >
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center">
                            <span className="text-neon-purple mr-2">#</span> About Me
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-400">
                            <p className="text-lg mb-4">
                                Владимир — Full-stack JS разработчик. Работаю с React, Next.js, Node, Nest, Express, PostgreSQL, Prisma, Docker.
                            </p>
                            <p className="mb-4">
                                Создаю сложные сайты, AI-интеграции, Telegram-ботов любой сложности, Web-приложения и продуманный UX/UI.
                                У меня есть опыт запуска реальных проектов и множество pet-проектов, демонстрирующих мои навыки.
                            </p>
                            <div className="flex items-center space-x-4 mt-8">
                                <div className="flex items-center space-x-2 text-neon-cyan">
                                    <Code2 size={20} />
                                    <span className="font-mono">Clean Code</span>
                                </div>
                                <div className="flex items-center space-x-2 text-neon-purple">
                                    <Zap size={20} />
                                    <span className="font-mono">Fast Dev</span>
                                </div>
                                <div className="flex items-center space-x-2 text-green-400">
                                    <Shield size={20} />
                                    <span className="font-mono">Reliable</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10 relative">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-neon-purple/20 w-24 h-24 blur-xl rounded-full" />
                        <h3 className="text-xl font-bold mb-4 text-white">Approach</h3>
                        <blockquote className="italic text-gray-300 border-l-4 border-neon-cyan pl-4">
                            “Чистый код, скорость разработки, надёжность, продуманность каждого элемента интерфейса.”
                        </blockquote>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-8 text-center text-white">Tech Stack</h3>
                    <TechStack />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
