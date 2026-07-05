"use client";

function ActivityChart() {
  const rows = [
    { label: "Browsing", bars: [0, 0, 1, 0, 0, 1, 0, 0, 0] },
    { label: "Conversation", bars: [0, 1, 1, 0, 1, 0, 1, 1, 0] },
    { label: "Phone", bars: [1, 1, 0, 1, 1, 0, 1, 0, 1] },
  ];

  return (
    <div id="activityChart">
      {rows.map((r, i) => (
        <div className="act-row" key={r.label}>
          <span className="lbl">{r.label}</span>
          <div className="bars">
            {r.bars.map((b, j) => {
              const h = b ? 16 + ((i * 3 + j * 5) % 10) : 9;
              return (
                <div 
                  key={j} 
                  className={`act-bar ${b ? "on" : ""}`} 
                  style={{ height: `${h}px` }}
                ></div>
              );
            })}
          </div>
        </div>
      ))}
      <div className="act-axis">
        <span>08</span><span>12</span><span>18</span><span>22</span>
      </div>
    </div>
  );
}

function SleepChart() {
  return (
    <div id="sleepChart">
      <svg width="100%" height="86" viewBox="0 0 220 86" preserveAspectRatio="none">
        {[0, 2, 4].map((v, i) => (
          <text key={`text-${i}`} x="4" y={78 - i * 30} fontSize="8" fill="rgba(242,239,233,0.32)">
            {v}
          </text>
        ))}
        {[0, 2, 4].map((v, i) => (
          <line key={`line-${i}`} x1="16" x2="220" y1={75 - i * 30} y2={75 - i * 30} stroke="rgba(255,255,255,0.06)" />
        ))}
        <path d="M18 74 L60 74 Q70 74 72 62 L78 40 Q80 30 92 30 L128 30 Q138 30 140 22 L150 14 L216 12"
          fill="none" stroke="#C6E85B" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M18 78 L70 78 Q80 78 84 66 L92 52 Q95 44 106 44 L140 44 Q150 44 154 36 L164 30 L216 28"
          fill="none" stroke="#FFB27A" strokeWidth="2.4" strokeLinecap="round" />
        {["08", "12", "18", "22"].map((t, i) => (
          <text key={t} x={30 + i * 55} y="85" fontSize="8" fill="rgba(242,239,233,0.32)">{t}</text>
        ))}
      </svg>
    </div>
  );
}

function HeartChart() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const blocks = [
    [1, 0], [1, 1], [0, 1], [1, 0], [1, 0], [0, 0], [0, 0]
  ];

  return (
    <div id="heartChart">
      <div className="hw-cols">
        {blocks.map((col, i) => (
          <div className="hw-col" key={i}>
            {col.map((on, j) => (
              <div 
                key={j} 
                className={`hw-block ${on ? (j === 0 ? "hot" : "warm") : ""}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="hw-days">
        {days.map((d, i) => <span key={i}>{d}</span>)}
      </div>
    </div>
  );
}

export default function StatsSection({ garmin }) {
  const steps = garmin?.steps ?? 19840;
  const hr = garmin?.hr ?? 63;
  const sleep = garmin?.sleep ?? "7h 45m";

  return (
    <section className="grid stats">
      <article className="card">
        <div className="card-head">
          <div className="icon-box run">🏃</div>
          <h2>Activity</h2><span className="muted small">Last 7 days</span>
        </div>
        <ActivityChart />
        <div className="big-stat">
          <span id="stepsVal">{Number(steps).toLocaleString()}</span>
          <div className="muted small">
            👟 Steps <em id="stepsSrc">{garmin?.steps ? "(from Garmin)" : ""}</em>
          </div>
        </div>
      </article>

      <article className="card">
        <div className="card-head">
          <div className="icon-box moon">🌙</div>
          <h2>Sleep</h2><span className="muted small">Last 7 days</span>
        </div>
        <div className="big-stat inline"><span id="sleepVal">{sleep}</span></div>
        <SleepChart />
        <div className="muted small">⏳ +18m from last week</div>
      </article>

      <article className="card">
        <div className="card-head">
          <div className="icon-box heart">♥</div>
          <h2>Heart</h2><span className="muted small">Last 7 days</span>
        </div>
        <HeartChart />
        <div className="big-stat">
          <span id="hrVal">{hr}</span><small> BPM</small>
          <div className="muted small">
            ❤️ Avg resting heart rate <em id="hrSrc">{garmin?.hr ? "(from Garmin)" : ""}</em>
          </div>
        </div>
      </article>
    </section>
  );
}
