import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Wrapper – AI-Powered Finance Tracker',
        description: 'AI-powered mobile app for expense tracking and financial visualization. Features interactive data visualization with responsive charts, multi-currency support, and OCR for receipt scanning.',
        tags: ['React Native', 'SQLite', 'Expo Go', 'Chart.js'],
        github: 'https://github.com/Abhishekmmnit6022',
        demo: '#',
        image: 'https://via.placeholder.com/600x400/0f172a/38bdf8?text=Wrapper+Finance+App'
    },
    {
        title: 'SafeChalein – Personal Security App',
        description: 'Personal security app featuring emergency response capabilities. Includes real-time location tracking, fake call functionality, and automated SOS alerts with photo/audio capture.',
        tags: ['React Native', 'Node.js', 'MongoDB', 'Twilio', 'Google Maps API'],
        github: 'https://github.com/Abhishekmmnit6022',
        demo: '#',
        image: 'https://via.placeholder.com/600x400/0f172a/38bdf8?text=SafeChalein+Security+App'
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        A selection of projects I've worked on recently.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 group border border-gray-800"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-muted mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
