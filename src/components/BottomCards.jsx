"use client";

function Waves({ colors }) {
  return (
    <svg width="100%" height="70" viewBox="0 0 400 70" preserveAspectRatio="none">
      {colors.map((c, i) => (
        <path 
          key={i}
          d={`M0 ${35 + i * 2} C 50 ${8 + i * 12}, 100 ${60 - i * 10}, 160 ${34 + i * 4} S 260 ${12 + i * 10}, 320 ${38 - i * 5} S 390 ${50 - i * 8}, 400 ${30 + i * 4}`}
          fill="none" 
          stroke={c} 
          strokeWidth="1.6" 
          opacity={0.9 - i * 0.15} 
        />
      ))}
    </svg>
  );
}

function FocusWave() {
  const bars = Array.from({ length: 70 }, (_, i) => {
    const h = 6 + Math.abs(Math.sin(i * 0.55) * 26) + (i % 7 === 0 ? 10 : 0);
    const cls = i === 35 ? "mid" : i % 9 === 0 ? "hi" : "";
    return { h, cls };
  });

  return (
    <div id="focusWave" className="focus-wave">
      {bars.map((b, i) => (
        <div key={i} className={`fw-bar ${b.cls}`} style={{ height: `${b.h}px` }}></div>
      ))}
    </div>
  );
}

function Gauge({ value }) {
  const ticks = 44;
  const active = Math.round((value / 100) * ticks);
  const cx = 105;
  const cy = 118;
  const r1 = 78;
  const r2 = 96;

  const lines = Array.from({ length: ticks }, (_, i) => {
    const a = Math.PI * (1 - i / (ticks - 1));
    return {
      x1: cx + r1 * Math.cos(a),
      y1: cy - r1 * Math.sin(a),
      x2: cx + r2 * Math.cos(a),
      y2: cy - r2 * Math.sin(a),
      stroke: i < active ? "#EDE9E0" : "rgba(255,255,255,0.15)"
    };
  });

  return (
    <div id="gauge">
      <svg width="210" height="130" viewBox="0 0 210 130">
        {lines.map((l, i) => (
          <line 
            key={i} 
            x1={l.x1} 
            y1={l.y1} 
            x2={l.x2} 
            y2={l.y2}
            stroke={l.stroke} 
            strokeWidth="3.4" 
            strokeLinecap="round"
          />
        ))}
      </svg>
      <div className="gauge-label">
        <span className="t">Speed</span><span>▲</span><span className="v">{value}%</span>
      </div>
    </div>
  );
}

export default function BottomCards() {
  return (
    <>
      <article className="card">
        <div className="split-head">
          <h2>Wellness Score</h2>
          <div className="score-block">
            <div className="score">87</div>
            <div>Good Condition</div>
            <div className="muted small">+5 vs weekly average</div>
          </div>
        </div>
        <div id="wellnessWaves">
          <Waves colors={["#FF7A2E", "#C6E85B", "#8AB4F8", "rgba(255,255,255,0.35)"]} />
        </div>
        <div className="foot-stats">
          <div>Sleep Avg<br /><span>7.2h</span></div>
          <div className="right">Recovery<br /><span>82%</span></div>
        </div>
      </article>

      <article className="card">
        <div className="split-head">
          <h2>Focus Activity</h2>
          <div className="score-block">
            <div className="score">73</div>
            <div>Focus Score</div>
            <div className="muted small">Deep Work 14.5h</div>
          </div>
        </div>
        <FocusWave />
        <div className="foot-stats">
          <div>Avg Focus Session<br /><span>42 min</span></div>
          <div className="right">Deep Work<br /><span>14.5h</span></div>
        </div>
      </article>

      <article className="card gauge-card">
        <div className="mini-rail">
          <span>♥</span><span>🌙</span><span>🏃</span><span className="on">⚡</span><span>📊</span>
        </div>
        <Gauge value={50} />
        <div id="gaugeWaves">
          <Waves colors={["#FF7A2E", "rgba(255,255,255,0.3)", "#C6E85B"]} />
        </div>
        <h2>Balanced Energy &amp; Recovery State</h2>
        <div className="muted small">Overall Health Stability Index</div>
      </article>
    </>
  );
}
