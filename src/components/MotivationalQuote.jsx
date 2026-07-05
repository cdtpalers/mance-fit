"use client";
import { useState, useEffect } from "react";
import { QUOTES } from "@/lib/data";

export default function MotivationalQuote() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Initial random or day-based index
    const initialIdx = new Date().getDate() % QUOTES.length;
    setQuoteIdx(initialIdx);

    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % QUOTES.length);
      setAnimationKey((prev) => prev + 1); // trigger reflow for animation
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setQuoteIdx((prev) => (prev + 1) % QUOTES.length);
    setAnimationKey((prev) => prev + 1);
  };

  const q = QUOTES[quoteIdx] || QUOTES[0];
  const isVerse = q.tag === "Verse";

  return (
    <section 
      key={animationKey} 
      className="card quote-card" 
      aria-live="polite"
      style={{ animation: 'fadeQ 0.6s ease' }}
    >
      <button 
        className="pill icon-only quote-next" 
        onClick={handleNext} 
        aria-label="Next quote"
      >
        ↻
      </button>
      <div className={`quote-tag ${isVerse ? "verse" : ""}`}>
        {isVerse ? "Daily Verse" : "Daily Motivation"}
      </div>
      <blockquote>{"\u201C"}{q.text}{"\u201D"}</blockquote>
      <div className="muted small">— {q.who}</div>
    </section>
  );
}
