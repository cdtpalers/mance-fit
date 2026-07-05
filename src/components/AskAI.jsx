"use client";
import { useState } from "react";
import { askClaude } from "@/app/actions";

export default function AskAI({ garmin, activeDayPlan, apiKey, openSettings }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [reply, setReply] = useState("");

  const handleKeyDown = async (e) => {
    if (e.key !== "Enter") return;
    const q = query.trim();
    if (!q) return;

    if (!apiKey && !process.env.NEXT_PUBLIC_HAS_SERVER_KEY) {
      // If we don't have a key (and presumably no server key either), open settings
      // Note: In a real app we might just try the call and catch the error,
      // but matching the original behavior we open settings dialog if needed.
      openSettings();
      return;
    }

    setStatus("loading");
    setReply("");
    
    try {
      const g = garmin || {};
      const day = activeDayPlan || {};
      const content = `You are a concise fitness coach inside a dashboard. User stats: ${g.steps ?? 19840} steps, resting HR ${g.hr ?? 63} bpm, sleep ${g.sleep ?? "7h 45m"}. Today's workout: ${day.title} (${day.focus}). Answer in under 80 words: ${q}`;
      
      const response = await askClaude(content, 300, apiKey);
      setReply(response);
      setStatus("success");
    } catch (err) {
      setReply("Something went wrong: " + err.message);
      setStatus("error");
      if (err.message.includes("Missing Anthropic API key")) {
        openSettings();
      }
    }
  };

  return (
    <div className="hero-center">
      <h1>Hey, need help? 🙋🏻‍♂️</h1>
      <input 
        id="askInput" 
        className="ask" 
        type="text" 
        placeholder="Just ask me anything" 
        autoComplete="off" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      {status === "loading" && <p id="askStatus" className="muted small">Thinking…</p>}
      
      {(status === "success" || status === "error") && (
        <div id="askReply" className="card ask-reply">
          {reply}
        </div>
      )}
    </div>
  );
}
