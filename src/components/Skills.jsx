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
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 text-glow">Technical Skills</h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        Languages, frameworks, and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => {
                        const IconComponent = skill.Icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer glass-hover relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div
                                    className="text-gray-400 group-hover:text-[var(--skill-color)] transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_var(--skill-color)]"
                                    style={{ '--skill-color': skill.color }}
                                >
                                    <IconComponent size={48} />
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
