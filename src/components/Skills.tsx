import { motion } from 'framer-motion';
import { Code2, Database, Github as Git, Server } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
    {
        title: 'Frontend',
        icon: <Code2 className="w-8 h-8 text-indigo-600"/>,
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS', 'jQuery'],
        bgColor: 'bg-inherit',
    },
    {
        title: 'Backend',
        icon: <Server className="w-8 h-8 text-indigo-600"/>,
        skills: ['Python', 'Django', 'REST API', 'Swift', 'AJAX'],
        bgColor: 'bg-inherit', // Light gray background color
    },
    {
        title: 'Database',
        icon: <Database className="w-8 h-8 text-indigo-600"/>,
        skills: ['PostgreSQL', 'PostGIS', 'SQLite'],
        bgColor: 'bg-inherit',
    },
    {
        title: 'Tools & Others',
        icon: <Git className="w-8 h-8 text-indigo-600"/>,
        skills: ['Git', 'AWS', 'Docker', 'Linux', 'Postman', 'Digital Ocean', 'PyCharm', 'Xcode'],
        bgColor: 'bg-inherit',
    },
];

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className="section-container bg-gray-50 dark:bg-gray-800/50 py-16">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 20}}
                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6}}
            >
                <h2 className="section-title text-center text-4xl font-bold text-gray-900 dark:text-white mb-12">
                    Skills
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`card p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${category.bgColor}`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                {category.icon}
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 text-sm bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full shadow-sm hover:bg-indigo-200 dark:hover:bg-indigo-700 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;