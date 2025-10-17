import React from 'react'
import { Projects } from './_components/projects'
import { Writings } from './_components/writings'
import { Contact } from './_components/contact'

const Page = () => {

    return (
        <main>

            <section className="mb-16 md:mb-24">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Sudhanshu Neravati
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                    Developer exploring the intersection of code and creativity
                </p>
                <p className="text-base text-neutral-500 dark:text-neutral-500 max-w-2xl">
                    Currently learning full-stack web development with a focus on React, Next.js, and TypeScript.
                    Building projects that solve real problems while growing my skills one commit at a time.
                </p>
            </section>

            <section className="mb-16 md:mb-24">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                    About
                </h2>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                    <p>
                        My journey into development started with curiosity about how websites work.
                        What began as tinkering with HTML and CSS evolved into a passion for building
                        full-featured web applications.
                    </p>
                    <p>
                        I'm currently focused on mastering the fundamentals of JavaScript and React,
                        while exploring backend technologies like Node.js. My learning approach emphasizes
                        understanding core concepts deeply rather than rushing through frameworks.
                    </p>
                    <p>
                        Beyond coding, I'm fascinated by user experience design and how small details
                        can make a big difference in how people interact with technology. I believe
                        great software is built at the intersection of technical skill and human empathy.
                    </p>
                    <p>
                        When I'm not coding, you'll find me reading about tech trends, contributing to
                        open source projects, or enjoying a good cup of coffee while sketching out ideas
                        for my next project.
                    </p>
                </div>
            </section>

            <Projects />

            <Writings />

            <Contact />

        </main>
    )

}

export default Page