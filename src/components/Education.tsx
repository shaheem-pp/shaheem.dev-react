import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {GraduationCap} from 'lucide-react';

const education = [
    {
        degree: 'Post Graduation in Full Stack Software Development',
        school: 'Lambton College',
        location: 'Toronto, ON',
        period: '2024 - Present',
        details: [
            'GPA: 3.35',
            'Specializing in Django, React, REST APIs, and Cloud Computing',
            'Building scalable web applications and exploring software architecture best practices',
        ],
    },
    {
        degree: 'Bachelor of Computer Application (BCA)',
        school: 'Safi Institute of Advanced Study',
        location: 'Kerala, India',
        period: '2019 - 2022',
        details: [
            'Developed a solid foundation in Data Structures, Algorithms, Networking, Web Development, and Machine Learning',
            'Proficiency in C, Python, and Java',
            'Co-founded TinkerHub SIAS and TechSIAS, bridging academia and industry',
            'Contributed to the Innovation Entrepreneurship Development Centre (IEDC) and volunteered with NSS',
            'Organized tech events as a Microsoft Learn Student Ambassador and managed community outreach for Pygrammers',
        ],
    },
];

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="education" className="section-container">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 20}}
                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6}}
            >
                <h2 className="section-title">Education</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <div className="flex items-start gap-4">
                                <GraduationCap className="w-6 h-6 text-indigo-600 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-indigo-600 dark:text-indigo-400">{edu.school}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        {edu.location} | {edu.period}
                                    </p>
                                    <ul className="space-y-2 list-disc pl-5">
                                        {edu.details.map((detail, idx) => (
                                            <li key={idx} className="text-gray-700 dark:text-gray-300">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;