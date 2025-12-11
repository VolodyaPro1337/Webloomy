import React from 'react';
import { motion } from 'framer-motion';

const Certificates: React.FC = () => {
    // Placeholders
    const certificates = [1, 2, 3];

    return (
        <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark" id="certificates">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Certificates
                    </h2>
                    <p className="text-gray-400">
                        Professional certifications and awards.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            className="aspect-[4/3] bg-white/5 border border-white/10 rounded-xl overflow-hidden relative group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Certificate Name Placeholder</span>
                            </div>
                            {/* Placeholder Pattern */}
                            <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
