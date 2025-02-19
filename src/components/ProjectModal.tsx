import React, {useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {ExternalLink, Github, X} from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    image: string;
    longDescription?: string;
    features?: string[];
    challenges?: string[];
    liveSite?: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({project, onClose}) => {
    if (!project) return null;

    // Close modal when Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={onClose} // Close when clicking outside the modal
            >
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.95}}
                    className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                    {/* Close button at the top-right corner */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-all"
                    >
                        <X className="w-6 h-6"/>
                    </button>

                    <div className="p-6">
                        {/* Project Image */}
                        <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            {project.longDescription || project.description}
                        </p>

                        {/* Features */}
                        {project.features && (
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Key Features
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technical Challenges */}
                        {project.challenges && (
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Technical Challenges
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies Used */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                                >
                                    <Github className="w-5 h-5"/>
                                    <span>View Code</span>
                                </a>
                            )}
                            {project.liveSite && (
                                <a
                                    href={project.liveSite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5"/>
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;