import React from 'react';
import { Mail, Send, Globe, Github } from 'lucide-react';

const Resume: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 p-8 md:p-16 font-sans">
            {/* Print-only styles */}
            <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { -webkit-print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      `}</style>

            <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden print:shadow-none">

                {/* Header */}
                <div className="bg-[#050505] text-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Vladimir</h1>
                        <h2 className="text-xl md:text-2xl text-[#00f3ff] font-mono mb-4">Full-stack JS Developer</h2>
                        <p className="text-gray-400 max-w-lg">
                            Разрабатываю сложные веб-системы, e-commerce проекты и AI-инструменты.
                            Фокус на производительности, современной архитектуре и чистом коде.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0 space-y-2 text-sm text-gray-300">
                        <div className="flex items-center space-x-2">
                            <Mail size={16} className="text-[#00f3ff]" />
                            <span>kuleminson@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Send size={16} className="text-[#00f3ff]" />
                            <span>@volodyapro1337</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe size={16} className="text-[#00f3ff]" />
                            <span>webloomy.ru</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Github size={16} className="text-[#00f3ff]" />
                            <span>github.com/volodyapro1337</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Left Column */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Experience */}
                        <section>
                            <h3 className="text-2xl font-bold border-b-2 border-gray-100 pb-2 mb-6 text-[#050505] flex items-center">
                                Experience <span className="ml-2 text-[#bc13fe]">///</span>
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="text-xl font-bold text-gray-900">Full-stack Developer</h4>
                                        <span className="text-sm font-mono text-gray-500">2024 - Present</span>
                                    </div>
                                    <p className="text-[#bc13fe] font-medium mb-2">Freelance</p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                                        <li>Разработка сложных E-commerce решений (Next.js, Prisma, PostgreSQL).</li>
                                        <li>Создание AI SaaS платформ и интеграция LLM в бизнес-процессы.</li>
                                        <li>Архитектура и развертывание высоконагруженных Telegram-ботов.</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="text-xl font-bold text-gray-900">Web Developer</h4>
                                        <span className="text-sm font-mono text-gray-500">2021 - 2023</span>
                                    </div>
                                    <p className="text-[#bc13fe] font-medium mb-2">Pet Projects & Startups</p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                                        <li>Разработка SPA приложений на React.</li>
                                        <li>Автоматизация сбора данных и парсинг (Python, Node.js).</li>
                                        <li>Создание и поддержка Open Source инструментов.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h3 className="text-2xl font-bold border-b-2 border-gray-100 pb-2 mb-6 text-[#050505] flex items-center">
                                Key Projects <span className="ml-2 text-[#bc13fe]">///</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg">Roskarniz <span className="text-xs font-normal text-white bg-[#050505] px-2 py-0.5 rounded ml-2">Live</span></h4>
                                    <p className="text-sm text-gray-600 mt-1">Полнофункциональный интернет-магазин. Next.js, TypeScript, PostgreSQL. Индивидуальный дизайн и сложная логика корзины.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg">AI SaaS Integrator</h4>
                                    <p className="text-sm text-gray-600 mt-1">Платформа для создания и управления AI-агентами. Dashboard, Analytics, Stripe integration.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <section>
                            <h3 className="text-xl font-bold border-b-2 border-gray-100 pb-2 mb-4 text-[#050505]">
                                Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'Tailwind CSS', 'Framer Motion', 'Git', 'Linux'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-[#050505] text-white text-xs rounded-full print:border print:border-gray-800 print:text-black print:bg-white">{skill}</span>
                                ))}
                            </div>
                        </section>

                        {/* Automation & AI */}
                        <section>
                            <h3 className="text-xl font-bold border-b-2 border-gray-100 pb-2 mb-4 text-[#050505]">
                                AI & Bots
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>Telegram Bot API</li>
                                <li>OpenAI / Claude API</li>
                                <li>Python Automation</li>
                                <li>Data Scraping</li>
                            </ul>
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-xl font-bold border-b-2 border-gray-100 pb-2 mb-4 text-[#050505]">
                                Languages
                            </h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Russian</span>
                                    <span className="font-bold">Native</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>English</span>
                                    <span className="font-bold">B1/B2</span>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-xl font-bold border-b-2 border-gray-100 pb-2 mb-4 text-[#050505]">
                                Education
                            </h3>
                            <div className="text-sm text-gray-600 mb-6">
                                <p className="font-bold text-gray-900">College of IT</p>
                                <p>Web Development</p>
                                <p className="text-xs text-gray-500 mt-1">2021 - 2025</p>
                            </div>

                            <h4 className="font-bold text-gray-900 text-sm mb-3">Courses & Certifications</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-semibold text-gray-800">LabEx</span>
                                        <span className="text-xs text-gray-400">Linux / DevOps</span>
                                    </div>
                                    <p className="text-xs">Linux, DevOps, Cybersecurity</p>
                                </li>
                                <li>
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-semibold text-gray-800">LabEx</span>
                                        <span className="text-xs text-gray-400">Backend</span>
                                    </div>
                                    <p className="text-xs">Python, PostgreSQL</p>
                                </li>
                                <li>
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-semibold text-gray-800">LabEx</span>
                                        <span className="text-xs text-gray-400">Frontend</span>
                                    </div>
                                    <p className="text-xs">React Development</p>
                                </li>
                                <li>
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-semibold text-gray-800">Scrimba</span>
                                        <span className="text-xs text-gray-400">Frontend</span>
                                    </div>
                                    <p className="text-xs">Learn React (Advanced)</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Footer for PDF */}
                <div className="bg-gray-50 p-8 text-center text-xs text-gray-400 border-t print:hidden">
                    <button
                        onClick={handlePrint}
                        className="bg-[#00f3ff] text-black font-bold px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all no-print"
                    >
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resume;
