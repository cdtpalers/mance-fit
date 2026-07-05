"use client";
import { useState } from "react";
import { PLANS } from "@/lib/data";

export default function WorkoutSection({ plan, setPlan, activeDay, setActiveDay, pdfs, apiKey, openSettings }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState("");
  const todayIdx = (new Date().getDay() + 6) % 7; // Monday = 0

  const handleGenerate = async () => {
    if (!apiKey && !process.env.NEXT_PUBLIC_HAS_SERVER_KEY) {
      openSettings();
      return;
    }

    setIsGenerating(true);
    setGenError("");
    
    try {
      const content = [
        ...pdfs.map((p) => ({ type: "document", source: { type: "base64", media_type: "application/pdf", data: p.data } })),
        { type: "text", text:
`You are a certified strength & conditioning coach. Using the attached training PDFs${pdfs.length ? "" : " (none attached — use general best practice)"}, build a 7-day workout plan (Monday–Sunday) tailored to their programming. Vary the plan day by day and include at least one recovery day. Keep it COMPACT: max 5 exercises per day, notes under 6 words or empty string.
Respond with ONLY valid JSON, no markdown fences, no preamble, exactly this shape:
{"source":"one-line description of what the plan is based on","days":[{"day":"Monday","title":"...","focus":"...","duration":"...","exercises":[{"name":"...","sets":"...","reps":"...","notes":"..."}]}]} with exactly 7 day items.` },
      ];
      
      const { askClaude } = await import("@/app/actions");
      const text = await askClaude(content, 3000, apiKey);
      const cleanedText = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleanedText);
      
      if (!parsed.days || parsed.days.length < 7) throw new Error("Incomplete plan");
      
      parsed.name = "AI Plan";
      setPlan(parsed);
      setActiveDay(todayIdx);
    } catch (err) {
      setGenError("Couldn't generate a plan: " + err.message);
      if (err.message.includes("Missing Anthropic API key")) {
        openSettings();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const day = plan.days[activeDay] || plan.days[0];
  const pdfCount = pdfs.length;
  const generateLabel = isGenerating 
    ? "Generating…" 
    : (pdfCount ? `✦ Generate from ${pdfCount} PDF${pdfCount > 1 ? "s" : ""}` : "✦ Generate AI plan");

  return (
    <article className="card span-all" id="workoutCard">
      <div className="workout-head">
        <div className="icon-box bolt">⚡</div>
        <div className="workout-title">
          <h2 id="workoutHeading">{activeDay === todayIdx ? "Today's Workout" : `${day.day}'s Workout`}</h2>
          <div className="muted small" id="planSource">{plan.source || ""}</div>
        </div>
        <button 
          className="pill solid" 
          id="generateBtn" 
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {generateLabel}
        </button>
      </div>
      
      {genError && <p id="genError" className="error small">{genError}</p>}
      
      <div className="day-tabs plan-tabs" id="planTabs">
        {PLANS.map((p, i) => (
          <button 
            key={p.name}
            className={`pill ${p.name === plan.name ? "active" : ""}`}
            onClick={() => {
              setPlan(p);
              setActiveDay(todayIdx);
            }}
          >
            {p.name}
          </button>
        ))}
        {plan.name === "AI Plan" && (
          <button className="pill active" disabled>AI Plan</button>
        )}
      </div>
      
      <div className="day-tabs" id="dayTabs">
        {plan.days.map((d, i) => (
          <button 
            key={i}
            className={`pill ${i === activeDay ? "active" : ""}`}
            onClick={() => setActiveDay(i)}
          >
            {i === todayIdx ? "● " : ""}{d.day.slice(0, 3)}
          </button>
        ))}
      </div>
      
      <div className="workout-meta">
        <span className="w-title" id="dayTitle">{day.title}</span>
        <span className="muted" id="dayFocus">{day.focus}</span>
        <span className="muted" id="dayDuration">{day.duration ? `⏱ ${day.duration}` : ""}</span>
      </div>
      
      <div className="exercise-grid" id="exerciseGrid">
        {(day.exercises || []).map((ex, i) => (
          <div className="exercise" key={i}>
            <div className="nm">{ex.name}</div>
            <div className="sr">{ex.sets} × {ex.reps}</div>
            {ex.notes && <div className="nt">{ex.notes}</div>}
          </div>
        ))}
      </div>
    </article>
  );
}
