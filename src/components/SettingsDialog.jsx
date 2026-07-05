"use client";
import { useEffect, useRef } from "react";

export default function SettingsDialog({ isOpen, onClose, apiKey, setApiKey }) {
  const dialogRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleSave = () => {
    onClose();
  };

  return (
    <dialog ref={dialogRef} id="settingsDialog" className="settings" onClose={onClose}>
      <h2>AI Settings</h2>
      <p className="muted small">
        The &quot;Ask anything&quot; box and PDF plan generation call the Claude API from your browser.
        Paste your Anthropic API key below — it stays only in this browser session and is
        <strong> never saved to the repository</strong>. Get a key at{" "}
        <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer">console.anthropic.com</a>.
      </p>
      <input 
        type="password" 
        id="apiKeyInput" 
        placeholder="sk-ant-..." 
        autoComplete="off" 
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <div className="settings-actions">
        <button className="pill" onClick={onClose}>Close</button>
        <button className="pill accent" onClick={handleSave}>Save for this session</button>
      </div>
    </dialog>
  );
}
