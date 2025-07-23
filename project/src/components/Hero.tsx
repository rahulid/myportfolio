import React from 'react';
import { ChevronDown } from 'lucide-react';
import DecryptedText from './DecryptedText';
import RotatingText from './RotatingText';

import HeroImage from '/src/assets/HeroImage.jpg';

interface HeroProps {
  id: string;
  isDarkMode: boolean;
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ id, isDarkMode, isLoaded }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split the paragraph into individual lines for line-by-line decryption
  const paragraphLines = [
    "I'm a self-taught software developer with a strong ",
    'interest in data science, machine learning, AI and ',
    "having a good foundation in Python. I'm now seeking ",
    'an entry-level role where I can continue learning, ',
    'grow my skills, and contribute to building real-world,',
    'data-driven solutions.',
  ];

  // Rotating text phrases
  const rotatingPhrases = [
    'Python Developer',
    'Data Science Enthusiast',
    'AI/ML Enthusiast',
  ];

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col md:flex-row relative overflow-hidden"
    >
      {/* Left side - Circular Frame for Headshot with Optimized Shape Blur Effects */}
      <div
        className={`w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative overflow-hidden flex items-center justify-center ${
          isDarkMode ? 'bg-indigo-900' : 'bg-indigo-100'
        }`}
      >
        {/* Optimized Shape Blur Effects Container */}
        <div className="relative z-10 group">
          {/* PRIMARY MORPHING BLOB - Optimized */}
          <div
            className={`absolute top-1/2 left-1/2 w-[200%] h-[200%] ${
              isDarkMode
                ? 'bg-gradient-to-br from-indigo-400/50 via-purple-500/40 to-cyan-400/50'
                : 'bg-gradient-to-br from-indigo-500/60 via-purple-600/50 to-cyan-500/60'
            } blur-2xl animate-morph-blob z-0 group-hover:opacity-90 transition-opacity duration-500`}
            style={{
              transform: 'translate(-50%, -50%)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              opacity: '0.7',
            }}
          />

          {/* SECONDARY MORPHING BLOB - Optimized */}
          <div
            className={`absolute top-1/2 left-1/2 w-[180%] h-[180%] ${
              isDarkMode
                ? 'bg-gradient-to-tl from-cyan-400/40 via-blue-500/30 to-purple-400/40'
                : 'bg-gradient-to-tl from-cyan-500/50 via-blue-600/40 to-purple-500/50'
            } blur-xl z-0 group-hover:opacity-80 transition-opacity duration-500`}
            style={{
              transform: 'translate(-50%, -50%)',
              borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
              animation: 'morph-blob-reverse 10s ease-in-out infinite',
              opacity: '0.6',
            }}
          />

          {/* RADIAL PULSING BLUR - Optimized */}
          <div
            className={`absolute top-1/2 left-1/2 w-[160%] h-[160%] ${
              isDarkMode
                ? 'bg-gradient-radial from-indigo-300/30 via-purple-400/20 to-transparent'
                : 'bg-gradient-radial from-indigo-600/40 via-purple-700/30 to-transparent'
            } blur-lg animate-radial-pulse z-0 group-hover:scale-105 transition-transform duration-500`}
            style={{ transform: 'translate(-50%, -50%)', opacity: '0.7' }}
          />

          {/* ORBITAL DANCING SHAPES - Reduced from 16 to 6 */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-16 h-20 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-purple-400/40 to-cyan-400/30'
                  : 'bg-gradient-to-br from-purple-600/50 to-cyan-600/40'
              } blur-lg z-0 group-hover:opacity-80 transition-opacity duration-500`}
              style={{
                top: '50%',
                left: '50%',
                borderRadius: `${60 + i * 5}% ${40 - i * 3}% ${30 + i * 6}% ${
                  70 - i * 4
                }% / ${60 - i * 3}% ${30 + i * 7}% ${70 - i * 5}% ${
                  40 + i * 3
                }%`,
                animation: `orbital-dance ${12 + i * 2}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                transform: `translate(-50%, -50%) rotate(${
                  i * 60
                }deg) translateX(${80 + i * 15}px) rotate(${-i * 60}deg)`,
                opacity: '0.6',
              }}
            />
          ))}

          {/* SWIRLING CONIC GRADIENTS - Optimized */}
          <div
            className={`absolute top-1/2 left-1/2 w-[140%] h-[140%] ${
              isDarkMode
                ? 'bg-gradient-conic from-indigo-400/30 via-purple-500/25 via-cyan-400/30 to-indigo-400/30'
                : 'bg-gradient-conic from-indigo-600/40 via-purple-700/35 via-cyan-600/40 to-indigo-600/40'
            } blur-xl animate-spin-slow z-0 group-hover:opacity-80 transition-opacity duration-500`}
            style={{
              transform: 'translate(-50%, -50%)',
              animationDuration: '15s',
              opacity: '0.6',
            }}
          />

          {/* Main headshot circle - Higher z-index to appear above blur effects */}
          <div
            className={`w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 ${
              isDarkMode
                ? 'border-indigo-300/90 bg-gray-800/60 hover:border-cyan-400/90 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]'
                : 'border-indigo-600/90 bg-white/80 hover:border-cyan-600/90 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]'
            } backdrop-blur-sm shadow-2xl relative overflow-hidden group/circle transition-all duration-500 hover:scale-105 z-20`}
          >
            {/* Inner blur effects inside the circle - Optimized */}
            <div className="absolute inset-0 overflow-hidden rounded-full z-10">
              {/* Central morphing blur inside circle - Optimized */}
              <div
                className={`absolute inset-4 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-indigo-400/40 via-purple-500/30 to-cyan-400/40'
                    : 'bg-gradient-to-br from-indigo-600/50 via-purple-700/40 to-cyan-600/50'
                } blur-lg group-hover/circle:opacity-90 transition-opacity duration-500`}
                style={{
                  borderRadius: '50% 60% 30% 60% / 60% 30% 60% 40%',
                  animation: 'morph-blob 6s ease-in-out infinite',
                  opacity: '0.6',
                }}
              />

              {/* Floating blur particles inside - Reduced from 12 to 6 */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-8 h-10 ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-cyan-300/50 to-purple-300/40'
                      : 'bg-gradient-to-br from-cyan-600/60 to-purple-600/50'
                  } blur-sm group-hover/circle:opacity-80 transition-opacity duration-500`}
                  style={{
                    top: `${40 + Math.sin((i * 60 * Math.PI) / 180) * 20}%`,
                    left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 20}%`,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: `${50 + i * 6}% ${40 - i * 3}% ${
                      60 + i * 4
                    }% ${30 - i * 2}%`,
                    animation: `float ${3 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                    opacity: '0.6',
                  }}
                />
              ))}
            </div>

            {/* Professional headshot image */}
            <div className="absolute inset-0 z-30 rounded-full overflow-hidden">
              <img
                src={HeroImage}
                alt="Rahul Prema - Python Developer & Data Science Enthusiast"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/circle:scale-110"
                style={{
                  filter: isDarkMode
                    ? 'brightness(0.9) contrast(1.1) saturate(1.1)'
                    : 'brightness(1.05) contrast(1.05) saturate(1.05)',
                }}
              />

              {/* Subtle overlay for better integration */}
              <div
                className={`absolute inset-0 ${
                  isDarkMode
                    ? 'bg-gradient-to-t from-indigo-900/15 via-transparent to-purple-900/10'
                    : 'bg-gradient-to-t from-indigo-100/15 via-transparent to-purple-100/10'
                } opacity-40`}
              ></div>
            </div>

            {/* Enhanced hover blur effects - Optimized */}
            <div
              className={`absolute inset-0 rounded-full border-2 ${
                isDarkMode ? 'border-cyan-300/60' : 'border-cyan-600/70'
              } opacity-0 group-hover/circle:opacity-100 transition-all duration-500 blur-sm animate-spin-slow z-25`}
            ></div>
          </div>
        </div>

        {/* Enhanced floating blur particles around the entire area - Reduced from 30 to 10 */}
        <div className="absolute inset-0 pointer-events-none z-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-6 h-8 ${
                isDarkMode ? 'bg-indigo-300/60' : 'bg-indigo-600/70'
              } blur-sm group-hover:opacity-80 transition-opacity duration-500`}
              style={{
                top: `${15 + Math.sin((i * 36 * Math.PI) / 180) * 35}%`,
                left: `${50 + Math.cos((i * 36 * Math.PI) / 180) * 40}%`,
                borderRadius: `${50 + i * 3}% ${40 - i * 2}% ${60 + i * 3}% ${
                  30 - i
                }%`,
                animation: `float ${3 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                opacity: '0.5',
              }}
            />
          ))}
        </div>

        {/* Background ambient blur shapes - Optimized */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Large floating blob - top left - Optimized */}
          <div
            className={`absolute -top-20 -left-20 w-[300px] h-[300px] ${
              isDarkMode
                ? 'bg-gradient-to-br from-purple-400/50 to-indigo-500/40'
                : 'bg-gradient-to-br from-purple-500/60 to-indigo-600/50'
            } rounded-full blur-2xl animate-float group-hover:opacity-80 transition-opacity duration-500`}
            style={{
              animationDuration: '8s',
              animationDelay: '0s',
              opacity: '0.7',
            }}
          />

          {/* Medium blob - center right - Optimized */}
          <div
            className={`absolute top-1/3 -right-16 w-[250px] h-[250px] ${
              isDarkMode
                ? 'bg-gradient-to-br from-cyan-400/40 to-blue-500/30'
                : 'bg-gradient-to-br from-cyan-500/50 to-blue-600/40'
            } rounded-full blur-2xl animate-float group-hover:opacity-80 transition-opacity duration-500`}
            style={{
              animationDuration: '10s',
              animationDelay: '2s',
              opacity: '0.6',
            }}
          />
        </div>
      </div>

      {/* Right side - Text with subtle shape blur background */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 relative ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        {/* Background shape blur effects for text side - Optimized */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div
            className={`absolute top-20 right-10 w-48 h-48 ${
              isDarkMode
                ? 'bg-gradient-to-br from-indigo-500/30 to-purple-600/25'
                : 'bg-gradient-to-br from-indigo-400/50 to-purple-500/40'
            } blur-2xl animate-float`}
            style={{
              animationDuration: '15s',
              animationDelay: '2s',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            }}
          />

          <div
            className={`absolute bottom-32 left-8 w-56 h-56 ${
              isDarkMode
                ? 'bg-gradient-to-br from-cyan-500/25 to-blue-600/20'
                : 'bg-gradient-to-br from-cyan-400/40 to-blue-500/35'
            } blur-2xl animate-float`}
            style={{
              animationDuration: '18s',
              animationDelay: '5s',
              borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            }}
          />
        </div>

        <div className="max-w-md animate-fade-in-up relative z-10 w-full">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            } mb-4`}
          >
            <div
              className="overflow-hidden w-full"
              style={{ minHeight: '1.2em' }}
            >
              <DecryptedText
                text="Hello, I am"
                delay={500}
                speed={30}
                className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}
                startTrigger={isLoaded}
              />
            </div>
            <span
              className="block mt-2 text-5xl md:text-6xl lg:text-7xl overflow-hidden w-full"
              style={{ minHeight: '1.2em' }}
            >
              <DecryptedText
                text="Rahul Prema"
                delay={500}
                speed={80}
                className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                startTrigger={isLoaded}
              />
            </span>
          </h1>
          <h2
            className={`text-xl md:text-2xl font-light ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            } mb-8 w-full`}
          >
            <RotatingText
              phrases={rotatingPhrases}
              interval={3000}
              animationDuration={500}
              className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } font-light`}
              startTrigger={isLoaded}
            />
          </h2>

          {/* Line-by-line paragraph decryption */}
          <div
            className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            } mb-8 leading-relaxed overflow-hidden w-full max-w-full`}
          >
            {paragraphLines.map((line, index) => (
              <div key={index} className="overflow-hidden w-full">
                <DecryptedText
                  text={line}
                  delay={500 + index * 200} // Stagger each line by 200ms
                  speed={30}
                  className={`${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  } block w-full`}
                  showCursor={false}
                  startTrigger={isLoaded}
                />
              </div>
            ))}
          </div>

          <button
            className={`px-8 py-3 ${
              isDarkMode
                ? 'bg-indigo-500 hover:bg-indigo-400 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            } rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:shadow-lg hover:shadow-indigo-500/25`}
            onClick={() => {
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${
          isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
        } animate-bounce z-30`}
        onClick={scrollToAbout}
        aria-label="Scroll down to About section"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
