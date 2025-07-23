import { useState, useEffect, useCallback } from 'react';

interface SplashEffect {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export const useCursorSplash = () => {
  const [splashes, setSplashes] = useState<SplashEffect[]>([]);

  const addSplash = useCallback((x: number, y: number) => {
    const newSplash: SplashEffect = {
      id: Date.now() + Math.random(),
      x,
      y,
      timestamp: Date.now()
    };

    setSplashes(prev => [...prev, newSplash]);

    // Remove splash after animation completes
    setTimeout(() => {
      setSplashes(prev => prev.filter(splash => splash.id !== newSplash.id));
    }, 1000);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      addSplash(e.clientX, e.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0] || e.changedTouches[0];
      if (touch) {
        addSplash(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleTouch, { passive: false });

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleTouch);
    };
  }, [addSplash]);

  return splashes;
};