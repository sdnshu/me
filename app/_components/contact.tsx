import React from 'react'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/yourusername',
        icon: Github,
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/yourusername',
        icon: Linkedin,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/yourusername',
        icon: Twitter,
    },
    {
        name: 'Email',
        url: 'mailto:your.email@example.com',
        icon: Mail,
    },
];

const Contact = () => {
    return (
        <section className="mb-16 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Connect
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
                I'm always excited to connect with other developers, especially those who are
                also on their learning journey. Feel free to reach out if you want to collaborate
                on a project, discuss code, or just chat about technology.
            </p>
            <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                        >
                            <Icon size={18} />
                            <span className="text-sm font-medium">{link.name}</span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export { Contact }