import wishlistImg from '../assets/projects/wishlist.webp';
import roskarnizImg from '../assets/projects/roskarniz.webp';
import caffeinateImg from '../assets/projects/caffeinate.webp'; // Placeholder

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    features?: string[];
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
        longDescription: 'Этот проект создан, чтобы вернуть магию обмена подарками. Пользователи могут создавать анонимные вишлисты, защищать их PIN-кодом и делиться с друзьями. Интеграция с Google Gemini AI автоматически дополняет описания товаров, делая список желаний более информативным и привлекательным. Интерфейс полностью адаптирован под праздничную атмосферу с интерактивным снегом и плавными анимациями.',
        features: [
            'Анонимная авторизация без регистрации',
            'PIN-защита (Gatekeeper UI) для редактирования',
            'AI-обогащение товаров (Gemini 3.0)',
            'Интерактивный снегопад и праздничная темизация',
            'Drag & Drop загрузка изображений'
        ],
        tech: ['Next.js 14', 'PostgreSQL', 'Prisma ORM', 'Google Gemini AI', 'Framer Motion', 'TailwindCSS'],
        imageUrl: wishlistImg,
        githubUrl: 'https://github.com/volodyapro1337/wishlist',
        liveUrl: 'https://wishlist.webloomy.ru',
        featured: true,
    },
    {
        id: 'roskarniz',
        title: 'Roskarniz',
        description: 'Сложный e-commerce проект с backend + frontend, продуманной архитектурой и стилем. Полностью разработанный интернет-магазин с нуля.',
        longDescription: 'Полноценная e-commerce платформа для продажи карнизов и штор. Проект включает в себя публичную витрину с фильтрацией и поиском, корзину, оформление заказа и административную панель для управления товарами. Особое внимание уделено SEO-оптимизации и производительности (SSR). Дизайн выполнен в строгом, современном стиле, подчеркивающем премиальность продукции.',
        features: [
            'Server-Side Rendering (SSR) для SEO',
            'Сложная система фильтрации товаров',
            'Административная панель (CMS)',
            'Интеграция с платежными системами',
            'Адаптивный дизайн Mobile-First'
        ],
        tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redux Toolkit', 'Framer Motion'],
        imageUrl: roskarnizImg,
        githubUrl: 'https://github.com/volodyapro1337',
        liveUrl: 'https://roskarniz.ru',
        featured: true,
    },
    {
        id: 'caffeinate-plus',
        title: 'CaffeinatePlus',
        description: 'Программа лояльности для кофеен: iOS-приложение (SwiftUI) и Backend (Express/MySQL). Поддержка QR-сканирования, ачивок и предзаказов.',
        longDescription: 'Комплексное решение для автоматизации программы лояльности в кофейнях. Мобильное приложение позволяет гостям накапливать баллы, получать ачивки за покупки и делать предзаказы. Backend обеспечивает синхронизацию данных в реальном времени, управление меню и верификацию QR-кодов. Проект демонстрирует полный цикл разработки: от базы данных до публикации в AppStore.',
        features: [
            'QR-сканирование для начисления баллов',
            'Система ачивок и наград',
            'Карта кофеен (MapKit)',
            'Предзаказ напитков',
            'Безопасная аутентификация API'
        ],
        tech: ['SwiftUI', 'Node.js', 'Express', 'MySQL', 'AVFoundation', 'MapKit'],
        imageUrl: caffeinateImg,
        githubUrl: 'https://github.com/VolodyaPro1337/CaffeinatePlus',
        featured: true,
    },
];
