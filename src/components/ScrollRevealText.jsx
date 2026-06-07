import React, { useRef, useEffect } from "react";

function ScrollRevealText({ text, className }) {
  const containerRef = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const spans = el.querySelectorAll(".reveal-word");
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the text container is relative to the viewport.
      // Starts highlighting when the top of the element hits 85% of screen height.
      // Completes highlighting when the bottom of the element is at 30% of screen height.
      const startPoint = windowHeight * 0.85;
      const endPoint = windowHeight * 0.25;
      const range = startPoint - endPoint;
      
      const progress = Math.min(Math.max(0, (startPoint - rect.top) / range), 1);
      
      const totalWords = spans.length;
      spans.forEach((span, i) => {
        // Offset start thresholds so words reveal progressively from start to end
        const wordStart = (i / totalWords) * 0.7; // distributed over 70% of scroll progress
        const wordDuration = 0.3; // duration of transition for a single word
        
        // Calculate normal progress for this specific word
        const wordProgress = Math.min(Math.max(0, (progress - wordStart) / wordDuration), 1);
        
        // Scale opacity from 0.35 (dimmed) to 1.0 (fully lit)
        const opacity = 0.35 + wordProgress * 0.65;
        span.style.opacity = opacity;
        
        // Transition text colors: white for illuminated, light gray for dimmed
        span.style.color = wordProgress > 0.4 ? "#ffffff" : "#a1a1a6";
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    // Trigger initial position calculate
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [text]);

  return (
    <p ref={containerRef} className={className} style={{ display: "inline-block" }}>
      {words.map((word, i) => (
        <span
          key={i}
          className="reveal-word"
          style={{
            display: "inline-block",
            marginRight: "0.26em",
            opacity: 0.35,
            color: "#a1a1a6",
            transition: "opacity 0.08s ease-out, color 0.08s ease-out",
            willChange: "opacity, color"
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default ScrollRevealText;
