import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const Services: React.FC = () => {
    return (
        <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark" id="services">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        My <span className="text-neon-cyan">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Комплексные решения для вашего бизнеса. От идеи до реализации и поддержки.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl relative group overflow-hidden"
                        >
                            {/* Neon Border Effect on Hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/50 rounded-2xl transition-colors duration-300"
                                style={{ borderColor: `transparent` }} // dynamic override handled by CSS class for now, or use style
                            />
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <service.icon size={100} color={service.color} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: service.color }}>
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
