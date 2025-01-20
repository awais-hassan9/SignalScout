import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  className?: string;
  baseSpeed?: number;
}

const Typewriter = React.forwardRef<HTMLParagraphElement, TypewriterProps>(
  ({ text = "", className, baseSpeed = 12 }, ref) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
      if (!text) return;

      if (currentIndex < text.length) {
        // Vary speed slightly for more natural feeling
        const variableSpeed = baseSpeed + Math.random() * 8 - 4; // ±4ms variation

        // Add slight pause after punctuation
        const currentChar = text[currentIndex];
        const pauseTime = /[.,!?]/.test(currentChar) ? 100 : 0;

        const timeoutId = setTimeout(() => {
          setDisplayText((current) => current + currentChar);
          setCurrentIndex((current) => current + 1);
          if (currentIndex === text.length - 1) {
            setIsTypingComplete(true);
          }
        }, variableSpeed + pauseTime);

        return () => clearTimeout(timeoutId);
      }
    }, [text, currentIndex, baseSpeed]);

    return (
      <p ref={ref} className={cn("relative", className)}>
        {displayText}
        {!isTypingComplete && (
          <span className="ml-[1px] inline-block h-4 w-[2px] animate-pulse bg-current" />
        )}
      </p>
    );
  }
);
Typewriter.displayName = "Typewriter";

export { Typewriter };
