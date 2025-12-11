import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, MessageSquare } from 'lucide-react';

const Contacts: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        // Simulate sending
        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);
            setTimeout(() => setIsSent(false), 3000);
            setFormState({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-bg-dark" id="contacts">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                            Let's <span className="text-neon-purple">Connect</span>
                        </h2>
                        <p className="text-gray-400 mb-12 text-lg">
                            Готов обсудить ваш проект, идею или предложение.
                            Доступен для freelance-заказов и долгосрочного сотрудничества.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
                                    <Mail size={24} className="text-neon-purple group-hover:text-neon-cyan transition-colors" />
                                </div>
                                <span className="text-lg">kuleminson@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
                                    <MapPin size={24} className="text-neon-purple group-hover:text-neon-cyan transition-colors" />
                                </div>
                                <span className="text-lg">Russia, Digital World</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300 cursor-pointer group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
                                    <MessageSquare size={24} className="text-neon-purple group-hover:text-neon-cyan transition-colors" />
                                </div>
                                <span className="text-lg">@volodyapro1337</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative">
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center space-x-2 transition-all duration-300 
                            ${isSent ? 'bg-green-500' : 'bg-neon-purple hover:bg-neon-purple/80'}
                            ${isSending ? 'opacity-70 cursor-wait' : ''}
                        `}
                            >
                                {isSending ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : isSent ? (
                                    <span>Sent Successfully!</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contacts;
