import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Github} from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
    {
        title: 'Vehicle & Area Tracking Systems',
        description: 'Backend systems built for tracking vehicles, areas, and optimizing delivery routes.',
        longDescription: 'Vehicle & Area Tracking Systems involves the development of backend solutions for efficient tracking and route optimization across multiple client projects. This system improves the efficiency of delivery operations with real-time vehicle tracking, geospatial data management, and optimized route planning.',
        tech: ['PostGIS', 'Google Maps Matrix API', 'Django', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'AJAX', 'jQuery', 'Bootstrap'],
        github: null,
        image: 'public/Project/images/vehicle_tracking.png',
        features: [
            'Real-time vehicle tracking using GPS data',
            'PostGIS-based geospatial data management',
            'Google Maps Matrix API for route optimization',
            'Performance improvements in legacy database queries',
            'Scalable backend architecture for multiple clients'
        ],
        challenges: [
            'Handling large-scale geospatial data efficiently',
            'Optimizing database queries for performance',
            'Ensuring accuracy in vehicle tracking',
            'Integrating third-party APIs for route optimization'
        ]
    },
    {
        title: 'Food For All',
        description: 'A platform that connects food donors with NGOs and volunteers to minimize food waste.',
        longDescription: 'Food For All is a comprehensive web platform developed during Fosshack 3 that aims to address the critical issue of food waste while helping those in need. The platform creates an efficient ecosystem where restaurants and food providers can easily connect with NGOs and volunteers to ensure surplus food reaches those who need it most.',
        tech: ['Django', 'Next.js', 'REST API', 'PostGIS'],
        github: 'https://github.com/AkshayBenny/food-surplus-detection',
        image: 'public/Project/images/foodforall/img1.png',
        features: [
            'Real-time food donation matching system',
            'Location-based NGO and volunteer discovery',
            'Automated notification system for nearby organizations',
            'Detailed donation tracking and history',
            'Mobile-responsive interface for on-the-go access'
        ],
        challenges: [
            'Implementing efficient geospatial queries for location-based matching',
            'Building a scalable real-time notification system',
            'Ensuring food safety through proper tracking mechanisms',
            'Optimizing the matching algorithm for quick response times'
        ]
    },
    {
        title: 'Explore Bikes',
        description: 'A web platform for scheduling test drives and vehicle maintenance appointments.',
        longDescription: 'Explore Bikes is a comprehensive vehicle booking and service management platform designed to streamline the process of test drives and maintenance appointments. This project was developed as a final year academic project, showcasing the practical application of web development skills in creating a real-world solution.',
        tech: ['Django', 'HTML', 'CSS', 'JavaScript', 'SQLite3'],
        github: 'https://github.com/shaheem-pp/Explore-Bikes',
        image: 'public/Project/images/explore/exp.png',
        features: [
            'Intuitive test drive booking system',
            'Maintenance service scheduling',
            'Real-time availability checking',
            'Customer profile management',
            'Service history tracking'
        ],
        challenges: [
            'Implementing a conflict-free booking system',
            'Creating an efficient service queue management system',
            'Developing a user-friendly calendar interface',
            'Integrating real-time availability updates'
        ]
    },
    {
        title: 'Urban Nest',
        description: 'A JavaScript-based e-commerce platform with dynamic shopping features.',
        longDescription: 'Urban Nest is a fully functional e-commerce website built for my CSD2103 course project. It provides a seamless shopping experience with dynamic product rendering, category-based filtering, and a shopping cart system powered by JavaScript and local storage.',
        tech: ['JavaScript', 'HTML', 'Bootstrap', 'CSS'],
        github: 'https://github.com/shaheem-pp/CSD2103-project.git',
        image: 'public/Project/images/csd2103/urban_nest.png',
        features: [
            'Shopping cart with persistent local storage',
            'Category-based filtering for easy browsing',
            'Dynamic product rendering from data source',
            'Real-time search functionality',
            'Session-based authentication for security'
        ],
        challenges: [
            'Managing state without a backend',
            'Implementing an efficient filtering system',
            'Ensuring smooth UI/UX with dynamic content updates',
            'Handling session-based authentication in a frontend-only project'
        ]
    },
    {
        title: 'ReciMe',
        description: 'A community-driven recipe-sharing platform built with Django.',
        longDescription: 'ReciMe is a collaborative platform for food lovers, built as part of my CSD4523 course project. It allows users to share, bookmark, and review recipes while engaging with a passionate cooking community.',
        tech: ['Django', 'HTML', 'Bootstrap', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'SQLite3'],
        github: 'https://github.com/shaheem-pp/CSD4523-project.git',
        image: 'public/Project/images/csd4523/img1.png',
        features: [
            'Discover and browse a diverse collection of recipes',
            'Create and share personal recipes with the community',
            'Engage with others through likes, bookmarks, and reviews',
            'Dedicated "Chef Mode" for expert recipe contributors',
            'User-friendly interface with smooth navigation'
        ],
        challenges: [
            'Designing a scalable user engagement system',
            'Ensuring smooth AJAX-based interactions',
            'Handling media uploads efficiently',
            'Creating an intuitive recipe submission flow'
        ]
    }
];

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-container">
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 20}}
                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6}}
            >
                <h2 className="section-title">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.slice(0, 3).map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span
                                        className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                                        +{project.tech.length - 3} more
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github className="w-5 h-5"/>
                                        <span>Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;