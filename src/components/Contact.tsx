import React, {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Github, Linkedin, Loader2, Mail} from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        try {
            setIsSubmitting(true);

            await emailjs.sendForm(
                'service_w1fc4zl', // Replace with your EmailJS service ID
                'template_r4z66c8', // Replace with your EmailJS template ID
                formRef.current,
                'qos1lBDOpcRud0d5E' // Replace with your EmailJS public key
            );

            toast.success('Message sent successfully!');
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800/50 py-16">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 20}}
                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6}}
                className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
            >
                <div className="relative">
                    <img
                        src="public/android-chrome-512x512.png" // Replace with your image URL
                        alt="Your Image"
                        className="object-contain w-full h-full absolute top-0 left-0"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="section-title">Get in Touch</h2>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            Let's Connect
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say
                            hi, feel free to reach out!
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="mailto:mail@shaheem.dev"
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                <Mail className="w-6 h-6"/>
                            </a>
                            <a
                                href="https://github.com/shaheem-pp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                <Github className="w-6 h-6"/>
                            </a>
                            <a
                                href="https://linkedin.com/in/shaheem-pp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                <Linkedin className="w-6 h-6"/>
                            </a>
                        </div>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name<span style={{color: '#dc2626'}}>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                className="py-2 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email<span style={{color: '#dc2626'}}>*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                className="py-2 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Phone<span style={{color: 'rgba(113,113,113,0.77)'}}>(Optional)</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="user_phone"
                                className="py-2 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Subject<span style={{color: '#dc2626'}}>*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="py-2 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message<span style={{color: '#dc2626'}}>*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="py-2 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin"/>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;