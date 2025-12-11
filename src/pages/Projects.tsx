import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
    return (
        <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark" id="projects">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Selected <span className="text-neon-cyan">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Коллекция коммерческих проектов и личных разработок.
                        Е-commerce, AI инструменты, сложные веб-приложения.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
