import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, GitCommit, Trophy, Zap, Clock } from 'lucide-react';

const StatsSection: React.FC = () => {
    const [stats, setStats] = useState([
        {
            icon: <Trophy size={24} />,
            label: "Projects Shipped",
            value: "0",
            color: "text-emerald-400"
        },
        {
            icon: <GitCommit size={24} />,
            label: "Followers",
            value: "0",
            color: "text-neon-cyan"
        },
        {
            icon: <Code size={24} />,
            label: "Following",
            value: "0",
            color: "text-neon-purple"
        },
        {
            icon: <Coffee size={24} />,
            label: "Years of Exp",
            value: "0",
            color: "text-amber-400"
        }
    ]);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const userRes = await fetch('https://api.github.com/users/VolodyaPro1337');
                const userData = await userRes.json();

                if (userData) {
                    // Calculate years since creation
                    const createdAt = new Date(userData.created_at);
                    const now = new Date();
                    const years = now.getFullYear() - createdAt.getFullYear();

                    setStats([
                        {
                            icon: <Trophy size={24} />,
                            label: "Total Projects",
                            value: userData.public_repos.toString(),
                            color: "text-emerald-400"
                        },
                        {
                            icon: <GitCommit size={24} />,
                            label: "Followers",
                            value: userData.followers.toString(),
                            color: "text-neon-cyan"
                        },
                        {
                            icon: <Code size={24} />,
                            label: "Following",
                            value: userData.following.toString(),
                            color: "text-neon-purple"
                        },
                        {
                            icon: <Coffee size={24} />,
                            label: "Years of Exp",
                            value: years.toString() + "+",
                            color: "text-amber-400"
                        }
                    ]);
                }
            } catch (error) {
                console.error("Failed to fetch GitHub stats", error);
            }
        };

        fetchGitHubStats();
    }, []);

    const skills = [
        { name: 'Frontend (React/Next)', level: 92, color: 'bg-neon-cyan' },
        { name: 'Mobile (SwiftUI)', level: 85, color: 'bg-blue-500' },
        { name: 'Backend (Node/SQL)', level: 88, color: 'bg-neon-purple' },
        { name: 'DevOps / CI/CD', level: 75, color: 'bg-yellow-400' },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 mb-4">
                    <Zap size={16} className="text-yellow-400 mr-2" />
                    <span className="text-sm font-mono text-gray-300">LEVEL 24 DEVELOPER</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-white">
                    <span className="text-neon-cyan">&lt;</span> Character Stats <span className="text-neon-cyan">/&gt;</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Real-time attributes synchronized with GitHub API.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Stat Cards */}
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-bg-dark border border-white/10 p-6 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all group"
                        >
                            <div className={`${stat.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1 font-mono">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}

                    {/* WakaTime-style Activity Graph Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: '100%' }}
                        viewport={{ once: true }}
                        className="col-span-2 bg-black/30 border border-white/10 rounded-xl p-6 mt-4 relative overflow-hidden"
                    >
                        <h4 className="text-sm text-gray-400 mb-4 flex items-center">
                            <Clock size={16} className="mr-2" /> Recent Activity (GitHub)
                        </h4>
                        <div className="flex items-end space-x-1 h-24">
                            {[40, 65, 30, 80, 55, 90, 45, 70, 60, 85, 50, 75, 95, 60].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: 0.2 + (i * 0.05) }}
                                    className="flex-1 bg-neon-cyan/20 hover:bg-neon-cyan/50 rounded-t-sm transition-colors"
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right: Skill Bars */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-8 flex items-center">
                        <Trophy size={24} className="text-yellow-400 mr-3" />
                        Skill Proficiency
                    </h3>

                    <div className="space-y-8">
                        {skills.map((skill, index) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-mono text-gray-300">{skill.name}</span>
                                    <span className="font-bold text-neon-cyan">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-black/50 rounded-full overflow-hidden border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                                        className={`h-full ${skill.color} relative shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-sm text-gray-400 italic">
                            * All stats are fetched dynamically from the GitHub API.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
