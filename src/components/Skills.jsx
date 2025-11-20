import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiGooglecloud, SiFirebase, SiMysql, SiGit, SiAndroid } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
    { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'GCP', Icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
    { name: 'Android Studio', Icon: SiAndroid, color: '#3DDC84' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Languages, frameworks, and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => {
                        const IconComponent = skill.Icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-accent/20 border border-gray-800 flex flex-col items-center justify-center gap-4 group transition-all duration-300"
                            >
                                <div
                                    className="text-gray-400 group-hover:text-[var(--skill-color)] transition-colors duration-300"
                                    style={{ '--skill-color': skill.color }}
                                >
                                    <IconComponent size={40} />
                                </div>
                                <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
