import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-primary/50 backdrop-blur-md border-t border-white/5 py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm flex items-center gap-2">
                    © {new Date().getFullYear()} Abhishek Rastogi. Made with <FiHeart className="text-red-500 fill-current" /> and React.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Abhishekmnnit6022"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors hover:scale-110 transform duration-200"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abhishekrastogi27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors hover:scale-110 transform duration-200"
                    >
                        <FiLinkedin size={20} />
                    </a>
                    <a
                        href="https://x.com/RastogiAbh70075?t=Ep1YdFIsJ1YptVQjk8OMcg&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors hover:scale-110 transform duration-200"
                    >
                        <FiTwitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
