import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface ScrollProgressBarProps {
  isDarkMode: boolean;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ isDarkMode }) => {
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* Main progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-150 ease-out shadow-lg"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: isDarkMode 
              ? '0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)' 
              : '0 0 15px rgba(99, 102, 241, 0.4), 0 0 30px rgba(168, 85, 247, 0.2)'
          }}
        />
      </div>

      {/* Animated particles that follow the progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-40 pointer-events-none">
        <div 
          className="absolute top-0 h-1 transition-all duration-150 ease-out"
          style={{ left: `${scrollProgress}%` }}
        >
          {/* Leading particle */}
          <div className={`absolute -top-1 -left-2 w-3 h-3 rounded-full ${
            isDarkMode ? 'bg-cyan-400' : 'bg-indigo-500'
          } animate-pulse shadow-lg`}
            style={{
              boxShadow: isDarkMode 
                ? '0 0 15px rgba(34, 211, 238, 0.8)' 
                : '0 0 10px rgba(99, 102, 241, 0.6)'
            }}
          />
          
          {/* Trailing particles */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute -top-0.5 w-1.5 h-1.5 rounded-full ${
                isDarkMode ? 'bg-purple-400' : 'bg-purple-500'
              } opacity-60`}
              style={{
                left: `${-8 - (i * 6)}px`,
                animationDelay: `${i * 0.1}s`,
                animation: 'pulse 1s ease-in-out infinite'
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress percentage indicator (appears on hover) */}
      <div className="fixed top-2 right-4 z-50 group">
        <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isDarkMode 
            ? 'bg-gray-800/90 text-cyan-400 border-cyan-500/30' 
            : 'bg-white/90 text-indigo-600 border-indigo-200'
        } backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border shadow-lg`}>
          {Math.round(scrollProgress)}%
        </div>
        
        {/* Hover trigger area */}
        <div className="absolute -inset-2 cursor-pointer" />
      </div>
    </>
  );
};

export default ScrollProgressBar;