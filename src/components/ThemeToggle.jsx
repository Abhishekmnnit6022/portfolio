import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
            aria-label="Toggle Theme"
        >
            <div className="relative z-10 text-accent">
                {theme === 'dark' ? (
                    <FiSun className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                ) : (
                    <FiMoon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" />
                )}
            </div>
            <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
        </button>
    );
};

export default ThemeToggle;
