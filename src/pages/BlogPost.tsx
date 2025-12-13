import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { posts } from '../data/posts';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = posts.find(p => p.id === id);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="bg-bg-dark min-h-screen text-white font-sans selection:bg-neon-purple selection:text-white pb-20">
            {/* Scroll Progress Bar (Optional, simpler to just have content for now) */}

            {/* Hero Section with Image Background */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/50 via-bg-dark/80 to-bg-dark" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-16 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 text-sm font-medium backdrop-blur-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {post.title}
                        </h1>

                        <div className="flex items-center text-gray-300 space-x-6 text-lg">
                            <span className="flex items-center">
                                <Calendar size={20} className="mr-2 text-neon-purple" />
                                {post.date}
                            </span>
                            <span className="flex items-center">
                                <Clock size={20} className="mr-2 text-neon-purple" />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <main className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto -mt-10 relative z-20">
                <Link
                    to="/blog"
                    className="inline-flex items-center text-gray-400 hover:text-neon-cyan transition-colors mb-12 group bg-bg-dark/80 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm"
                >
                    <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Content Glass Card */}
                    <div className="bg-bg-dark/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                        <div className="prose prose-invert prose-lg md:prose-xl max-w-none
                            prose-headings:font-bold prose-headings:text-white prose-headings:font-mono prose-headings:scroll-mt-24
                            prose-h1:text-4xl prose-h1:mb-8 prose-h1:border-b prose-h1:border-white/10 prose-h1:pb-4
                            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-neon-cyan
                            prose-h3:text-xl prose-h3:mt-8 prose-h3:text-gray-200
                            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-neon-cyan prose-a:font-medium prose-a:border-b prose-a:border-neon-cyan/30 prose-a:no-underline hover:prose-a:border-neon-cyan hover:prose-a:text-neon-cyan/80 transition-colors
                            prose-blockquote:border-l-4 prose-blockquote:border-neon-purple prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:my-8
                            prose-code:text-neon-pink prose-code:bg-[#0d1117] prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-white/10 prose-code:before:content-none prose-code:after:content-none
                            prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:shadow-2xl prose-pre:p-6 prose-pre:my-8
                            prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:my-8
                            prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-ul:space-y-2 prose-ul:marker:text-neon-purple
                            prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6 prose-ol:space-y-2 prose-ol:marker:text-neon-cyan
                            prose-strong:text-white prose-strong:font-bold">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    code(props: any) {
                                        const { children, className, node, ...rest } = props
                                        const match = /language-(\w+)/.exec(className || '')
                                        return match ? (
                                            <div className="relative group">
                                                <div className="absolute top-3 right-4 text-xs font-mono text-gray-500 select-none uppercase">{match[1]}</div>
                                                <code className={className} {...rest}>
                                                    {children}
                                                </code>
                                            </div>
                                        ) : (
                                            <code className={className} {...rest}>
                                                {children}
                                            </code>
                                        )
                                    }
                                }}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </motion.article>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 rounded-2xl p-6 border border-white/5">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://github.com/VolodyaPro1337.png"
                                alt="Author"
                                className="w-16 h-16 rounded-full border-2 border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                            />
                            <div>
                                <h3 className="font-bold text-lg text-white">VolodyaPro</h3>
                                <p className="text-gray-400 text-sm">Full Stack Developer & UI Enthusiast. Building the web of 2025.</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/30 rounded-full transition-all text-neon-cyan font-medium group whitespace-nowrap">
                            <Share2 size={18} className="group-hover:text-neon-cyan transition-colors" />
                            Share Article
                        </button>
                    </div>
                </motion.div>

                {/* Read Next Section */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="text-neon-purple">//</span> Read Next
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.filter(p => p.id !== post.id).slice(0, 2).map((nextPost) => (
                            <Link to={`/blog/${nextPost.id}`} key={nextPost.id} className="group block bg-bg-dark/50 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-purple/50 transition-all">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80 z-10" />
                                    <img
                                        src={nextPost.imageUrl}
                                        alt={nextPost.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                                        {nextPost.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10 text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                                        {nextPost.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                        {nextPost.excerpt}
                                    </p>
                                    <span className="text-xs text-neon-purple font-mono flex items-center gap-1">
                                        Read Article <ArrowLeft className="rotate-180 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BlogPost;
