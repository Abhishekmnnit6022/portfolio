import React from 'react';
import { motion } from 'framer-motion';
import { IoSchoolOutline } from 'react-icons/io5';
import { BiBookReader } from 'react-icons/bi';

const Education = () => {
    const education = [
        {
            year: '2023 - 2027',
            degree: 'B.Tech in Engineering and Computational Mechanics',
            school: 'MNNIT Allahabad',
            description: 'Currently pursuing Bachelor of Technology with a CPI of 8.82. Active member of technical societies and coding clubs.',
            icon: IoSchoolOutline,
        },
        {
            year: '2022',
            degree: 'Class 12th (Intermediate)',
            school: 'Study Well Public School',
            description: 'Completed Higher Secondary Education with 96% aggregate.',
            icon: BiBookReader,
        },
        // {
        //     year: '2020',
        //     degree: 'Class 10th (Matriculation)',
        //     school: 'Study Well Public School',
        //     description: 'Completed Secondary Education with 97.4% aggregate.',
        //     icon: BiBookReader,
        // },
    ];

    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 text-glow">Education</h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        My academic journey.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-accent/30 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:grid md:grid-cols-2 md:gap-12"
                        >
                            {/* Timeline Dot (Mobile) */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(0,240,255,0.5)] md:hidden" />

                            {/* Left Content (Desktop) */}
                            <div className={`md:text-right ${index % 2 === 0 ? 'md:block' : 'md:hidden'}`}>
                                {index % 2 === 0 && (
                                    <>
                                        <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                                        <p className="text-accent font-medium mb-2">{edu.year}</p>
                                    </>
                                )}
                            </div>

                            {/* Center Dot (Desktop) */}
                            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 top-0">
                                <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                            </div>

                            {/* Right Content (Desktop) */}
                            <div className={`md:text-left ${index % 2 !== 0 ? 'md:block' : 'md:hidden'}`}>
                                {index % 2 !== 0 && (
                                    <>
                                        <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                                        <p className="text-accent font-medium mb-2">{edu.year}</p>
                                    </>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className={`glass p-6 rounded-xl glass-hover ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}>
                                <div className={`flex items-center gap-3 mb-3 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <edu.icon className="text-accent text-2xl" />
                                    <h4 className="text-lg font-semibold text-gray-200">{edu.degree}</h4>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {edu.description}
                                </p>
                                {/* Mobile only header info repeated inside card for layout */}
                                <div className="md:hidden mt-4 pt-4 border-t border-white/5">
                                    <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                                    <p className="text-accent text-sm">{edu.year}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
