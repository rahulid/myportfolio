import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Volume2, VolumeX } from 'lucide-react';

interface AssistantProps {
  activeSection: string;
  scrollPosition: number;
  onConfettiTrigger?: () => void;
}

const Assistant: React.FC<AssistantProps> = ({ activeSection, scrollPosition, onConfettiTrigger }) => {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const [targetPosition, setTargetPosition] = useState<'left' | 'right'>('right');
  const [currentHorizontalPosition, setCurrentHorizontalPosition] = useState(96); // Start at original right position
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(true);
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);
  const [showTourAgainPrompt, setShowTourAgainPrompt] = useState(false);
  const [isCelebrationMessageTyped, setIsCelebrationMessageTyped] = useState(false);
  const [isInCelebrationMode, setIsInCelebrationMode] = useState(false);
  const [isTourRestarting, setIsTourRestarting] = useState(false);
  const [tourRestartComplete, setTourRestartComplete] = useState(false);
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const animationRef = useRef<number | null>(null);

  // Calculate vertical position based on scroll position
  const getVerticalPosition = () => {
    // Define the range within which the assistant can move
    const minPosition = 30; // Minimum position from top (%)
    const maxPosition = 70; // Maximum position from top (%)
    
    // Get viewport height
    const viewportHeight = window.innerHeight;
    // Calculate the percentage scrolled through the page
    const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - viewportHeight)) * 100;
    
    // Map scroll percentage to position within our defined range
    const position = minPosition + ((maxPosition - minPosition) * (scrollPercentage / 100));
    
    // Ensure the position stays within our defined bounds
    return Math.max(minPosition, Math.min(position, maxPosition));
  };

  // Smooth horizontal position animation with original positioning
  useEffect(() => {
    // Original positioning: right = 96% (right-4 md:right-8), left = 4% (left-4 md:left-8)
    const targetHorizontalPosition = targetPosition === 'right' ? 96 : 4;
    
    if (Math.abs(currentHorizontalPosition - targetHorizontalPosition) < 1) {
      return; // Already at target position
    }

    const animatePosition = () => {
      setCurrentHorizontalPosition(prev => {
        const diff = targetHorizontalPosition - prev;
        const step = diff * 0.08; // Smooth easing factor
        
        // If we're very close to target, snap to it
        if (Math.abs(diff) < 0.5) {
          return targetHorizontalPosition;
        }
        
        return prev + step;
      });
    };

    const animate = () => {
      animatePosition();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetPosition, currentHorizontalPosition]);

  // Check if user has reached the bottom (95% scrolled)
  const checkBottomReached = () => {
    const viewportHeight = window.innerHeight;
    const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - viewportHeight)) * 100;
    return scrollPercentage >= 95;
  };

  // Check if user is at the top (less than 5% scrolled)
  const checkTopReached = () => {
    const viewportHeight = window.innerHeight;
    const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - viewportHeight)) * 100;
    return scrollPercentage <= 5;
  };

  // Enhanced confetti celebration sound
  const playConfettiSound = () => {
    try {
      // Create multiple layered sounds for a more impressive celebration
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create a celebration fanfare sound
      const createCelebrationSound = () => {
        // Main celebration tone
        const oscillator1 = audioContext.createOscillator();
        const gainNode1 = audioContext.createGain();
        
        oscillator1.type = 'sine';
        oscillator1.frequency.setValueAtTime(523, audioContext.currentTime); // C5
        oscillator1.frequency.setValueAtTime(659, audioContext.currentTime + 0.1); // E5
        oscillator1.frequency.setValueAtTime(784, audioContext.currentTime + 0.2); // G5
        
        gainNode1.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode1.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
        gainNode1.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.8);
        
        oscillator1.connect(gainNode1);
        gainNode1.connect(audioContext.destination);
        
        oscillator1.start(audioContext.currentTime);
        oscillator1.stop(audioContext.currentTime + 0.8);
        
        // Harmony tone
        const oscillator2 = audioContext.createOscillator();
        const gainNode2 = audioContext.createGain();
        
        oscillator2.type = 'triangle';
        oscillator2.frequency.setValueAtTime(392, audioContext.currentTime + 0.1); // G4
        oscillator2.frequency.setValueAtTime(523, audioContext.currentTime + 0.2); // C5
        oscillator2.frequency.setValueAtTime(659, audioContext.currentTime + 0.3); // E5
        
        gainNode2.gain.setValueAtTime(0, audioContext.currentTime + 0.1);
        gainNode2.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.15);
        gainNode2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.9);
        
        oscillator2.connect(gainNode2);
        gainNode2.connect(audioContext.destination);
        
        oscillator2.start(audioContext.currentTime + 0.1);
        oscillator2.stop(audioContext.currentTime + 0.9);
        
        // Pop sound effect
        const oscillator3 = audioContext.createOscillator();
        const gainNode3 = audioContext.createGain();
        
        oscillator3.type = 'square';
        oscillator3.frequency.setValueAtTime(1000, audioContext.currentTime);
        oscillator3.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);
        
        gainNode3.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode3.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.01);
        gainNode3.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
        
        oscillator3.connect(gainNode3);
        gainNode3.connect(audioContext.destination);
        
        oscillator3.start(audioContext.currentTime);
        oscillator3.stop(audioContext.currentTime + 0.15);
      };
      
      createCelebrationSound();
    } catch (error) {
      console.log('Audio not supported or blocked');
    }
  };

  const messages: Record<string, string> = {
    hero: "👋 Greetings! I'm your AI guide through Rahul Prema's digital space. Let me show you around!",
    about: "🚀 Discovering Rahul Prema's journey in tech - a story of innovation and expertise!",
    projects: "💡 Explore these groundbreaking projects that showcase Rahul Prema's technical prowess.",
    skills: "⚡ Witness the powerful tech stack that drives Rahul Prema's innovative solutions!",
    resume: "📈 Let's dive into Rahul Prema's impressive professional trajectory.",
    contact: "🤝 Ready to collaborate? Let's make the connection happen!",
    celebration: "🎉 SPECTACULAR! You've explored everything! Time for an EPIC celebration! *BOOM*",
    tourAgain: "🌟 Want to experience this amazing journey again?",
    thankYou: "✨ Thank you for exploring! Feel free to browse around or contact Rahul Prema anytime!"
  };

  // Handle tour restart - Yes
  const handleTourAgainYes = () => {
    console.log('🔄 Tour restart requested - resetting all states...');
    
    // Set tour restarting flag
    setIsTourRestarting(true);
    setTourRestartComplete(false);
    
    // Reset all celebration states
    setHasTriggeredConfetti(false);
    setShowTourAgainPrompt(false);
    setIsCelebrationMessageTyped(false);
    setIsInCelebrationMode(false);
    
    // Clear any ongoing typing or speech
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    if (speechRef.current) {
      window.speechSynthesis.cancel();
    }
    
    // Clear current message display
    setDisplayMessage('');
    setMessage('');
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('🔄 States reset, scrolling to top...');
  };

  // Handle tour restart - No
  const handleTourAgainNo = () => {
    setShowTourAgainPrompt(false);
    
    // Show thank you message
    setMessage(messages.thankYou);
    setDisplayMessage('');
    
    // Clear any ongoing typing or speech
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    if (speechRef.current) {
      window.speechSynthesis.cancel();
    }
    
    // Start typing the thank you message
    const textWithoutEmojis = messages.thankYou.replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
      .replace(/([.,!?])/g, '$1 ');

    if (isSpeechEnabled && speechRef.current) {
      speechRef.current.text = textWithoutEmojis;
      setTimeout(() => {
        if (isSpeechEnabled) {
          window.speechSynthesis.speak(speechRef.current!);
        }
      }, 300);
    }

    let currentChar = 0;
    const typeChar = () => {
      if (currentChar <= messages.thankYou.length) {
        setDisplayMessage(messages.thankYou.slice(0, currentChar));
        currentChar++;
        typingRef.current = setTimeout(typeChar, 50);
      }
    };
    typeChar();
  };

  // Function to type a message
  const typeMessage = (messageText: string, onComplete?: () => void) => {
    setDisplayMessage('');
    
    // Clear any ongoing typing or speech
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    if (speechRef.current) {
      window.speechSynthesis.cancel();
    }

    // Remove emojis and prepare text for speech
    const textWithoutEmojis = messageText.replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
      .replace(/([.,!?])/g, '$1 ');

    if (isSpeechEnabled && speechRef.current) {
      speechRef.current.text = textWithoutEmojis;
      setTimeout(() => {
        if (isSpeechEnabled) {
          window.speechSynthesis.speak(speechRef.current!);
        }
      }, 300);
    }

    let currentChar = 0;
    const typeChar = () => {
      if (currentChar <= messageText.length) {
        setDisplayMessage(messageText.slice(0, currentChar));
        currentChar++;
        typingRef.current = setTimeout(typeChar, 50);
      } else if (onComplete) {
        onComplete();
      }
    };
    typeChar();
  };

  // Check for tour restart completion when reaching top
  useEffect(() => {
    if (isTourRestarting && checkTopReached() && !tourRestartComplete) {
      console.log('🏠 Reached top after tour restart - completing restart process');
      
      // Mark tour restart as complete
      setTourRestartComplete(true);
      
      // Small delay to ensure we're properly at the top
      setTimeout(() => {
        setIsTourRestarting(false);
        console.log('🔄 Tour restart complete - normal operation resumed');
      }, 500);
    }
  }, [scrollPosition, isTourRestarting, tourRestartComplete]);

  // Check for bottom reached and trigger confetti - FIXED: Added isTourRestarting condition
  useEffect(() => {
    if (checkBottomReached() && !hasTriggeredConfetti && !isInCelebrationMode && !isTourRestarting) {
      console.log('🎉 Bottom reached! Triggering EPIC celebration...');
      
      setHasTriggeredConfetti(true);
      setIsInCelebrationMode(true);
      
      // Play enhanced celebration sound
      playConfettiSound();
      
      // Trigger confetti from parent
      if (onConfettiTrigger) {
        onConfettiTrigger();
      }
      
      // Show celebration message
      setMessage(messages.celebration);
      typeMessage(messages.celebration, () => {
        setIsCelebrationMessageTyped(true);
      });
    }
  }, [scrollPosition, hasTriggeredConfetti, isInCelebrationMode, onConfettiTrigger, isSpeechEnabled, isTourRestarting]);

  // Handle showing tour again prompt after celebration message is typed
  useEffect(() => {
    if (isCelebrationMessageTyped && !showTourAgainPrompt && isInCelebrationMode) {
      console.log('🌟 Showing tour again prompt...');
      
      // Wait a moment before showing the tour again prompt
      setTimeout(() => {
        setShowTourAgainPrompt(true);
        setMessage(messages.tourAgain);
        setIsCelebrationMessageTyped(false);
        
        typeMessage(messages.tourAgain);
      }, 2000); // 2 second delay after celebration message
    }
  }, [isCelebrationMessageTyped, showTourAgainPrompt, isInCelebrationMode, isSpeechEnabled]);

  useEffect(() => {
    // Initialize speech synthesis with enhanced settings
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      speechRef.current = new SpeechSynthesisUtterance();
      
      // Get available voices and select a female voice
      const setVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => 
          voice.name.includes('female') || 
          voice.name.includes('Samantha') || 
          voice.name.includes('Karen') ||
          voice.name.includes('Victoria')
        );
        
        if (femaleVoice) {
          speechRef.current!.voice = femaleVoice;
        }
      };

      // Handle voice loading
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = setVoice;
      }
      
      // Configure speech parameters for more natural sound
      speechRef.current.rate = 0.9; // Slightly slower for clarity
      speechRef.current.pitch = 1.1; // Slightly higher pitch for feminine voice
      speechRef.current.volume = 0.9;
      
      // Add natural pauses after punctuation
      speechRef.current.onboundary = (event) => {
        if (event.name === 'word') {
          const word = event.word || '';
          if (/[.,!?]$/.test(word)) {
            speechRef.current!.pause();
            setTimeout(() => {
              if (isSpeechEnabled) {
                speechRef.current!.resume();
              }
            }, word.endsWith('.') || word.endsWith('!') || word.endsWith('?') ? 500 : 200);
          }
        }
      };
    }

    return () => {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Main effect that handles section changes and message updates
  useEffect(() => {
    // Skip if we're in celebration mode, showing tour prompt, or actively restarting tour
    if (isInCelebrationMode || showTourAgainPrompt || isTourRestarting) {
      console.log('🚫 Skipping normal section update - in special mode');
      return;
    }

    console.log('📍 Active section changed to:', activeSection, '| Celebration mode:', isInCelebrationMode, '| Tour restarting:', isTourRestarting);

    // Switch target position based on section to avoid content overlap
    if (['hero', 'projects', 'resume'].includes(activeSection)) {
      setTargetPosition('right');
    } else {
      setTargetPosition('left');
    }

    const newMessage = messages[activeSection] || "🌟 Explore Rahul's digital universe!";
    setMessage(newMessage);
    
    typeMessage(newMessage);
  }, [activeSection, isSpeechEnabled, isInCelebrationMode, showTourAgainPrompt, isTourRestarting]);

  const handleEnableSpeech = () => {
    setIsSpeechEnabled(true);
    setShowPermissionPrompt(false);
  };

  const handleDisableSpeech = () => {
    setShowPermissionPrompt(false);
  };

  const toggleSpeech = () => {
    if (isSpeechEnabled) {
      window.speechSynthesis.cancel();
    }
    setIsSpeechEnabled(!isSpeechEnabled);
  };

  return (
    <div 
      className="fixed z-40"
      style={{ 
        left: `${currentHorizontalPosition}%`,
        top: `${getVerticalPosition()}%`,
        transform: `translate(-50%, -50%)`,
        transition: 'top 0.3s ease-out' // Only animate vertical position with CSS
      }}
    >
      <div className="relative">
        {/* Permission Prompt */}
        {showPermissionPrompt && (
          <div className={`absolute ${
            currentHorizontalPosition > 50 ? '-right-4 md:right-16' : '-left-4 md:left-16'
          } -top-32 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl 
          text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] rounded-2xl p-4 
          max-w-[280px] md:max-w-xs transform transition-all duration-500 
          border border-cyan-500/30 animate-float z-50`}>
            <p className="text-sm font-medium mb-3">
              Would you like me to guide you through the website with voice narration?
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleEnableSpeech}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium transition-colors"
              >
                Enable Voice
              </button>
              <button
                onClick={handleDisableSpeech}
                className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                No, thanks
              </button>
            </div>
          </div>
        )}
        
        {/* Message Bubble */}
        <div 
          className={`absolute ${
            currentHorizontalPosition > 50 ? '-right-4 md:right-16' : '-left-4 md:left-16'
          } -top-16 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl 
          text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] rounded-2xl p-4 
          max-w-[250px] md:max-w-xs transform transition-all duration-500 
          border border-cyan-500/30 animate-float ${
            hasTriggeredConfetti ? 'shadow-[0_0_30px_rgba(255,215,0,0.6)] border-yellow-400/50' : ''
          }`}
        >
          <div className="text-sm font-medium relative min-h-[2rem]">
            {displayMessage}
            <span className="animate-pulse">|</span>
            <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${
              hasTriggeredConfetti ? 'via-yellow-500' : 'via-cyan-500'
            } to-transparent opacity-50`}></div>
          </div>
          
          {/* Tour Again Buttons */}
          {showTourAgainPrompt && (
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleTourAgainYes}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium transition-colors"
              >
                Yes
              </button>
              <button
                onClick={handleTourAgainNo}
                className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                No, thanks
              </button>
            </div>
          )}
          
          <div 
            className={`absolute bottom-[-8px] ${
              currentHorizontalPosition > 50 ? 'left-[20%]' : 'right-[20%]'
            } w-0 h-0 border-t-[8px] border-t-slate-900/95 
            border-l-[8px] border-r-[8px] border-l-transparent border-r-transparent`}
          />
        </div>
        
        {/* Reactor Assembly */}
        <div className="relative group">
          {/* Outer Hexagonal Pattern */}
          <div className="absolute inset-[-16px] animate-spin-slow opacity-50">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute inset-0 border-2 ${
                  hasTriggeredConfetti ? 'border-yellow-500/30' : 'border-cyan-500/20'
                }`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  transform: `rotate(${i * 60}deg)`,
                }}
              />
            ))}
          </div>
          
          <div className={`absolute inset-[-12px] rounded-full ${
            hasTriggeredConfetti 
              ? 'bg-gradient-to-r from-yellow-500 to-orange-600' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-600'
          } opacity-20 blur-xl transform transition-all duration-500 ${
            hasTriggeredConfetti ? 'animate-pulse-fast' : 'animate-pulse-slow'
          }`}></div>
          
          <div className="absolute inset-[-8px] rounded-full overflow-hidden">
            <div className={`absolute inset-0 ${
              hasTriggeredConfetti 
                ? 'bg-gradient-to-t from-transparent via-yellow-500/20 to-transparent' 
                : 'bg-gradient-to-t from-transparent via-cyan-500/20 to-transparent'
            } animate-scan transform -translate-y-full`}></div>
          </div>
          
          {/* Main reactor container with padding for the mute button */}
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full relative overflow-visible
            ${hasTriggeredConfetti 
              ? 'shadow-[0_0_40px_rgba(255,215,0,0.8)]' 
              : 'shadow-[0_0_40px_rgba(6,182,212,0.6)]'
            } animate-float bg-slate-900/90 backdrop-blur-xl group p-2 transition-all duration-500`}
          >
            <div className={`absolute inset-1 rounded-full border-2 ${
              hasTriggeredConfetti ? 'border-yellow-500/40' : 'border-cyan-500/40'
            } animate-spin-reverse`}></div>
            <div className={`absolute inset-3 rounded-full border ${
              hasTriggeredConfetti ? 'border-yellow-400/30' : 'border-cyan-400/30'
            } animate-spin-slow`}></div>
            <div className={`absolute inset-5 rounded-full border-2 ${
              hasTriggeredConfetti ? 'border-orange-500/40' : 'border-blue-500/40'
            } animate-spin-reverse-slow`}></div>
            
            <div className={`absolute inset-6 rounded-full ${
              hasTriggeredConfetti 
                ? 'bg-gradient-conic from-yellow-500 via-orange-500 to-yellow-500' 
                : 'bg-gradient-conic from-cyan-500 via-blue-500 to-cyan-500'
            } animate-pulse-fast blur-sm`}></div>
            
            <div className="absolute inset-7 rounded-full bg-white/90 animate-glow"></div>
            
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                <div className={`w-full h-0.5 ${
                  hasTriggeredConfetti 
                    ? 'bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent' 
                    : 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent'
                } animate-pulse-slow`}
                  style={{ animationDelay: `${i * 0.1}s` }}></div>
              </div>
            ))}

            {/* Mute/Unmute Button - positioned inside the container */}
            <button
              onClick={toggleSpeech}
              className="absolute top-0 right-0 w-6 h-6 rounded-full 
                opacity-0 group-hover:opacity-100
                bg-slate-800/90 backdrop-blur-sm flex items-center justify-center
                hover:bg-cyan-500/20 transition-all duration-300
                shadow-[0_0_10px_rgba(6,182,212,0.3)]
                border border-cyan-500/30 z-50"
              aria-label={isSpeechEnabled ? "Mute assistant" : "Unmute assistant"}
            >
              {isSpeechEnabled ? (
                <Volume2 size={14} className="text-cyan-400" />
              ) : (
                <VolumeX size={14} className="text-cyan-400" />
              )}
            </button>
          </div>
          
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${
                hasTriggeredConfetti ? 'bg-yellow-500' : 'bg-cyan-500'
              } rounded-full animate-particle`}
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg) translateY(-20px)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Message Icon */}
          <div className={`absolute -top-1 -left-1 w-4 h-4 rounded-full 
            ${hasTriggeredConfetti 
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
              : 'bg-gradient-to-r from-cyan-400 to-blue-500'
            } flex items-center justify-center 
            animate-pulse ${
              hasTriggeredConfetti 
                ? 'shadow-[0_0_10px_rgba(255,215,0,0.5)]' 
                : 'shadow-[0_0_10px_rgba(6,182,212,0.5)]'
            }`}>
            <MessageCircle size={10} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;