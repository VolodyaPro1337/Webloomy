import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/projects/${project.id}`);
    };

    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={handleCardClick}
            className="group relative rounded-xl overflow-hidden bg-bg-card border border-white/10 hover:border-neon-cyan/50 transition-colors duration-500 cursor-pointer"
        >
            {/* Image Overlay */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors z-10" />
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="p-2 bg-black/50 rounded-full hover:bg-neon-cyan hover:text-black transition-colors backdrop-blur-sm"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="p-2 bg-black/50 rounded-full hover:bg-neon-purple hover:text-white transition-colors backdrop-blur-sm"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-neon-cyan border border-neon-cyan/20">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Glitch/Scanline Effect on Hover via CSS/Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};

export default ProjectCard;
