import { Code, Database, Server, Layout, Box, Cpu, MessageSquare, PenTool } from 'lucide-react';

export const skills = [
    { name: 'React', category: 'Frontend', icon: Code, color: '#61DAFB' },
    { name: 'Next.js', category: 'Frontend', icon: Layout, color: '#000000' }, // White in dark mode
    { name: 'TypeScript', category: 'Languages', icon: Code, color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'Styling', icon: PenTool, color: '#38B2AC' },
    { name: 'Node.js', category: 'Backend', icon: Server, color: '#339933' },
    { name: 'NestJS', category: 'Backend', icon: Server, color: '#E0234E' },
    { name: 'PostgreSQL', category: 'Database', icon: Database, color: '#336791' },
    { name: 'Prisma', category: 'Database', icon: Database, color: '#2D3748' },
    { name: 'Docker', category: 'DevOps', icon: Box, color: '#2496ED' },
    { name: 'AI Integration', category: 'AI', icon: Cpu, color: '#FF9900' },
    { name: 'Telegram Bots', category: 'Bot', icon: MessageSquare, color: '#26A5E4' },
    { name: 'UI/UX Design', category: 'Design', icon: PenTool, color: '#F24E1E' },
];
