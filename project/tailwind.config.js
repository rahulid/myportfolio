/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      scale: {
        10: '0.1',
        25: '0.25',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'pulse-slow': 'pulse-slow 3s infinite',
        'pulse-fast': 'pulse-fast 1.5s infinite',
        'pulse-ultra-fast': 'pulse-ultra-fast 0.8s infinite',
        wiggle: 'wiggle 1s ease-in-out',
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'spin-fast': 'spin-fast 2s linear infinite',
        ripple: 'ripple 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        blink: 'blink 1s infinite',
        'slide-up-fade-in': 'slide-up-fade-in 0.5s ease-out forwards',
        'slide-up-fade-out': 'slide-up-fade-out 0.5s ease-out forwards',
        // Loader animations
        'ai-power-up-glow': 'ai-power-up-glow 2s ease-in-out infinite',
        'ai-expand-disappear': 'ai-expand-disappear 1.5s ease-out forwards',
        'neon-particle-flow': 'neon-particle-flow 3s linear infinite',
        'neon-particle-flow-fast': 'neon-particle-flow-fast 1s linear infinite',
        'energy-ring': 'energy-ring 2s ease-out infinite',
        'energy-particle': 'energy-particle 1.5s ease-out infinite',
        'orbital-spin': 'orbital-spin 3s linear infinite',
        'orbital-spin-fast': 'orbital-spin-fast 1.5s ease-out forwards',
        'full-screen-burst': 'full-screen-burst 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up-fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'pulse-fast': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        'pulse-ultra-fast': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-fast': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        // Loader keyframes
        'ai-power-up-glow': {
          '0%, 100%': {
            opacity: '0.6',
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)',
          },
          '25%': {
            opacity: '0.9',
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.8)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.1)',
            boxShadow:
              '0 0 60px rgba(6, 182, 212, 1), 0 0 80px rgba(59, 130, 246, 0.6)',
          },
          '75%': {
            opacity: '0.9',
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.8)',
          },
        },
        'ai-expand-disappear': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '70%': { opacity: '0.8', transform: 'scale(15)' },
          '100%': { opacity: '0', transform: 'scale(25)' },
        },
        'neon-particle-flow': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px) translateY(20px) scale(0)',
          },
          '10%': {
            opacity: '1',
            transform: 'translateX(0) translateY(0) scale(1)',
          },
          '90%': {
            opacity: '1',
            transform: 'translateX(100vw) translateY(-20px) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(120vw) translateY(-40px) scale(0)',
          },
        },
        'neon-particle-flow-fast': {
          '0%': {
            opacity: '0',
            transform:
              'translateX(-30px) translateY(30px) scale(0) rotate(0deg)',
          },
          '15%': {
            opacity: '1',
            transform: 'translateX(0) translateY(0) scale(1.2) rotate(90deg)',
          },
          '85%': {
            opacity: '1',
            transform:
              'translateX(100vw) translateY(-30px) scale(1.2) rotate(270deg)',
          },
          '100%': {
            opacity: '0',
            transform:
              'translateX(130vw) translateY(-60px) scale(0) rotate(360deg)',
          },
        },
        'energy-ring': {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, -50%) scale(0.5)',
          },
          '50%': {
            opacity: '0.6',
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translate(-50%, -50%) scale(2)',
          },
        },
        'energy-particle': {
          '0%': {
            opacity: '1',
            transform:
              'rotate(var(--rotation, 0deg)) translateY(-40px) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform:
              'rotate(var(--rotation, 0deg)) translateY(-80px) scale(0)',
          },
        },
        'orbital-spin': {
          from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
          to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'orbital-spin-fast': {
          from: { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)' },
          to: { transform: 'translate(-50%, -50%) rotate(360deg) scale(10)' },
        },
        'full-screen-burst': {
          '0%': {
            opacity: '0.4',
            transform: 'translate(-50%, -50%) scale(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translate(-50%, -50%) scale(50)',
          },
        },
      },
      transitionTimingFunction: {
        'bounce-in-out': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [],
};

