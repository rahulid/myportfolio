import React from 'react'; 

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

interface ConfettiCelebrationProps {
  confetti: ConfettiPiece[];
  isDarkMode: boolean;
}

const ConfettiCelebration: React.FC<ConfettiCelebrationProps> = ({ confetti, isDarkMode }) => {
  const renderShape = (piece: ConfettiPiece) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: piece.x,
      top: piece.y,
      width: piece.size,
      height: piece.size,
      backgroundColor: piece.color,
      opacity: piece.opacity,
      transform: `rotate(${piece.rotation}deg)`,
      pointerEvents: 'none' as const,
      // Enhanced visibility with subtle glow effect
      boxShadow: `0 0 ${piece.size * 0.5}px ${piece.color}40`,
      // Ensure confetti appears above everything
      zIndex: 9999,
    };

    switch (piece.shape) {
      case 'circle':
        return (
          <div
            key={piece.id}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              // Add extra glow for circles
              boxShadow: `0 0 ${piece.size * 0.8}px ${piece.color}60, 0 0 ${piece.size * 1.2}px ${piece.color}30`,
            }}
          />
        );
      case 'square':
        return (
          <div
            key={piece.id}
            style={{
              ...baseStyle,
              borderRadius: '2px',
              // Add subtle border for better definition
              border: `1px solid ${piece.color}`,
              boxShadow: `0 0 ${piece.size * 0.6}px ${piece.color}50, inset 0 0 ${piece.size * 0.3}px ${piece.color}20`,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={piece.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderLeft: `${piece.size / 2}px solid transparent`,
              borderRight: `${piece.size / 2}px solid transparent`,
              borderBottom: `${piece.size}px solid ${piece.color}`,
              // Enhanced glow for triangles
              filter: `drop-shadow(0 0 ${piece.size * 0.4}px ${piece.color}60)`,
              boxShadow: 'none', // Remove boxShadow for triangles as we use filter
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 9999 }}>
      {confetti.map(renderShape)}
      
      {/* Add a subtle overlay effect when confetti is active for extra celebration feel */}
      {confetti.length > 0 && (
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
            animation: 'pulse 2s ease-in-out infinite',
            zIndex: 9998,
          }}
        />
      )}
    </div>
  );
};

export default ConfettiCelebration;