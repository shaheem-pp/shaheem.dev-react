import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="flex items-center justify-center mb-6">
                        {/* Replace Code2 icon with your logo */}
                        <img
                            src="public/android-chrome-512x512.png" // Path to your logo in the public folder
                            alt="Logo"
                            className="w-25 h-25" // Adjust the size as needed
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                        Shaheem PP
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                        Backend Developer & International Student
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="flex items-center px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Get in Touch
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </a>
                        <a
                            href="#projects"
                            className="flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                        >
                            View Projects
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;