import React from 'react'

import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        title: 'TaskFlow',
        description: 'A clean, intuitive to-do app with local storage persistence and drag-and-drop functionality. Built to practice state management and DOM manipulation.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        learnings: 'Learned about React hooks, state management patterns, and implementing drag-and-drop interfaces.',
        github: 'https://github.com/yourusername/taskflow',
        live: 'https://taskflow-demo.vercel.app',
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather application that fetches data from OpenWeather API. Features location search, 5-day forecasts, and responsive design.',
        technologies: ['Next.js', 'API Integration', 'CSS Modules'],
        learnings: 'Gained experience with API calls, async/await patterns, and handling loading and error states.',
        github: 'https://github.com/yourusername/weather-dashboard',
        live: 'https://weather-dashboard-demo.vercel.app',
    },
    {
        title: 'Markdown Note Taker',
        description: 'A simple note-taking app with markdown support and live preview. Stores notes in browser storage with import/export functionality.',
        technologies: ['JavaScript', 'Markdown Parser', 'Local Storage'],
        learnings: 'Explored markdown rendering, file handling in the browser, and creating intuitive editor interfaces.',
        github: 'https://github.com/yourusername/markdown-notes',
        live: 'https://markdown-notes-demo.vercel.app',
    },
    {
        title: 'Portfolio Site',
        description: 'This portfolio website built with Next.js 14, featuring a clean design inspired by modern web aesthetics and optimized for performance.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        learnings: 'Deepened understanding of Next.js App Router, SEO optimization, and creating responsive layouts.',
        github: 'https://github.com/yourusername/portfolio',
        live: 'https://yourportfolio.com',
    },
];

const Projects = () => {
    return (
        <section className="mb-16 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                Projects
            </h2>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group border-l-2 border-neutral-200 dark:border-neutral-800 pl-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                                    aria-label="View on GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                                    aria-label="View live demo"
                                >
                                    <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500 italic">
                            {project.learnings}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { Projects }