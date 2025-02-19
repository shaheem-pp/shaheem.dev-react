import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <Router>
            <div
                className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
                <Navbar isDarkMode={isDarkMode}/>
                <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
                <Toaster position="top-right"/>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home/>
                            <About/>
                            <Experience/>
                            <Projects/>
                            <Skills/>
                            <Education/>
                            <Contact/>
                        </>
                    }/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;