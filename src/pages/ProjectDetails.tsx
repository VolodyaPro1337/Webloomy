import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Layers, Code, Globe } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-bg-dark flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                <button
                    onClick={() => navigate('/projects')}
                    className="text-neon-cyan hover:underline flex items-center gap-2"
                >
                    <ArrowLeft size={20} /> Back to Projects
                </button>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-bg-dark pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] opacity-30" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px] opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/projects"
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 rounded-xl hover:bg-neon-cyan/20 hover:scale-105 transition-all font-medium"
                                >
                                    <Globe size={20} />
                                    Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-white/10 hover:scale-105 transition-all font-medium"
                                >
                                    <Github size={20} />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-cyan rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Tech & Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl h-fit"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="text-neon-cyan" size={24} />
                            <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/5 rounded-lg hover:text-white hover:border-white/20 transition-colors cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Overview & Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="text-neon-purple" size={24} />
                                <h3 className="text-xl font-bold text-white">Overview</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        {project.features && (
                            <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-400">
                                            <span className="mr-2 text-neon-cyan">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </article>
    );
};

export default ProjectDetails;
