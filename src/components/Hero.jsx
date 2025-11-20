import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-blob" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-accent font-medium text-lg mb-4 tracking-wide">Hi, my name is</h2>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
                        Abhishek Rastogi.
                    </h1>
                    <div className="text-3xl md:text-5xl font-heading font-bold text-muted mb-8 h-[60px]">
                        I build{' '}
                        <TypeAnimation
                            sequence={[
                                'mobile apps.',
                                2000,
                                'web applications.',
                                2000,
                                'digital experiences.',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-accent text-glow"
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                        I'm a software engineer specializing in building exceptional digital experiences.
                        Currently pursuing B.Tech at MNNIT Allahabad, I focus on React Native,
                        Full Stack Development, and solving real-world problems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 border-2 border-accent text-accent rounded-md font-medium hover:bg-accent/10 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
                        >
                            Check out my work
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-accent text-primary rounded-md font-medium hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <a href="https://github.com/Abhishekmnnit6022" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:scale-110 transition-all duration-300">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/abhishekrastogi27" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:scale-110 transition-all duration-300">
                            <FiLinkedin size={24} />
                        </a>
                        <a href="mailto:abhishekrastogi151@gmail.com" className="hover:text-accent hover:scale-110 transition-all duration-300">
                            <FiMail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
