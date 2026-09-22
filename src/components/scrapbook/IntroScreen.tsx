import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    if (!isVisible) return;
    setIsVisible(false);
    setTimeout(onComplete, 1000); // Wait for the exit animation to finish
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-4 sm:p-8 cursor-pointer"
          onClick={handleDismiss}
        >
          <div className="relative flex max-w-md flex-col items-center text-center">
            {/* Doodle Art */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              className="mb-8"
            >
              <svg width="120" height="120" viewBox="0 0 100 100" className="text-foreground stroke-current stroke-2 fill-none overflow-visible" strokeLinecap="round" strokeLinejoin="round">
                 {/* Wobbly circle face */}
                 <path d="M50 10 C25 12 10 30 10 50 C12 75 30 90 50 90 C75 88 90 70 90 50 C88 25 70 10 50 10 Z" />
                 {/* Eyes */}
                 <path d="M35 40 Q40 33 45 40" />
                 <path d="M55 40 Q60 33 65 40" />
                 {/* Smile */}
                 <path d="M38 55 Q50 70 62 55" />
                 {/* Blushing cheeks */}
                 <circle cx="30" cy="50" r="4" className="fill-[#F4B8C4] stroke-none" opacity="0.6" />
                 <circle cx="70" cy="50" r="4" className="fill-[#F4B8C4] stroke-none" opacity="0.6" />
                 {/* Little heart floating */}
                 <motion.path 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                    d="M80 10 C85 5 95 5 100 10 C105 15 105 25 100 30 L85 45 L70 30 C65 25 65 15 70 10 Z" 
                    className="fill-[#E96A75] stroke-[#E96A75] stroke-1" 
                    transform="scale(0.5) translate(40, -20)"
                 />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="font-caveat text-4xl sm:text-5xl md:text-6xl text-foreground"
            >
              hello sneh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="mt-6 font-caveat text-2xl sm:text-3xl text-foreground/80 leading-relaxed"
            >
              So heres something for you<br/>and just scroll hehe
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1 }}
              className="absolute -bottom-24 font-caveat text-xl text-foreground/40 animate-pulse"
            >
              (tap anywhere to continue)
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
