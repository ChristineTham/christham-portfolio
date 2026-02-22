import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setColorMode(savedTheme as 'light' | 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setColorMode('dark');
        document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(nextMode);
    document.documentElement.classList.toggle('dark', nextMode === 'dark');
    localStorage.setItem('theme', nextMode);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <button
            onClick={toggleTheme}
            className="absolute top-4 left-4 font-semibold block mx-auto mb-3 rounded-md px-3 py-2 bg-text text-background cursor-pointer z-50 transition-colors duration-300"
            aria-label="Toggle dark mode"
        >
            {colorMode === 'dark' ? 'Light Theme' : 'Dark Theme'}
        </button>

        <div className="text-center z-10 p-4">
             <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-8 mb-4 tracking-wide text-heading bg-gray-200 dark:bg-black bg-opacity-20 dark:bg-opacity-40 p-2 rounded-lg" style={{ textShadow: 'rgba(255, 255, 255, 0.15) 0px 5px 35px' }}>
                Hi, I am Chris Tham
             </h1>
             <div className="text-2xl sm:text-3xl md:text-4xl text-rosely10 font-mono">
                <ReactTyped
                    strings={['artist', 'consultant', 'cyclist', 'designer', 'musician', 'photographer', 'world traveller']}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={2000}
                    loop
                />
             </div>
        </div>
    </div>
  );
};

export default Hero;
