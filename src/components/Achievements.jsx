import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const achievements = [
    {
        title: 'Winner – DroidRush',
        event: 'CodeSangam, Avishkar 2024 (Annual Technical Fest, MNNIT Allahabad)',
        date: 'Nov 2024',
        icon: <FiAward className="w-6 h-6" />,
    },
    {
        title: '2nd Place – InnoDev',
        event: 'Electromania, Avishkar 2024 (Annual Technical Fest, MNNIT Allahabad)',
        date: 'Nov 2024',
        icon: <FiAward className="w-6 h-6" />,
    },
    {
        title: '5th Place – Hack 36 8.0',
        event: '36 hour Hackathon MNNIT Allahabad',
        date: 'Apr 2025',
        icon: <FiAward className="w-6 h-6" />,
    },
    {
        title: 'Top 10 Finalist – HackOdisha 4.0',
        event: 'Webwiz, NIT Rourkela',
        date: 'Sept 2024',
        icon: <FiAward className="w-6 h-6" />,
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 text-glow">Achievements</h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        Recognition for my technical skills and projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="glass p-6 rounded-xl flex items-start gap-4 glass-hover group"
                        >
                            <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                                {achievement.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                                <p className="text-gray-400 text-sm mb-2">{achievement.event}</p>
                                <span className="text-accent text-xs font-medium px-2 py-1 bg-accent/10 rounded-full border border-accent/20">
                                    {achievement.date}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
