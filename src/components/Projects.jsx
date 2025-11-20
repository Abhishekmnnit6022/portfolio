import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Wrapper – AI-Powered Finance Tracker',
        description: 'A comprehensive AI-driven financial management solution designed to streamline expense tracking. Leverages advanced OCR technology for instant receipt scanning, supports multi-currency transactions for global usability, and provides automated, detailed expense reports for actionable financial insights.',
        tags: ['React Native', 'SQLite', 'Expo Go', 'Chart.js'],
        github: 'https://github.com/Abhishekmnnit6022/Wrapper-',
        demo: 'https://youtu.be/jnlp1WfTg1I',
        image: 'https://via.placeholder.com/600x400' // Ideally replace with a screenshot if available
    },
    {
        title: 'SafeChalein – Personal Security App',
        description: 'A robust personal safety application engineered to minimize emergency response times. Integrates real-time location sharing, a discrete fake call feature for exit strategies, and an automated SOS system that captures and transmits audio/visual evidence to emergency contacts instantly.',
        tags: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Twilio', 'Google Maps API'],
        github: 'https://github.com/Abhishekmnnit6022/safechalein',
        demo: 'https://drive.google.com/file/d/1m_fFWapj3Cfa_1J1Pbih1-DFu8bkImhG/view',
        image: 'https://via.placeholder.com/600x400'
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 text-glow">Featured Projects</h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        Some of the things I've built.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-2xl overflow-hidden flex flex-col h-full group glass-hover"
                        >
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-accent/20 text-white hover:text-accent transition-all border border-white/10 hover:border-accent/30"
                                    >
                                        <FiGithub /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary hover:bg-cyan-400 transition-all font-medium shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
                                    >
                                        <FiExternalLink /> Demo
                                    </a>
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
