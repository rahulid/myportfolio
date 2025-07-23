@@ .. @@
   useEffect(() => {
     // Initialize speech synthesis with enhanced settings
     if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
       speechRef.current = new SpeechSynthesisUtterance();
       
       // Enhanced voice selection function
       const setVoice = () => {
         const voices = window.speechSynthesis.getVoices();
         console.log('Available voices:', voices.map(v => ({ name: v.name, lang: v.lang, gender: v.name })));
         
         // Priority order for female voices (more comprehensive list)
         const femaleVoiceNames = [
           'Samantha', 'Victoria', 'Karen', 'Susan', 'Allison', 'Ava',
           'Google UK English Female', 'Google US English Female',
           'Microsoft Zira Desktop', 'Microsoft Hazel Desktop',
           'female', 'woman', 'lady'
         ];
         
         // First, try to find voices by name
         let femaleVoice = voices.find(voice => 
           femaleVoiceNames.some(name => 
             voice.name.toLowerCase().includes(name.toLowerCase())
           )
         );
         
         // If no female voice found by name, try to find English voices that might be female
         if (!femaleVoice) {
           femaleVoice = voices.find(voice => 
             voice.lang.startsWith('en') && 
             (voice.name.includes('2') || voice.name.includes('3') || voice.name.includes('Female'))
           );
         }
         
         // Fallback: use any English voice that's not explicitly male
         if (!femaleVoice) {
           femaleVoice = voices.find(voice => 
             voice.lang.startsWith('en') && 
             !voice.name.toLowerCase().includes('male') &&
             !voice.name.toLowerCase().includes('man') &&
             !voice.name.toLowerCase().includes('david') &&
             !voice.name.toLowerCase().includes('alex')
           );
         }
         
         if (femaleVoice) {
           speechRef.current!.voice = femaleVoice;
           console.log('Selected voice:', femaleVoice.name);
         } else {
           console.log('No suitable female voice found, using default');
         }
       };

       // Set voice immediately if voices are already loaded
       if (window.speechSynthesis.getVoices().length > 0) {
         setVoice();
       }
       
       // Also set up the event listener for when voices load asynchronously
       if (window.speechSynthesis.onvoiceschanged !== undefined) {
         window.speechSynthesis.onvoiceschanged = setVoice;
       }
       
       // Fallback: try to set voice after a short delay (for some browsers)
       setTimeout(() => {
         if (window.speechSynthesis.getVoices().length > 0 && !speechRef.current?.voice) {
           setVoice();
         }
       }, 100);
       
       // Configure speech parameters for more natural sound
       speechRef.current.rate = 0.9; // Slightly slower for clarity
       speechRef.current.pitch = 1.1; // Slightly higher pitch for feminine voice
       speechRef.current.volume = 0.9;
     }
   }, []);