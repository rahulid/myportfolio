import { useState, useEffect, useCallback } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  size: number;
  opacity: number;
  gravity: number;
}

export const useConfetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(false);

  // Enhanced vibrant colors for maximum visibility
  const colors = [
    '#FF1744', '#FF6B35', '#F7931E', '#FFD23F', '#06FFA5', 
    '#1DE9B6', '#00E5FF', '#2979FF', '#651FFF', '#E91E63',
    '#FF5722', '#FF9800', '#FFEB3B', '#4CAF50', '#00BCD4',
    '#3F51B5', '#9C27B0', '#E91E63', '#F44336', '#FF5722'
  ];

  const createConfettiPiece = useCallback((x: number, y: number): ConfettiPiece => {
    const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
    return {
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 8, // Increased velocity for more dynamic movement
      vy: Math.random() * -8 - 3, // Stronger initial upward velocity
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 6, // Faster rotation for more visual interest
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      size: Math.random() * 8 + 6, // Larger size range (6-14px instead of 3-9px)
      opacity: 1, // Start at full opacity
      gravity: Math.random() * 0.25 + 0.2 // Slightly stronger gravity
    };
  }, []);

  const triggerConfetti = useCallback(() => {
    setIsActive(true);
    const newConfetti: ConfettiPiece[] = [];
    
    // Strategic confetti placement for maximum visual impact
    // Top cascade - 50 pieces across the full width
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * window.innerWidth;
      const y = -30; // Start higher for better effect
      newConfetti.push(createConfettiPiece(x, y));
    }
    
    // Side bursts - 15 pieces from each side for dramatic effect
    for (let i = 0; i < 15; i++) {
      // Left side burst
      const leftX = -20;
      const leftY = Math.random() * window.innerHeight * 0.4;
      const leftPiece = createConfettiPiece(leftX, leftY);
      leftPiece.vx = Math.random() * 6 + 3; // Force rightward movement
      newConfetti.push(leftPiece);
      
      // Right side burst
      const rightX = window.innerWidth + 20;
      const rightY = Math.random() * window.innerHeight * 0.4;
      const rightPiece = createConfettiPiece(rightX, rightY);
      rightPiece.vx = -(Math.random() * 6 + 3); // Force leftward movement
      newConfetti.push(rightPiece);
    }

    setConfetti(newConfetti);

    // Clear confetti after animation with longer duration for better visibility
    setTimeout(() => {
      setConfetti([]);
      setIsActive(false);
    }, 5000); // Extended to 5 seconds for better visibility
  }, [createConfettiPiece]);

  useEffect(() => {
    if (!isActive || confetti.length === 0) return;

    const animationFrame = requestAnimationFrame(() => {
      setConfetti(prevConfetti => 
        prevConfetti
          .map(piece => ({
            ...piece,
            x: piece.x + piece.vx,
            y: piece.y + piece.vy,
            vy: piece.vy + piece.gravity,
            rotation: piece.rotation + piece.rotationSpeed,
            opacity: piece.opacity - 0.008 // Slower fade for better visibility
          }))
          .filter(piece => 
            piece.y < window.innerHeight + 150 && 
            piece.opacity > 0.1 && // Keep visible longer
            piece.x > -150 && 
            piece.x < window.innerWidth + 150
          )
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [confetti, isActive]);

  return { confetti, triggerConfetti, isActive };
};