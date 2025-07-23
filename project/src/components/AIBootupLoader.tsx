import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const AIBootupLoader: React.FC = () => {
  const [stage, setStage] = useState<
    | 'dot'
    | 'particles'
    | 'avatar'
    | 'charging'
    | 'burst'
    | 'ejection'
    | 'transition'
    | 'complete'
  >('dot');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeline = [
      { stage: 'dot', duration: 800 },
      { stage: 'particles', duration: 1200 },
      { stage: 'avatar', duration: 1000 },
      { stage: 'charging', duration: 1500 },
      { stage: 'burst', duration: 600 },
      { stage: 'ejection', duration: 1200 },
      { stage: 'transition', duration: 800 },
      { stage: 'complete', duration: 0 },
    ];

    let timeoutId: NodeJS.Timeout;

    const executeStage = (stageIndex: number) => {
      if (stageIndex >= timeline.length) {
        // Animation sequence complete - just stay in final state
        setStage('complete');
        return;
      }

      const currentStage = timeline[stageIndex];
      setStage(currentStage.stage as any);

      // Handle charging stage progress
      if (currentStage.stage === 'charging') {
        let chargeProgress = 0;
        const chargeInterval = setInterval(() => {
          chargeProgress += 2;
          setProgress(chargeProgress);
          if (chargeProgress >= 100) {
            clearInterval(chargeInterval);
          }
        }, 30);
      }

      if (currentStage.duration > 0) {
        timeoutId = setTimeout(() => {
          executeStage(stageIndex + 1);
        }, currentStage.duration);
      } else {
        // Final stage reached - stay here until parent component hides the loader
        setStage('complete');
      }
    };

    executeStage(0);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-800 ${
        stage === 'transition' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Central Container */}
      <div className="relative flex items-center justify-center">
        {/* Stage 1: Enhanced Initial Glowing Dot - MUCH BRIGHTER */}
        <div
          className={`absolute transition-all duration-800 ease-out animate-pulse-ultra-fast ${
            stage === 'dot'
              ? 'w-4 h-4 opacity-100 scale-100'
              : stage === 'particles'
              ? 'w-2 h-2 opacity-60 scale-75'
              : 'w-0 h-0 opacity-0 scale-0'
          } bg-cyan-300 rounded-full`}
          style={{
            boxShadow:
              stage === 'dot' || stage === 'particles'
                ? '0 0 30px rgba(34, 211, 238, 1), 0 0 60px rgba(34, 211, 238, 0.8), 0 0 90px rgba(34, 211, 238, 0.6), 0 0 120px rgba(34, 211, 238, 0.4)'
                : 'none',
          }}
        />

        {/* Stage 2: Orbiting Particles - ENHANCED EJECTION EFFECT */}
        <div className="absolute">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: [
                  'linear-gradient(45deg, #06b6d4, #3b82f6)',
                  'linear-gradient(45deg, #ec4899, #f97316)',
                  'linear-gradient(45deg, #8b5cf6, #06b6d4)',
                  'linear-gradient(45deg, #f59e0b, #ec4899)',
                  'linear-gradient(45deg, #10b981, #8b5cf6)',
                  'linear-gradient(45deg, #ef4444, #f59e0b)',
                  'linear-gradient(45deg, #06b6d4, #10b981)',
                  'linear-gradient(45deg, #8b5cf6, #ec4899)',
                ][i],
                boxShadow: `0 0 15px ${
                  [
                    'rgba(34, 211, 238, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(34, 211, 238, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                  ][i]
                }`,
                top: '50%',
                left: '50%',
                // Enhanced transition for better visibility
                transition:
                  stage === 'ejection'
                    ? 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    : 'all 0.3s ease-out',
                // Dynamic animation and positioning based on stage
                ...(stage === 'particles' || stage === 'avatar'
                  ? {
                      // Normal orbital rotation
                      animation: `orbital-spin-${i} 2s linear infinite`,
                      opacity: 1,
                      transform: `translate(-50%, -50%) rotate(${
                        i * 45
                      }deg) translateX(40px) rotate(${-i * 45}deg) scale(1)`,
                    }
                  : stage === 'charging'
                  ? {
                      // Faster rotation during charging
                      animation: `orbital-spin-${i} 1s linear infinite`,
                      opacity: 1,
                      transform: `translate(-50%, -50%) rotate(${
                        i * 45
                      }deg) translateX(40px) rotate(${-i * 45}deg) scale(1.2)`,
                    }
                  : stage === 'burst'
                  ? {
                      // Stop rotation, prepare for ejection
                      animation: 'none',
                      opacity: 1,
                      transform: `translate(-50%, -50%) rotate(${
                        i * 45
                      }deg) translateX(50px) rotate(${-i * 45}deg) scale(1.5)`,
                    }
                  : stage === 'ejection'
                  ? {
                      // DRAMATIC FULL-SCREEN EJECTION - throw particles far beyond screen boundaries
                      animation: 'none',
                      opacity: 0,
                      transform: `translate(-50%, -50%) rotate(${
                        i * 45
                      }deg) translateX(${2000 + i * 300}px) rotate(${
                        -i * 45 + 1080
                      }deg) scale(0.1)`,
                      filter: 'blur(3px)',
                    }
                  : {
                      // Hidden for other stages
                      animation: 'none',
                      opacity: 0,
                      transform: 'translate(-50%, -50%) scale(0)',
                    }),
              }}
            />
          ))}
        </div>

        {/* Stage 3: AI Assistant Avatar - GRADUAL TRANSFORMATION */}
        <div
          className={`absolute transition-all duration-1000 ease-out ${
            stage === 'particles'
              ? 'opacity-50 scale-50' // Start appearing during particles stage
              : stage === 'avatar' ||
                stage === 'charging' ||
                stage === 'burst' ||
                stage === 'ejection' ||
                stage === 'complete'
              ? 'opacity-100 scale-100'
              : stage === 'transition'
              ? 'opacity-100 scale-100 transform translate-x-[calc(50vw-2rem)] translate-y-[calc(-50vh+4rem)] scale-75'
              : 'opacity-0 scale-25'
          }`}
        >
          {/* Custom AI Assistant Reactor Assembly */}
          <div className="relative group">
            {/* Outer Hexagonal Pattern */}
            <div className="absolute inset-[-16px] animate-spin-slow opacity-50">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-cyan-500/30"
                  style={{
                    clipPath:
                      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    transform: `rotate(${i * 60}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Outer Glow */}
            <div className="absolute inset-[-12px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl animate-pulse-slow"></div>

            {/* Scanning Effect */}
            <div className="absolute inset-[-8px] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/20 to-transparent animate-scan transform -translate-y-full"></div>
            </div>

            {/* Main reactor container */}
            <div
              className={`w-20 h-20 rounded-full relative overflow-visible
              shadow-[0_0_40px_rgba(6,182,212,0.8)] animate-float bg-slate-900/90 backdrop-blur-xl p-2 transition-all duration-500 ${
                stage === 'charging' ||
                stage === 'burst' ||
                stage === 'ejection' ||
                stage === 'complete'
                  ? 'shadow-[0_0_60px_rgba(6,182,212,1),0_0_100px_rgba(6,182,212,0.6)]'
                  : ''
              }`}
            >
              {/* Inner rotating borders */}
              <div className="absolute inset-1 rounded-full border-2 border-cyan-500/40 animate-spin-reverse"></div>
              <div className="absolute inset-3 rounded-full border border-cyan-400/30 animate-spin-slow"></div>
              <div className="absolute inset-5 rounded-full border-2 border-blue-500/40 animate-spin-reverse-slow"></div>

              {/* Core energy */}
              <div className="absolute inset-6 rounded-full bg-gradient-conic from-cyan-500 via-blue-500 to-cyan-500 animate-pulse-fast blur-sm"></div>
              <div className="absolute inset-7 rounded-full bg-white/90 animate-glow"></div>

              {/* Radial energy lines */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `rotate(${i * 30}deg)` }}
                >
                  <div
                    className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse-slow"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                </div>
              ))}

              {/* Message Icon */}
              <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                <MessageCircle size={10} className="text-white" />
              </div>
            </div>

            {/* Floating particles around reactor */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-500 rounded-full animate-particle"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-20px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Stage 4: Charging Ring - ADJUSTED TO RADIUS 110px */}
        {(stage === 'charging' ||
          stage === 'burst' ||
          stage === 'ejection' ||
          stage === 'complete') && (
          <div className="absolute">
            {/* Background Ring - Adjusted to 220px diameter (110px radius) */}
            <div className="w-[220px] h-[220px] rounded-full border-2 border-cyan-400/20" />

            {/* Progress Ring - Adjusted to 220px diameter (110px radius) */}
            <svg
              className="absolute inset-0 w-[220px] h-[220px] -rotate-90"
              viewBox="0 0 220 220"
            >
              <circle
                cx="110"
                cy="110"
                r="110"
                fill="none"
                stroke="url(#charging-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 110}`}
                strokeDashoffset={`${2 * Math.PI * 110 * (1 - progress / 100)}`}
                className="transition-all duration-100 ease-out drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />
              <defs>
                <linearGradient
                  id="charging-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Charging Particles - Adjusted to 130px distance from center */}
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1.5 h-1.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                  progress > i * 6.25
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-0'
                }`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${
                    i * 22.5
                  }deg) translateX(130px)`,
                  boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)',
                  animation:
                    progress > i * 6.25
                      ? `energy-particle 1s ease-out infinite`
                      : 'none',
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Stage 5: Energy Burst - FLASH FIRST, THEN RINGS */}
        {stage === 'burst' && (
          <div className="absolute">
            {/* Central Flash - Appears FIRST with no delay */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-400/60 rounded-full animate-flash-first" />

            {/* Expanding Rings - Appear AFTER flash with delay */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-cyan-400/60 rounded-full"
                style={{
                  width: '120px',
                  height: '120px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `rings-after-flash 0.8s ease-out forwards`,
                  animationDelay: `${0.3 + i * 0.08}s`, // Start after flash (0.3s delay) + staggered
                }}
              />
            ))}
          </div>
        )}

        {/* Loading Text */}
        <div
          className={`absolute top-40 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
            stage === 'dot' || stage === 'particles'
              ? 'opacity-0 translate-y-4'
              : stage === 'transition'
              ? 'opacity-0 -translate-y-4'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="text-cyan-400 text-lg font-medium tracking-wider text-center">
            {stage === 'avatar' && 'INITIALIZING AI ASSISTANT'}
            {stage === 'charging' &&
              `NEURAL CORE CHARGING... ${Math.round(progress)}%`}
            {stage === 'burst' && 'ENERGY BURST INITIATED'}
            {stage === 'ejection' && 'SYSTEM READY'}
            {stage === 'complete' && 'LOADING WEBSITE CONTENT...'}
          </div>
          <div className="flex justify-center mt-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full mx-1 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes orbital-spin-0 { from { transform: translate(-50%, -50%) rotate(0deg) translateX(40px) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg); } }
        @keyframes orbital-spin-1 { from { transform: translate(-50%, -50%) rotate(45deg) translateX(40px) rotate(-45deg); } to { transform: translate(-50%, -50%) rotate(405deg) translateX(40px) rotate(-405deg); } }
        @keyframes orbital-spin-2 { from { transform: translate(-50%, -50%) rotate(90deg) translateX(40px) rotate(-90deg); } to { transform: translate(-50%, -50%) rotate(450deg) translateX(40px) rotate(-450deg); } }
        @keyframes orbital-spin-3 { from { transform: translate(-50%, -50%) rotate(135deg) translateX(40px) rotate(-135deg); } to { transform: translate(-50%, -50%) rotate(495deg) translateX(40px) rotate(-495deg); } }
        @keyframes orbital-spin-4 { from { transform: translate(-50%, -50%) rotate(180deg) translateX(40px) rotate(-180deg); } to { transform: translate(-50%, -50%) rotate(540deg) translateX(40px) rotate(-540deg); } }
        @keyframes orbital-spin-5 { from { transform: translate(-50%, -50%) rotate(225deg) translateX(40px) rotate(-225deg); } to { transform: translate(-50%, -50%) rotate(585deg) translateX(40px) rotate(-585deg); } }
        @keyframes orbital-spin-6 { from { transform: translate(-50%, -50%) rotate(270deg) translateX(40px) rotate(-270deg); } to { transform: translate(-50%, -50%) rotate(630deg) translateX(40px) rotate(-630deg); } }
        @keyframes orbital-spin-7 { from { transform: translate(-50%, -50%) rotate(315deg) translateX(40px) rotate(-315deg); } to { transform: translate(-50%, -50%) rotate(675deg) translateX(40px) rotate(-675deg); } }
        
        @keyframes flash-first {
          0% { opacity: 0.15; transform: translate(-50%, -50%) scale(0); }
          30% { opacity: 0.15; transform: translate(-50%, -50%) scale(100); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(100); }
        }
        
        @keyframes rings-after-flash {
          0% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(25); }
        }
        
        @keyframes energy-particle {
          0% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rotation)) translateX(130px) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rotation)) translateX(150px) scale(0); }
        }
      `}</style>
    </div>
  );
};

export default AIBootupLoader;
