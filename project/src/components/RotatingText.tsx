import React, { useState, useEffect } from 'react';

interface RotatingTextProps {
  phrases: string[];
  interval?: number;
  animationDuration?: number;
  className?: string;
  startTrigger: boolean;
}

const RotatingText: React.FC<RotatingTextProps> = ({ 
  phrases, 
  interval = 3000, 
  animationDuration = 500,
  className = '',
  startTrigger 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!startTrigger) {
      setIsStarted(false);
      return;
    }

    // Start the rotation effect
    setIsStarted(true);

    const rotateText = () => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, animationDuration / 2);
    };

    // Start rotation after initial display
    const rotationTimer = setInterval(rotateText, interval);

    return () => {
      clearInterval(rotationTimer);
    };
  }, [phrases, interval, animationDuration, startTrigger]);

  if (!isStarted || phrases.length === 0) {
    return (
      <span 
        className={`${className} inline-block`}
        style={{ minHeight: '1.5em' }}
      >
        {/* Empty space to maintain layout */}
      </span>
    );
  }

  return (
    <span 
      className={`${className} inline-block relative overflow-hidden`}
      style={{ minHeight: '1.5em' }}
    >
      <span
        className={`block transition-all duration-500 ease-in-out ${
          isAnimating 
            ? 'animate-slide-up-fade-out' 
            : 'animate-slide-up-fade-in'
        }`}
        key={currentIndex}
      >
        {phrases[currentIndex]}
      </span>
    </span>
  );
};

export default RotatingText;