"use client";
import AskAI from "./AskAI";
import MotivationalQuote from "./MotivationalQuote";

export default function Hero({ garmin, activeDayPlan, apiKey, openSettings, onGarminImport, onPdfUpload, pdfs, removePdf }) {
  const handleGarminClick = () => {
    document.getElementById("garminFile").click();
  };

  const handlePdfClick = () => {
    document.getElementById("pdfFiles").click();
  };

  return (
    <header className="hero">
      <svg className="silhouette" viewBox="0 0 200 140" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <ellipse cx="100" cy="46" rx="17" ry="20" fill="#0c0b09" />
        <path d="M78 140 C74 96 82 70 100 66 C118 70 126 96 122 140 Z" fill="#0d0c0a" />
        <path d="M83 74 C70 84 64 104 62 140 L74 140 C76 110 80 92 88 82 Z" fill="#0b0a08" />
        <path d="M117 74 C130 84 136 104 138 140 L126 140 C124 110 120 92 112 82 Z" fill="#0b0a08" />
        <ellipse cx="100" cy="35" rx="19" ry="10" fill="#0a0908" />
      </svg>

      <div className="topbar">
        <div className="brand">
          <div className="logo">k</div>
          <div><div className="brand-name">Fitness</div><div className="muted small">Dashboard</div></div>
        </div>
        <div className="user">
          <button className="round-btn" id="settingsBtn" title="Settings / API key" aria-label="Settings" onClick={openSettings}>⚙</button>
          <div className="avatar">PJ</div>
          <div><div className="user-name">Patrick John</div><div className="muted small">Athlete</div></div>
        </div>
      </div>

      <nav className="rail" aria-label="Sections">
        <button className="rail-btn active" title="Home">⌂</button>
        <button className="rail-btn" title="Activity">🏃</button>
        <button className="rail-btn" title="Stats">📊</button>
        <button className="rail-btn" title="Plans">📄</button>
        <button className="rail-btn" title="Heart">♥</button>
      </nav>

      <AskAI 
        garmin={garmin} 
        activeDayPlan={activeDayPlan} 
        apiKey={apiKey} 
        openSettings={openSettings} 
      />

      <MotivationalQuote />

      {/* Toolbar */}
      <div className="toolbar">
        <span className="pill static" id="todayPill">
          📅 {new Date().toLocaleDateString("en-PH", { day: "numeric", month: "long", year: "numeric" })}
        </span>
        <button className="pill" id="garminBtn" onClick={handleGarminClick}>⌚ Import Garmin data</button>
        <button className="pill accent" id="pdfBtn" onClick={handlePdfClick}>⬆ Upload workout PDFs</button>
        
        <input type="file" id="garminFile" accept=".csv,.json" hidden onChange={onGarminImport} />
        <input type="file" id="pdfFiles" accept="application/pdf" multiple hidden onChange={onPdfUpload} />
      </div>
      
      <div className="toolbar files-row" id="filesRow">
        {pdfs.map((p, i) => (
          <span key={i} className="pill static">
            📄 {p.name}
            <span className="x" role="button" aria-label="Remove" onClick={() => removePdf(i)}>✕</span>
          </span>
        ))}
      </div>
    </header>
  );
}
