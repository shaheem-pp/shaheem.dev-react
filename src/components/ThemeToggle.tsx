import React from 'react';
import {Moon, Sun} from 'lucide-react';

interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({isDarkMode, toggleTheme}) => {
    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-500"/>
            ) : (
                <Moon className="w-6 h-6 text-gray-700"/>
            )}
        </button>
    );
};

export default ThemeToggle;