import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Code, Globe} from 'lucide-react';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="section-container">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 20}}
                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6}}
                className="max-w-4xl mx-auto"
            >
                <h2 className="section-title">About Me</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300">
                            I'm Shaheem, a dedicated web developer and international student based in Toronto,
                            specializing in backend development. With 1.6 years of experience, I excel in the Django
                            Framework and have a strong command of front-end technologies.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Currently pursuing a Post Graduation in Full Stack Software Development at Lambton College,
                            Toronto, I hold a bachelor's degree from Calicut University.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <Code className="w-6 h-6 text-indigo-600 mt-1"/>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Technical Expertise</h3>
                                <p className="text-gray-700 dark:text-gray-300">Strong foundation in Data Structures,
                                    Algorithms, and Web Development.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Globe className="w-6 h-6 text-indigo-600 mt-1"/>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Community Impact</h3>
                                <p className="text-gray-700 dark:text-gray-300">Led digital transformation projects and
                                    co-founded tech communities during my studies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;