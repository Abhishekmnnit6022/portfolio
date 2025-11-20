import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary rounded-lg text-accent">
                                <FiMail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                                <p className="text-muted">abhishekmmnit27@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary rounded-lg text-accent">
                                <FiPhone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                                <p className="text-muted">+91-8765378172</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary rounded-lg text-accent">
                                <FiMapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                                <p className="text-muted">Allahabad, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all duration-300"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all duration-300"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none transition-all duration-300 resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
