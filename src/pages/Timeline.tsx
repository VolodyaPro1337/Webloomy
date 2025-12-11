import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';

const Timeline: React.FC = () => {
    return (
        <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark relative overflow-hidden" id="timeline">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto relative relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Chronology
                    </h2>
                    <p className="text-gray-400 font-mono text-sm tracking-widest text-neon-cyan/80">
                        SYSTEM_LOG::HISTORY_TRACE
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Center Line with Pulse */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
                        <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-50" />
                    </div>

                    <div className="space-y-6">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`flex flex-col md:flex-row items-center group relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Year/Time Node */}
                                <div className="md:w-1/2 flex justify-start md:justify-end px-4 md:px-8 py-2 md:py-0">
                                    <div className={`
                        font-mono font-bold text-sm tracking-wider py-1 px-3 rounded border backdrop-blur-sm transition-all duration-300
                        ${item.isSecret
                                            ? 'text-red-500 border-red-500/30 bg-red-900/10'
                                            : 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/60'}
                    `}>
                                        {item.year}
                                    </div>
                                </div>

                                {/* Central Node */}
                                <div className="absolute left-4 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 bg-bg-dark transition-colors duration-300
                        ${item.isSecret ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'border-neon-purple shadow-[0_0_10px_#bc13fe] group-hover:scale-125 group-hover:bg-neon-purple'}
                    `} />
                                    {/* Horizontal Connector Line (Desktop) */}
                                    <div className={`hidden md:block absolute top-1/2 w-8 h-px -z-10 transition-opacity duration-300 transform -translate-y-1/2
                        ${index % 2 === 0 ? 'right-full bg-gradient-to-l' : 'left-full bg-gradient-to-r'}
                        from-neon-purple/50 to-transparent opacity-0 group-hover:opacity-100
                    `} />
                                </div>

                                {/* Content Card */}
                                <div className="md:w-1/2 pl-12 md:pl-8 md:pr-0 w-full md:py-1">
                                    <div className={`
                        relative p-5 rounded-lg border backdrop-blur-md transition-all duration-300
                        ${item.isSecret
                                            ? 'bg-red-900/5 border-red-500/20 hover:border-red-500/40 text-red-100'
                                            : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-neon-cyan/30 hover:shadow-[0_4px_20px_rgba(0,243,255,0.1)]'}
                    `}>
                                        {/* Decorative Corner */}
                                        <div className={`absolute -top-px -right-px w-3 h-3 border-t border-r transition-colors duration-300
                             ${item.isSecret ? 'border-red-500' : 'border-neon-cyan opacity-0 group-hover:opacity-100'}
                        `} />
                                        <div className={`absolute -bottom-px -left-px w-3 h-3 border-b border-l transition-colors duration-300
                             ${item.isSecret ? 'border-red-500' : 'border-neon-cyan opacity-0 group-hover:opacity-100'}
                        `} />

                                        <h3 className={`text-lg font-bold mb-1 flex items-center
                            ${item.isSecret ? 'text-red-400 font-mono' : 'text-white group-hover:text-neon-cyan transition-colors'}
                        `}>
                                            {item.isSecret && <span className="mr-2 text-xs border border-red-500/50 px-1 rounded animate-pulse">TOP SECRET</span>}
                                            {item.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed
                            ${item.isSecret ? 'text-red-400/70 font-mono text-xs' : 'text-gray-400'}
                        `}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
