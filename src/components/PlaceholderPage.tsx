import React from 'react';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="min-h-screen pt-20 px-8">
            <h1 className="text-3xl text-neon-purple font-mono mb-6">{title}</h1>
            <p className="text-gray-400">Content coming soon...</p>
        </div>
    );
};

export default PlaceholderPage;
