import React, { useState, useEffect, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  delay?: number;
  speed?: number; // milliseconds per character
  className?: string;
  showCursor?: boolean;
  startTrigger: boolean;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  delay = 0, 
  speed = 80, // Slower default speed
  className = '',
  showCursor = true,
  startTrigger 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Characters to use for scrambling effect
  const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  // Generate scrambled character
  const getScrambledChar = (originalChar: string) => {
    // Preserve spaces and punctuation
    if (originalChar === ' ' || /[.,!?;:]/.test(originalChar)) {
      return originalChar;
    }
    // Scramble letters and numbers
    return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
  };

  useEffect(() => {
    // Clear any existing timers
    if (intervalRef.current) clearTimeout(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Reset states
    setIsComplete(false);
    setIsStarted(false);

    // If not triggered, show empty space but maintain layout
    if (!startTrigger) {
      setDisplayText('');
      return;
    }

    console.log(`🔤 Starting decryption for: "${text}"`);

    // Start the decryption process after delay
    timeoutRef.current = setTimeout(() => {
      setIsStarted(true);
      let currentIndex = 0;

      const decryptNextChar = () => {
        if (currentIndex >= text.length) {
          setIsComplete(true);
          setDisplayText(text);
          console.log(`✅ Decryption complete: "${text}"`);
          return;
        }

        // Build the display text character by character
        let newDisplayText = '';
        
        for (let i = 0; i < text.length; i++) {
          if (i < currentIndex) {
            // Already decrypted characters
            newDisplayText += text[i];
          } else if (i === currentIndex) {
            // Currently decrypting character
            newDisplayText += text[i];
          } else {
            // Future characters - show scrambled
            newDisplayText += getScrambledChar(text[i]);
          }
        }

        setDisplayText(newDisplayText);
        currentIndex++;

        // Schedule next character
        intervalRef.current = setTimeout(decryptNextChar, speed);
      };

      // Start decryption
      decryptNextChar();

    }, delay);

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, delay, speed, startTrigger]);

  return (
    <span 
      className={`${className} inline-block`}
      style={{
        minHeight: '1.5em', // Prevent layout shift
        width: '100%',
        fontFamily: 'monospace', // Consistent character width
        whiteSpace: 'pre-wrap', // Preserve spaces and line breaks
        wordBreak: 'break-word'
      }}
    >
      {displayText || (startTrigger ? '' : '')}
      {showCursor && !isComplete && isStarted && startTrigger && (
        <span className="animate-blink text-cyan-400 ml-1">|</span>
      )}
    </span>
  );
};

export default DecryptedText;