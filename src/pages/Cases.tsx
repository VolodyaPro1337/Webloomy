import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Cases: React.FC = () => {
    const cases = [
        {
            id: 1,
            title: 'High-Load E-commerce Platform',
            role: 'Lead Developer',
            result: '+40% Conversion Rate',
            desc: 'Optimized performance for a large online store, implementing SSR and caching strategies.'
        },
        {
            id: 2,
            title: 'AI Trading Bot Architecture',
            role: 'Architect',
            result: '<50ms Latency',
            desc: 'Designed event-driven architecture for real-time crypto trading using Node.js and Redis.'
        }
    ];

    return (
        <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark" id="cases">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Case <span className="text-neon-purple">Studies</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        Deep dive into technical decisions and architecture.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                                    <div className="flex space-x-4 text-sm text-gray-400 mb-4">
                                        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">{item.role}</span>
                                        <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">{item.result}</span>
                                    </div>
                                    <p className="text-gray-300 max-w-2xl">{item.desc}</p>
                                </div>
                                <div className="bg-white/5 p-4 rounded-full group-hover:bg-neon-purple group-hover:text-white transition-all duration-300">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;
