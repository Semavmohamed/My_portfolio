import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { image, title } from 'framer-motion/client';

const projects = [
    {
        title: 'URL Shortening Web App',
        image: '/src/assets/imgProject/urlShorting.png', // حطي المسار الصحيح للصورة
        tools: ['React','Vite', 'Tailwind', 'TanStack Query', 'API Integration'],
        link: 'https://url-shorting-q4ev.vercel.app/',
        github: 'https://github.com/Semavmohamed/URLShorting'
    },
    {
        title: 'Institute Management System',
        image: '/src/assets/imgProject/institute.png',
        tools: ['React','Vite', 'PHP', 'MySQL', 'QR', 'JWT', 'Dashboard'],
        link: 'https://latshin.com',
        github: 'https://github.com/Semavmohamed/latshinInstitute'
    },
    {
        title: 'Space Travel',
        image: '/src/assets/imgProject/space1.png',
        tools: ['React', 'LandingPage', 'Challenge'],
        link: 'https://space-travel-liart.vercel.app/',
        github: 'https://github.com/Semavmohamed/SpaceTravel'
    },
     {
        title: 'My Portfolio',
        image: '/src/assets/imgProject/portfolio.png',
        tools: ['React', 'LandingPage', 'Tailwind CSS','Vite','Portfolio'],
        link: '#home',
        github: 'https://github.com/Semavmohamed/SpaceTravel'
    },
    

];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut"
        }
    })
};

export default function ProjectsSection() {
    return (

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 px-4 max-w-6xl mx-auto hover:shadow-boxShadow">

            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="card-container relative bg-card shadow-md rounded-lg overflow-hidden  hover:shadow-customBlue transition-shadow duration-300"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover p-2 rounded-xl"
                    />
                    <div className="p-5">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm  mb-3">
                            {project.tools.join(', ')}
                        </p>

                        <div className="flex justify-center gap-4">
                            {project.link && (

                                <Button value='Visit' asLink='true' href={project.link} />

                            )}
                            {project.github && (

                                <Button value='GitHub' asLink='true' href={project.github} />

                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
