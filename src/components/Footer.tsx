import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        Built with <Heart className="w-4 h-4 text-red-500"/> by Shaheem PP
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        © {new Date().getFullYear()} shaheem.dev. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;