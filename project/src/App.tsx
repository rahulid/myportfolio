import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorSplash from './components/CursorSplash';
import ConfettiCelebration from './components/ConfettiCelebration';
import AIBootupLoader from './components/AIBootupLoader';
import { AnimatePresence } from './components/animations/AnimatePresence';
import { useConfetti } from './hooks/useConfetti';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isLoading, setIsLoading] = useState(true);
  
  const { confetti, triggerConfetti } = useConfetti();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      const sections = ['hero', 'about', 'projects', 'skills', 'resume', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Handle website loading completion
  useEffect(() => {
    const startTime = Date.now();
    const minLoadingTime = 7000; // 7 seconds minimum
    let isContentLoaded = false;
    let isMinTimeReached = false;

    // Timer for minimum loading time
    const loadingTimer = setTimeout(() => {
      isMinTimeReached = true;
      if (isContentLoaded) {
        setIsLoading(false);
      }
    }, minLoadingTime);

    // Handler for when all resources are loaded
    const handleLoad = () => {
      isContentLoaded = true;
      if (isMinTimeReached) {
        setIsLoading(false);
      }
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Main Website Content - Always Rendered for Background Loading */}
      <ScrollProgressBar isDarkMode={isDarkMode} />
      <CursorSplash isDarkMode={isDarkMode} />
      <ConfettiCelebration confetti={confetti} isDarkMode={isDarkMode} />
      
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <AnimatePresence>
          <Hero id="hero" isDarkMode={isDarkMode} isLoaded={!isLoading} />
          <About id="about" isDarkMode={isDarkMode} />
          <Projects id="projects" isDarkMode={isDarkMode} />
          <Skills id="skills" isDarkMode={isDarkMode} />
          <Resume id="resume" isDarkMode={isDarkMode} />
          <Contact id="contact" isDarkMode={isDarkMode} />
        </AnimatePresence>
        
        <Assistant 
          activeSection={activeSection} 
          scrollPosition={scrollPosition}
          onConfettiTrigger={triggerConfetti}
        />
      </main>
      <Footer isDarkMode={isDarkMode} />

      {/* AI Bootup Loader Overlay - Only Shown During Loading */}
      {isLoading && (
        <AIBootupLoader />
      )}
    </div>
  );
}

export default App;