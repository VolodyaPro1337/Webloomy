import { Globe, Bot, Cpu, Monitor, Zap, LayoutTemplate } from 'lucide-react';

export const services = [
    {
        title: 'Web Development',
        description: 'Современные SPA, SSR (Next.js), E-commerce. Высокая производительность и SEO оптимизация.',
        icon: Globe,
        color: '#00f3ff',
    },
    {
        title: 'Telegram Bots',
        description: 'Сложные боты для автоматизации бизнеса, поддержки, магазинов и крипто-трекинга.',
        icon: Bot,
        color: '#bc13fe',
    },
    {
        title: 'AI Integration',
        description: 'Интеграция LLM (GPT-4, Claude) в бизнес-процессы. Кастомные AI агенты/ассистенты.',
        icon: Cpu,
        color: '#0aff0a',
    },
    {
        title: 'Support & Maintenance',
        description: 'Обновление существующих проектов, исправление ошибок, аудит производительности и рефакторинг.',
        icon: Zap,
        color: '#ff9900',
    },
    {
        title: 'UI/UX Design',
        description: 'Футуристичные и чистые интерфейсы. Подход, ориентированный на пользователя.',
        icon: LayoutTemplate,
        color: '#f24e1e',
    },
    {
        title: 'Automation',
        description: 'Скрипты, парсинг, автоматизация сбора и обработки данных.',
        icon: Monitor,
        color: '#2496ed',
    },
];
