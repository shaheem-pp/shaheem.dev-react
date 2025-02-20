import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const experiences = [
    {
        title: 'Backend Developer',
        company: 'Agua India',
        location: 'Kochi, Kerala, India',
        period: 'September 2023 - January 2024',
        points: [
            'Built and maintained the backend for an app serving 20,000+ users across Kochi, Chennai, Hyderabad, and Bangalore.',
            'Optimized order processing and delivery workflows, reducing delivery time by 20% and increasing user satisfaction by 25%.',
            'Developed a vendor dashboard with real-time analytics, improving sales productivity by 40%.',
            'Ensured 99% uptime by promptly resolving issues in Agua Web Panels.',
            'Worked closely with cross-functional teams to deliver high-quality, user-focused applications.',
        ],
    },
    {
        title: 'Junior Backend Developer',
        company: 'Cynbus',
        location: 'Kochi, Kerala, India',
        period: 'August 2022 - August 2023',
        points: [
            'Developed Django-based backend systems and REST APIs for commercial products.',
            'Deployed apps on AWS & DigitalOcean, ensuring scalability and performance.',
            'Built CMS solutions using HTML, CSS, Bootstrap, jQuery, and AJAX to enhance user experience.',
            'Contributed to products impacting 13,000+ users across Kerala, improving engagement.',
        ],
    },
    {
        title: 'Campus Community Manager',
        company: 'TinkerHub Foundation',
        location: 'Remote, Kerala',
        period: 'June 2021 - December 2021',
        points: [
            'Onboarded 15+ campuses and managed 60+ tech communities across Kerala.',
            'Organized events that increased student engagement by 40% and led to 25% more student-led initiatives.',
            'Mentored 100+ students, helping them build strong campus tech communities.',
        ],
    },
];

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800/50">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 20}}
                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6}}
            >
                <h2 className="section-title">Experience</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="card">
                            <div className="flex items-start gap-4">
                                <Briefcase className="w-6 h-6 text-indigo-600 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                                    <p className="text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                                    <ul className="space-y-2">
                                        {exp.points.map((point, idx) => (
                                            <li key={idx} className="text-gray-700 dark:text-gray-300">• {point}</li>
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

export default Experience;
