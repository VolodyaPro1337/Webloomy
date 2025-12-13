import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';

const Blog: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="bg-bg-dark min-h-screen text-white font-sans selection:bg-neon-cyan selection:text-bg-dark">
            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
                        <span className="text-neon-cyan">&lt;</span> Engineering Blog <span className="text-neon-cyan">/&gt;</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Thoughts on code, architecture, and the future of tech.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {currentPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-cyan/50 hover:bg-white/10 transition-all duration-300"
                        >
                            <Link to={`/blog/${post.id}`} className="block h-48 overflow-hidden relative">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-neon-cyan flex items-center font-bold">
                                        Read Article <ArrowRight size={18} className="ml-2" />
                                    </span>
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-gray-400 mb-4 space-x-4">
                                    <span className="flex items-center">
                                        <Calendar size={14} className="mr-1 text-neon-purple" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock size={14} className="mr-1 text-neon-purple" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <Link to={`/blog/${post.id}`} className="block mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-neon-cyan border border-white/10">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-12">
                        <button
                            onClick={() => paginate(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 hover:border-neon-cyan transition-all"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`w-10 h-10 rounded-lg border transition-all ${currentPage === i + 1
                                    ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 hover:border-neon-cyan transition-all"
                        >
                            Next
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Blog;
