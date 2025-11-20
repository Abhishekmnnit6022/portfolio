import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';

const education = [
    {
        school: 'Motilal Nehru National Institute of Technology Allahabad',
        degree: 'Bachelor of Technology in Engineering and Computational Mechanics',
        year: 'Aug 2023 – May 2027',
        grade: 'CPI: 8.82 (4th semester)',
        Icon: FiBookOpen,
    },
    {
        school: 'Study Well Public School, Sitapur',
        degree: 'Higher Secondary (12th), Central Board of Secondary Education',
        year: '2022',
        grade: '96%',
        Icon: FiAward,
    },
    {
        school: 'Study Well Public School, Sitapur',
        degree: 'Secondary Education (10th), Central Board of Secondary Education',
        year: '2020',
        grade: '97.4%',
        Icon: FiAward,
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Education</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        My academic journey and qualifications.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => {
                        const IconComponent = edu.Icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-primary p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-colors duration-300 shadow-lg flex flex-col md:flex-row gap-6 items-start"
                            >
                                <div className="p-4 bg-secondary rounded-full text-accent shrink-0">
                                    <IconComponent size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                        <div className="flex items-center gap-2 text-muted text-sm mt-1 md:mt-0">
                                            <FiCalendar size={16} />
                                            <span>{edu.year}</span>
                                        </div>
                                    </div>
                                    <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>
                                    <p className="text-accent font-medium">{edu.grade}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
