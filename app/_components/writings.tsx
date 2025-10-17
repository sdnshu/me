import React from 'react'

import { ArrowUpRight } from 'lucide-react';

const posts = [
    {
        title: 'Why I Chose JavaScript First',
        description: 'Exploring my decision to start with JavaScript and how it shaped my learning journey in web development.',
        date: 'January 2024',
        link: '#',
    },
    {
        title: 'Building My First React App: Lessons Learned',
        description: 'A reflection on the challenges and victories of creating my first React application, from component design to state management.',
        date: 'December 2023',
        link: '#',
    },
    {
        title: 'The Power of Starting Small',
        description: 'How focusing on small, achievable projects helped me build confidence and avoid tutorial hell.',
        date: 'November 2023',
        link: '#',
    },
];

const Writings = () => {
    return (
        <section className="mb-16 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Writing
            </h2>
            <div className="space-y-8">
                {posts.map((post, index) => (
                    <a
                        key={index}
                        href={post.link}
                        className="block group hover:bg-neutral-50 dark:hover:bg-neutral-900/50 -mx-4 px-4 py-3 rounded-lg transition-colors"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-medium group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                                {post.title}
                            </h3>
                            <ArrowUpRight
                                size={18}
                                className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors flex-shrink-0 ml-2"
                            />
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
                            {post.description}
                        </p>
                        <p className="text-xs text-neutral-500">
                            {post.date}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export { Writings }