import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-6"
                >
                    <motion.p variants={item} className="text-accent font-medium text-lg tracking-wide">
                        Hi, my name is
                    </motion.p>

                    <motion.h1 variants={item} className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight">
                        Abhishek Rastogi.
                    </motion.h1>

                    <motion.h2 variants={item} className="text-4xl md:text-6xl font-heading font-bold text-muted">
                        I build things for mobile & web.
                    </motion.h2>

                    <motion.p variants={item} className="max-w-2xl mx-auto text-muted text-lg md:text-xl leading-relaxed">
                        I'm a software engineer specializing in building exceptional digital experiences. Currently pursuing B.Tech at MNNIT Allahabad, I focus on React Native, Full Stack Development, and solving real-world problems.
                    </motion.p>

                    <motion.div variants={item} className="flex items-center justify-center gap-4 pt-8">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300 cursor-pointer font-medium"
                        >
                            Check out my work
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-accent text-primary rounded hover:bg-accent/90 transition-colors duration-300 cursor-pointer font-medium"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div variants={item} className="flex items-center justify-center gap-6 pt-12 text-muted">
                        <a href="https://github.com/Abhishekmmnit6022" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/abhishekrastogi27" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                            <FiLinkedin size={24} />
                        </a>
                        <a href="mailto:abhishekmmnit27@gmail.com" className="hover:text-accent transition-colors duration-300">
                            <FiMail size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
