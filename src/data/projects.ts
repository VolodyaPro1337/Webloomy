import wishlistImg from '../assets/projects/wishlist.webp';
import roskarnizImg from '../assets/projects/roskarniz.webp';

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
        id: 'wishlist',
        title: 'New Year Wishlist',
        description: 'Праздничный сервис вишлистов с анонимной авторизацией, PIN-защитой и AI-обогащением товаров. Атмосферный UI с эффектами снега.',
        tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Framer Motion'],
        imageUrl: wishlistImg,
        githubUrl: 'https://github.com/volodyapro1337/wishlist',
        liveUrl: 'https://wishlist.webloomy.ru',
        featured: true,
    },
    {
        id: 'roskarniz',
        title: 'Roskarniz',
        description: 'Сложный e-commerce проект с backend + frontend, продуманной архитектурой и стилем. Полностью разработанный интернет-магазин с нуля.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'Framer Motion', 'Tailwind'],
        imageUrl: roskarnizImg,
        githubUrl: 'https://github.com/volodyapro1337',
        liveUrl: 'https://roskarniz.ru',
        featured: true,
    },
];
