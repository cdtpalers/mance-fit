export const QUOTES = [
  { text: "The last three or four reps is what makes the muscle grow.", who: "Arnold Schwarzenegger", tag: "Fitness" },
  { text: "I can do all things through Christ who strengthens me.", who: "Philippians 4:13", tag: "Verse" },
  { text: "You don't have to be extreme, just consistent.", who: "Unknown", tag: "Fitness" },
  { text: "Discipline is doing what you hate to do, but doing it like you love it.", who: "Mike Tyson", tag: "Fitness" },
  { text: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles.", who: "Isaiah 40:31", tag: "Verse" },
  { text: "Everybody wants to be a bodybuilder, but nobody wants to lift heavy weights.", who: "Ronnie Coleman", tag: "Fitness" },
  { text: "Do you not know that your bodies are temples of the Holy Spirit?", who: "1 Corinthians 6:19", tag: "Verse" },
  { text: "Obsessed is a word the lazy use to describe the dedicated.", who: "David Goggins", tag: "Fitness" },
  { text: "Let us run with perseverance the race marked out for us.", who: "Hebrews 12:1", tag: "Verse" },
  { text: "The pain you feel today will be the strength you feel tomorrow.", who: "Jay Cutler", tag: "Fitness" },
  { text: "Be strong and courageous. Do not be afraid; the Lord your God goes with you.", who: "Deuteronomy 31:6", tag: "Verse" },
  { text: "Strength does not come from the physical capacity. It comes from an indomitable will.", who: "Mahatma Gandhi", tag: "Fitness" },
];

export const PLANS = [
  /* ------------------- PLAN 1: BRO SPLIT ------------------- */
  {
    name: "Bro Split",
    source: "Bro Split Workout Program — ThisIsWhyImFit.com PDF",
    days: [
      { day: "Monday", title: "Leg Day", focus: "Quads • Hamstrings • Glutes", duration: "~75 min", exercises: [
        { name: "Squat Variation or Leg Press", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Barbell, leg press, or hack squat" },
        { name: "Romanian or Sumo Deadlift", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Barbell, hex bar, or Smith" },
        { name: "Leg Extension", sets: "5", reps: "6-8", notes: "Leg extension machine" },
        { name: "Leg Curl", sets: "5", reps: "6-8", notes: "Seated machine preferred" },
        { name: "Glute Drives", sets: "5", reps: "6-8", notes: "Hip thrust or kickback machine" },
      ]},
      { day: "Tuesday", title: "Chest Day", focus: "Chest • Triceps", duration: "~65 min", exercises: [
        { name: "Chest Press", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Smith, machine, barbell, or DBs" },
        { name: "Incline Press", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Smith, machine, barbell, or DBs" },
        { name: "Cable Flyes", sets: "5", reps: "6-8", notes: "Cuffs preferred; DBs work too" },
        { name: "Triceps Pushdowns", sets: "5", reps: "6-8", notes: "Straight, EZ, or V bar" },
      ]},
      { day: "Wednesday", title: "Back Day", focus: "Back • Traps", duration: "~65 min", exercises: [
        { name: "Deadlift or Row", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Barbell, trap bar, or seated row" },
        { name: "Pulldowns", sets: "5", reps: "6-8", notes: "Shoulder width or wider" },
        { name: "Kelso Shrugs", sets: "5", reps: "6-8", notes: "Smith or T-bar row machine" },
        { name: "Upright Row", sets: "5", reps: "6-8", notes: "Cable, barbell, or DBs" },
      ]},
      { day: "Thursday", title: "Rest Day", focus: "Full Recovery", duration: "—", exercises: [
        { name: "Rest", sets: "—", reps: "—", notes: "Hydrate; urine almost clear" },
        { name: "Sleep 8+ hours", sets: "—", reps: "—", notes: "Minimum nightly, per the program" },
      ]},
      { day: "Friday", title: "Shoulder Day", focus: "Delts • Traps", duration: "~70 min", exercises: [
        { name: "High Incline Press", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Smith, machine, or DBs" },
        { name: "Side Lateral Raises", sets: "5", reps: "6-8", notes: "Cable or DBs" },
        { name: "Thumbs-up Front Raise / Neutral OHP", sets: "5", reps: "6-8", notes: "Cable or DBs" },
        { name: "Rear Delt Flyes", sets: "5", reps: "6-8", notes: "Cable, DBs, or machine" },
        { name: "Kelso + Standing Shrugs", sets: "5+5", reps: "6-8", notes: "Smith, barbell, or cable" },
      ]},
      { day: "Saturday", title: "Arm Day", focus: "Triceps • Biceps", duration: "~55 min", exercises: [
        { name: "Triceps Press", sets: "5", reps: "6-8, 6-8, 6-8, 5, 5", notes: "JM press or seated machine" },
        { name: "Close-Grip Bench", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Smith, machine, or barbell" },
        { name: "Hammer Curl", sets: "5", reps: "6-8, 6-8, 6-8, 5, 5", notes: "Rope cable or DBs" },
        { name: "Biceps Curls, Traditional", sets: "5", reps: "6-8", notes: "DBs, cable, or barbell" },
      ]},
      { day: "Sunday", title: "Rest Day", focus: "Full Recovery", duration: "—", exercises: [
        { name: "Rest", sets: "—", reps: "—", notes: "Progressive overload next week" },
        { name: "Light Stretching", sets: "1", reps: "10 min", notes: "Optional" },
      ]},
    ],
  },

  /* ---------------- PLAN 2: NIKE 21K RUNNING ---------------- */
  {
    name: "21K Running",
    source: "Nike+ Run Club 12-Week 21K Training Program PDF",
    days: [
      { day: "Monday", title: "Recovery", focus: "Easy Progression Run or Rest", duration: "30-40 min", exercises: [
        { name: "Recovery Run (optional)", sets: "1", reps: "2-4 mi", notes: "Recovery pace; run 2 of 4 recovery days" },
        { name: "Progression Finish", sets: "1", reps: "last mile", notes: "Start slow, finish faster" },
      ]},
      { day: "Tuesday", title: "Speed — Track", focus: "Intervals at Mile / 5K / 10K pace", duration: "45-60 min", exercises: [
        { name: "Strides Warm-up", sets: "8", reps: "100 m", notes: "Build pace each stride" },
        { name: "Track Intervals", sets: "6-8", reps: "200-1200 m", notes: "Mix Mile, 5K, 10K paces" },
        { name: "Recovery Between Reps", sets: "—", reps: "60-180 s", notes: "Longer rest after longer reps" },
      ]},
      { day: "Wednesday", title: "NTC Strength", focus: "Core • Mobility • Runner Strength", duration: "30-45 min", exercises: [
        { name: "Core Strength Circuit", sets: "3", reps: "10-15", notes: "Plank, leg raise, twists" },
        { name: "Balance & Stability Work", sets: "3", reps: "45 s", notes: "Single-leg focus" },
        { name: "Hip Mobility Flow", sets: "2", reps: "5 min", notes: "" },
      ]},
      { day: "Thursday", title: "Speed — Tempo / Hills / Fartlek", focus: "Comfortable Being Uncomfortable", duration: "40-55 min", exercises: [
        { name: "Tempo Run", sets: "1", reps: "3-5 mi", notes: "Hard but controlled pace" },
        { name: "OR Hill Repeats", sets: "6-9", reps: "2 min up", notes: "20 s over the crest; full recovery" },
        { name: "OR Fartlek", sets: "6", reps: "1-3 min hard", notes: "Equal or half-time easy between" },
      ]},
      { day: "Friday", title: "Endurance — Long Run", focus: "6-10 Miles, Progression Style", duration: "60-100 min", exercises: [
        { name: "Long Run", sets: "1", reps: "6-10 mi", notes: "60-90 s slower than goal race pace" },
        { name: "Post-run Strides", sets: "4", reps: "100 m", notes: "Optional, relaxed and fast" },
      ]},
      { day: "Saturday", title: "Recovery", focus: "Easy Run or Cross-Training", duration: "20-40 min", exercises: [
        { name: "Recovery Run or NTC Session", sets: "1", reps: "2-3 mi", notes: "Catch-your-breath pace" },
        { name: "Stretch & Foam Roll", sets: "1", reps: "10 min", notes: "" },
      ]},
      { day: "Sunday", title: "Rest", focus: "Full Recovery", duration: "—", exercises: [
        { name: "Rest Completely", sets: "—", reps: "—", notes: "Sleep, hydrate, eat right" },
        { name: "Race-week note", sets: "—", reps: "—", notes: "Week 1 of plan = 21K race day" },
      ]},
    ],
  },

  /* -------------------- PLAN 3: HYBRID -------------------- */
  {
    name: "Hybrid",
    source: "Hybrid of your Bro Split + Nike 21K PDFs",
    days: [
      { day: "Monday", title: "Leg Day", focus: "Bro Split Legs", duration: "~75 min", exercises: [
        { name: "Squat or Leg Press", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Heavy sets: 3-5 min rest" },
        { name: "Romanian Deadlift", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "" },
        { name: "Leg Extension + Curl", sets: "4+4", reps: "6-8", notes: "Superset to save time" },
        { name: "Glute Drives", sets: "4", reps: "6-8", notes: "" },
      ]},
      { day: "Tuesday", title: "Speed — Track", focus: "NRC Intervals", duration: "45-60 min", exercises: [
        { name: "Strides Warm-up", sets: "8", reps: "100 m", notes: "" },
        { name: "Track Intervals", sets: "6-8", reps: "200-1200 m", notes: "Mile / 5K / 10K paces" },
        { name: "Cooldown Jog", sets: "1", reps: "10 min", notes: "" },
      ]},
      { day: "Wednesday", title: "Push Day", focus: "Chest • Shoulders • Triceps", duration: "~70 min", exercises: [
        { name: "Chest Press", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "" },
        { name: "High Incline Press", sets: "4", reps: "6-8", notes: "" },
        { name: "Side Lateral Raises", sets: "4", reps: "6-8", notes: "" },
        { name: "Triceps Pushdowns", sets: "4", reps: "6-8", notes: "" },
      ]},
      { day: "Thursday", title: "Tempo or Hills", focus: "NRC Speed Session", duration: "40-55 min", exercises: [
        { name: "Tempo Run", sets: "1", reps: "3-4 mi", notes: "Hard but controlled" },
        { name: "OR Hill Repeats", sets: "6", reps: "2 min", notes: "Full recovery between" },
        { name: "Core Circuit", sets: "3", reps: "10-15", notes: "NTC style" },
      ]},
      { day: "Friday", title: "Pull Day", focus: "Back • Biceps • Traps", duration: "~65 min", exercises: [
        { name: "Deadlift or Row", sets: "5", reps: "6-8, 6-8, 5, 5, 5", notes: "Warm up well" },
        { name: "Pulldowns", sets: "4", reps: "6-8", notes: "" },
        { name: "Kelso Shrugs", sets: "4", reps: "6-8", notes: "" },
        { name: "Hammer + Traditional Curls", sets: "3+3", reps: "6-8", notes: "" },
      ]},
      { day: "Saturday", title: "Endurance — Long Run", focus: "NRC Long Run", duration: "60-100 min", exercises: [
        { name: "Long Run", sets: "1", reps: "6-10 mi", notes: "60-90 s slower than race pace" },
        { name: "Stretch & Foam Roll", sets: "1", reps: "10 min", notes: "" },
      ]},
      { day: "Sunday", title: "Rest & Reflect", focus: "Full Recovery", duration: "—", exercises: [
        { name: "Rest Completely", sets: "—", reps: "—", notes: "8+ hours sleep, per both PDFs" },
        { name: "Light Mobility", sets: "1", reps: "10 min", notes: "Optional" },
      ]},
    ],
  },
];

export const DEFAULT_PLAN = PLANS[2];
