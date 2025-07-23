import React from 'react';
import { useCursorSplash } from '../hooks/useCursorSplash';

interface CursorSplashProps {
  isDarkMode: boolean;
}

const CursorSplash: React.FC<CursorSplashProps> = ({ isDarkMode }) => {
  const splashes = useCursorSplash();

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="absolute"
          style={{
            left: splash.x,
            top: splash.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Main ripple effect */}
          <div className={`absolute inset-0 rounded-full border-2 ${
            isDarkMode 
              ? 'border-cyan-400/60' 
              : 'border-indigo-500/60'
          } animate-splash-ripple`} />
          
          {/* Secondary ripple */}
          <div className={`absolute inset-0 rounded-full border ${
            isDarkMode 
              ? 'border-purple-400/40' 
              : 'border-purple-500/40'
          } animate-splash-ripple-delayed`} />
          
          {/* Center dot */}
          <div className={`absolute inset-0 w-2 h-2 rounded-full ${
            isDarkMode 
              ? 'bg-cyan-400' 
              : 'bg-indigo-500'
          } animate-splash-dot`} 
            style={{ 
              left: '50%', 
              top: '50%', 
              transform: 'translate(-50%, -50%)',
              boxShadow: isDarkMode 
                ? '0 0 20px rgba(34, 211, 238, 0.8)' 
                : '0 0 15px rgba(99, 102, 241, 0.6)'
            }}
          />
          
          {/* Particle burst */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400' 
                  : 'bg-gradient-to-r from-indigo-500 to-purple-500'
              } animate-splash-particle`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.05}s`
              }}
            />
          ))}
          
          {/* Glow effect */}
          <div className={`absolute inset-0 w-16 h-16 rounded-full ${
            isDarkMode 
              ? 'bg-cyan-400/20' 
              : 'bg-indigo-500/20'
          } animate-splash-glow blur-md`}
            style={{ 
              left: '50%', 
              top: '50%', 
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CursorSplash;