"use client";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import WorkoutSection from "@/components/WorkoutSection";
import BottomCards from "@/components/BottomCards";
import SettingsDialog from "@/components/SettingsDialog";
import { DEFAULT_PLAN } from "@/lib/data";

export default function Dashboard() {
  const [apiKey, setApiKey] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [garmin, setGarmin] = useState(null);
  const [pdfs, setPdfs] = useState([]);
  const [plan, setPlan] = useState(DEFAULT_PLAN);
  
  const todayIdx = (new Date().getDay() + 6) % 7; // Monday = 0
  const [activeDay, setActiveDay] = useState(todayIdx);

  // Garmin Import
  const handleGarminImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.name.endsWith(".json")) {
      file.text().then((t) => {
        try {
          const flat = t.toLowerCase();
          const num = (re) => { const m = flat.match(re); return m ? Number(m[1]) : null; };
          const steps = num(/"(?:totalsteps|steps)"\s*:\s*(\d+)/);
          const hr = num(/"(?:restingheartrate|restinghr)"\s*:\s*(\d+)/);
          
          if (steps || hr) {
            setGarmin({ steps, hr });
          } else {
            console.log("No step/HR fields found in JSON.");
          }
        } catch { 
          console.error("Couldn't parse that JSON."); 
        }
      });
    } else {
      Papa.parse(file, {
        header: true, 
        skipEmptyLines: true,
        complete: (res) => {
          const rows = res.data;
          if (!rows.length) return;
          
          const cols = Object.keys(rows[0]);
          const find = (words) => cols.find((c) => words.some((w) => c.toLowerCase().includes(w)));
          const nums = (col) => rows.map((r) => Number(String(r[col]).replace(/[^\d.]/g, ""))).filter((n) => !isNaN(n) && n > 0);
          const avg = (a) => (a.length ? Math.round(a.reduce((s, n) => s + n, 0) / a.length) : null);
          
          const stepCol = find(["step"]);
          const hrCol = find(["resting heart", "resting hr", "avg hr", "average heart"]);
          const sleepCol = find(["sleep"]);
          
          const steps = stepCol ? avg(nums(stepCol)) : null;
          const hr = hrCol ? avg(nums(hrCol)) : null;
          let sleep = null;
          
          if (sleepCol) { 
            const s = avg(nums(sleepCol)); 
            if (s) sleep = s > 20 ? `${Math.floor(s / 60)}h ${s % 60}m` : `${s}h`; 
          }
          
          if (steps || hr || sleep) { 
            setGarmin({ steps, hr, sleep });
          }
        },
        error: () => console.error("Couldn't parse that CSV."),
      });
    }
    
    // Reset input
    e.target.value = "";
  };

  // PDF Upload
  const handlePdfUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    let newPdfs = [...pdfs];
    
    for (const f of files) {
      if (f.type !== "application/pdf" || newPdfs.length >= 4) continue;
      
      const data = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result.split(",")[1]);
        r.onerror = () => rej(new Error("read failed"));
        r.readAsDataURL(f);
      });
      
      newPdfs.push({ name: f.name, data });
    }
    
    setPdfs(newPdfs);
    e.target.value = "";
  };

  const removePdf = (index) => {
    setPdfs(prev => prev.filter((_, i) => i !== index));
  };

  const activeDayPlan = plan.days[activeDay] || plan.days[0];

  return (
    <>
      <div className="frame">
        <Hero 
          garmin={garmin} 
          activeDayPlan={activeDayPlan}
          apiKey={apiKey}
          openSettings={() => setIsSettingsOpen(true)}
          onGarminImport={handleGarminImport}
          onPdfUpload={handlePdfUpload}
          pdfs={pdfs}
          removePdf={removePdf}
        />
        
        <StatsSection garmin={garmin} />
        
        <section className="grid bottom">
          <WorkoutSection 
            plan={plan} 
            setPlan={setPlan} 
            activeDay={activeDay} 
            setActiveDay={setActiveDay} 
            pdfs={pdfs} 
            apiKey={apiKey}
            openSettings={() => setIsSettingsOpen(true)}
          />
          <BottomCards />
        </section>
      </div>

      <SettingsDialog 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        apiKey={apiKey} 
        setApiKey={setApiKey} 
      />
    </>
  );
}
