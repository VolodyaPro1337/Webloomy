export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'roskarniz',
        title: 'Roskarniz',
        description: 'Сложный e-commerce проект с backend + frontend, продуманной архитектурой и стилем. Полностью разработанный интернет-магазин с нуля.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'Framer Motion', 'Tailwind'],
        imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop', // Placeholder
        githubUrl: 'https://github.com/volodyapro1337',
        liveUrl: 'https://roskarniz.ru',
        featured: true,
    },
    {
        id: 'ai-saas',
        title: 'AI SaaS Integrator',
        description: 'Платформа для интеграции AI-агентов в бизнес-процессы. Dashboard, аналитика, конструктор ботов.',
        tech: ['React', 'NestJS', 'OpenAI API', 'Docker'],
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop',
        featured: true,
    },
    {
        id: 'crypto-bot',
        title: 'Telegram Crypto Bot',
        description: 'Бот для торговли и мониторинга портфеля. Интеграция с Binance API, уведомления в реальном времени.',
        tech: ['Node.js', 'Telegram API', 'Redis', 'WebSockets'],
        imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2555&auto=format&fit=crop',
        featured: false,
    }
];
