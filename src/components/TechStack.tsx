import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const TechStack: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: skill.color }}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group"
                    style={{ boxShadow: `0 0 0 0 ${skill.color}00` }} // custom property for transition
                >
                    <div className="p-3 rounded-full bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                        <skill.icon size={32} style={{ color: skill.color }} />
                    </div>
                    <span className="font-medium text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default TechStack;
