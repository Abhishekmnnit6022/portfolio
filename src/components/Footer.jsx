import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-secondary py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-muted text-sm text-center md:text-left">
                    © {new Date().getFullYear()} Abhishek Rastogi. All rights reserved.
                </p>

                <div className="flex items-center gap-6 text-muted">
                    <a href="https://github.com/Abhishekmmnit6022" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        <FiGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/abhishekrastogi27" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        <FiLinkedin size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        <FiTwitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
