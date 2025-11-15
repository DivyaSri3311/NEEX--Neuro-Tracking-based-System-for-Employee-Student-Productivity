# NEEX--Neuro-Tracking-based-System-for-Employee-Student-Productivity
An AI which records employees/students facial expression, typing speeds, errors and its cognitive fatigue to predict the productivity of the Employee/Student and also the mental health of the individual.


# **Problem**

## The Hidden Cost of Cognitive Fatigue in the Modern World

In today’s hyperconnected world, people are constantly “on” — working, studying, or multitasking through screens for hours on end.

Students and professionals burn out without realizing their brain fatigue level.

Whether it’s **employees in global organizations**, **students in online classes**, or **remote workers** battling time zones, a silent crisis has emerged:

### **Cognitive Fatigue — the invisible productivity killer.**

---

### The Global Context

- According to the **World Health Organization**, mental fatigue and burnout are among the top causes of reduced workplace performance, absenteeism, and mental health decline.
- A **2024 Microsoft Research study** found that employees who work on screens for more than **6 hours continuously** experience a **43% drop in focus and decision quality**.
- **UNESCO** and **OECD** reports indicate that students engaged in long online learning sessions show a steep decrease in comprehension and retention after **90 minutes** of continuous digital interaction.

Despite this, **most organizations lack tools to measure mental fatigue in real time** — we measure *attendance*, not *attention*.

---

### The Problem in Simpler Terms

> “We know when a computer is overheating — but not when a human brain is.”
> 

Current monitoring systems track **presence**, not **performance quality**.

Employees or students might be logged in, but mentally exhausted, disengaged, or cognitively overloaded.

This leads to:

- **Decreased productivity & creativity**
- **Higher human errors** (especially in operations or coding environments)
- **Reduced learning retention** in academic contexts
- **Chronic burnout** due to unnoticed mental strain

And yet, organizations and institutions have *no objective, privacy-respecting way* to detect these early signals.

---

### Why Traditional Solutions Fail

| Current Method | Limitation |
| --- | --- |
| **Surveys / Self-reports** | Infrequent and subjective — fatigue changes minute to minute. |
| **Attendance & Activity Logs** | Don’t indicate focus or engagement quality. |
| **Productivity Trackers** | Intrusive or punitive; focus on “quantity” not “mental state.” |
| **Wearable Sensors (EEG, smart bands)** | Expensive, invasive, and impractical in corporate or classroom settings. |

---

### The Gap

We need a **non-invasive, ethical, AI-powered system** that can *understand human fatigue* using the tools already available —

**webcams, typing patterns, and behavioral data** —

without violating privacy or requiring special hardware.

---

## Problem Scope Across Domains

### **Corporate & Remote Work**

- Detect early signs of mental fatigue in knowledge workers.
- Enable companies to design smarter break schedules and reduce burnout.
- Encourage balanced productivity — *“work smarter, not longer.”*

### **Education & E-Learning**

- Real-time feedback for students losing focus during online classes.
- Helps teachers understand engagement levels without constant supervision.
- Supports adaptive learning platforms that suggest breaks or interactive moments.

### **Healthcare & Research**

- Non-invasive mental workload tracking for cognitive or neurological studies.
- Can help in rehabilitation or therapy progress monitoring.

### **Transportation & Safety**

- Detect drowsiness in vehicle operators or pilots through facial fatigue signals.
- Integrate with safety alert systems in logistics or public transport.

---

# ** Our Solution**

**NeuroTrack** is an **AI-powered fatigue detection system** that monitors **your alertness in real time** — using only your webcam and typing patterns.

It’s like a “Fitbit for your focus” — except it runs locally on your device and respects your privacy.

---

### **How It Works**

| Input | What We Measure | What AI Learns |
| --- | --- | --- |
| **Webcam Feed** | Blink rate, eye closure, yawning frequency | Visual fatigue cues |
| **Typing Data** | Speed, errors, pauses | Cognitive slowdown |
| **Time & Context** | Time of day, session duration | Circadian fatigue |

Our **AI Fatigue Engine** combines these signals into a **real-time “Fatigue Score”** (0–100).

The model was trained using real labeled data — moments where users reported feeling tired or alert.

Fatigue causes:

-  40% drop in productivity
- Increased mistakes and burnout
- Long-term cognitive decline from overwork.
- 

---

### **What the User Sees**

We built a **lightweight dashboard** using **Streamlit** that runs locally:

- **Fatigue Gauge** — Live color-coded indicator (Green = Focused, Yellow = Low Focus, Red = Fatigued)
- **Fatigue Trend Graph** — Tracks alertness through the day
- **Smart Alerts** — Gently remind users to take breaks or breathe when fatigue crosses critical levels

Everything works **offline first** — your video or audio **never leaves your device**.

---

### **Azure Integration (Future Phase)**

Once validated, the system connects to **Azure Cognitive Services & Azure ML** for:

-  Improved model accuracy via cloud training
-  Anonymous, aggregated fatigue trends for research
-  Cross-device personalization

Azure provides the **scalability and data security** backbone for enterprise or academic use.

---

### **What Makes It Unique**

- Combines **behavioral + physiological** fatigue cues
- **Privacy-first** — only lightweight features are processed, no video/audio stored
- Works in **real time**, no heavy setup or wearables
- Can integrate **gamified focus boosts** or **ambient recovery sessions** (planned)

---

### **Current Prototype (MVP Achievements)**

Local feature extraction via **OpenCV** (Eye & Mouth Aspect Ratios)

Typing speed tracker using **Python keyboard hooks**

Real-time fatigue score using **RandomForest model**

Streamlit dashboard with live updates & alerts

Manual fatigue labeling system for dataset creation

---

### **Impact**

NeuroTrack helps:

- Remote workers maintain healthier work habits
- Students avoid burnout during study marathons
- Companies monitor workforce wellness ethically

> “We’re redefining productivity — from how long you work, to how well your brain works.”
> 

# **Technical Architecture Diagram (Conceptual Flow)**

```
      ┌──────────────────────────────────────────┐
      │              User Environment             │
      │──────────────────────────────────────────│
      │ Webcam     →  Facial Cues (Blink, Yawn) │
      │ Microphone  →  Voice Tone, Energy        │
      │ Keyboard   →  Typing Speed, Error Rate  │
      └──────────────────────────────────────────┘
                            │
                            ▼
   ┌──────────────────────────────────────────┐
   │      Local Feature Extraction Layer       │
   │──────────────────────────────────────────│
   │ OpenCV  → Facial landmarks, blink ratio   │
   │ PyAudio → Pitch, amplitude variation      │
   │ Python Keyhooks → Keystroke latency stats │
   │ Task Context → App in use, typing pattern │
   └──────────────────────────────────────────┘
                            │
                            ▼
   ┌──────────────────────────────────────────┐
   │      Feature Vector (Anonymized Data)     │
   │  { blink_rate, typing_delay, speech_tone }│
   └──────────────────────────────────────────┘
                            │
                            ▼
 ┌───────────────────────────────────────────────┐
 │             AI Fatigue Prediction Engine       │
 │───────────────────────────────────────────────│
 │ Azure ML Model                                │
 │ Algorithms: Random Forest / XGBoost            │
 │ Personalized fine-tuning with self-reported data│
 │ Predicts Fatigue_Score ∈ [0, 100]              │
 └───────────────────────────────────────────────┘
                            │
                            ▼
    ┌────────────────────────────────────────┐
    │       Data Storage & Security Layer     │
    │────────────────────────────────────────│
    │ Local SQLite / Azure Cosmos DB          │
    │ No raw video/audio saved (features only)│
    │ Encrypted fatigue history & metadata    │
    └────────────────────────────────────────┘
                            │
                            ▼
    ┌────────────────────────────────────────┐
    │      Visualization & Feedback Layer     │
    │────────────────────────────────────────│
    │ Streamlit / Dash Web Dashboard          │
    │ Real-time fatigue graph & recommendations│
    │ Break alerts, music suggestions, gamified│
    │ “focus score” tracking                  │
    └────────────────────────────────────────┘
                            │
                            ▼
    ┌────────────────────────────────────────┐
    │     User Interaction & Adaptive Loop   │
    │────────────────────────────────────────│
    │ User gives fatigue feedback (“I’m tired”)│
    │ System retrains personalized model     │
    │ Improved accuracy over time            │
    └────────────────────────────────────────┘

```

# **PRODUCTION PHASES.**

## Phase 1 — Define Scope & MVP

We don’t need everything at once.

We'll start with the **core measurable signals** that can be built without special hardware.

### MVP Target:

> “Detect early signs of fatigue from webcam (blink rate + yawning) and typing speed.”
> 

### What’s IN:

- Webcam fatigue detection (OpenCV + Azure Cognitive Services)
- Typing activity tracking (Python keylogger or browser JS tracker)
- Simple dashboard for fatigue score
- Optional manual “I feel tired” feedback button for model tuning

### What’s OUT (for now):

- Voice analysis (can be added later)
- Deep personalization or cloud retraining
- Gamification or productivity integrations

## Phase 2 — Data Collection Layer

### Webcam Stream

- Capture video frames locally.
- Use **OpenCV** or **Azure Face API** to extract:
    - Blink rate (eye aspect ratio)
    - Yawn/mouth openness
    - Head tilt
- Convert to time-series features every few seconds.

### Typing Stream

- Capture typing metrics:
    - Keystrokes per minute
    - Typing errors / backspaces
    - Idle gaps between keystrokes

### Labeling (optional)

- User manually presses a small “Tired / Not tired” button occasionally.
- This becomes *training data* for fine-tuning the fatigue model.

##  Phase 3 — AI Fatigue Engine

### Step 1: Feature Aggregation

- Combine signals:
    
    ```
    {
      blink_rate: 18/min,
      typing_speed: 35 wpm,
      yawn_detected: true,
      time_of_day: 11:30 PM
    }
    
    ```
    
- Normalize & batch in pandas.

### Step 2: Model Selection

- Start simple: RandomForestClassifier or Gradient Boost.
- Output fatigue score 0–100.
- Later, upgrade to:
    - Personalized model retraining on local data.
    - Azure ML model deployment (optional cloud integration).

## Phase 4 — Dashboard & Alerts

### Visual Layer (Frontend)

- Use **Streamlit** or **Plotly Dash**:
    - Live fatigue gauge (0–100)
    - Line graph of fatigue over time
    - Alert pop-up: “Take a break?”
    - Settings for camera/mic permissions

### Feedback

- After each session → store fatigue logs.
- Optional reward system for taking breaks on time.

## Phase 5 — Azure Integration (optional upgrade)

Once the local MVP works:

| Component | Azure Service |
| --- | --- |
| Face detection / emotion | Azure Cognitive Services (Face API) |
| Model training & deployment | Azure Machine Learning |
| Backend automation | Azure Functions |
| User logs storage | Azure Cosmos DB |
| Dashboard hosting | Azure Web App / Static Web App |

## Phase 6 — Privacy & Ethics

- **Local-first**: Video/audio processed only on-device.
- **No raw data storage** — only numerical features.
- **User control**: explicit permission for webcam use.
- Optional “offline mode” for full privacy.

---

## Development Timeline (Estimated)

| Week | Goal |
| --- | --- |
| 1 | Set up webcam + typing capture modules |
| 2 | Extract fatigue features (blink/yawn/typing) |
| 3 | Build fatigue scoring model (basic ML) |
| 4 | Integrate Streamlit dashboard |
| 5 | User feedback + personalized training |
| 6 | (Optional) Deploy model to Azure ML |

#  Execution Roadmap (Action Overview)

### **Week 1 → System Setup & Skeleton**

*Goal:* Build the scaffolding before the intelligence.

1. **Create project repo** (`neurotrack/`):
    - `/capture/` → webcam & typing modules
    - `/data/` → CSV or SQLite storage
    - `/model/` → ML scripts
    - `/ui/` → Streamlit dashboard
2. **Install & test core libraries:**
    
    ```
    pip install opencv-python dlib pandas numpy scikit-learn streamlit pynput
    
    ```
    
3. **Basic webcam & keyboard input tests** — confirm that:
    - You can read frames and detect a face.
    - Typing speed & idle time metrics log correctly.

---

### **Week 2 → Data Capture Pipeline**

*Goal:* Start logging meaningful fatigue signals.

- Implement EAR (blink) & MAR (yawn) calculations with OpenCV.
- Record 1-minute rolling averages → CSV.
- Start typing metrics collection → integrate with same time window.
- Add manual “I’m tired” labeling button (simple Tkinter or Streamlit input).

 *By end of week 2:* you’ll have raw CSVs of `[blink_rate, yawn_count, wpm, idle_gap, tired_label]`.

---

### **Week 3 → AI Engine Prototype**

*Goal:* Train and test fatigue score prediction.

- Load labeled CSV data with pandas.
- Train a **RandomForestRegressor** (start simple).
- Visualize feature importances → confirm which cues matter.
- Wrap the model into a small function:
    
    ```python
    def predict_fatigue(blink, wpm, yawns, idle):
        return model.predict([[blink, wpm, yawns, idle]])[0]
    
    ```
    

*By end of week 3:* You’ll have a real, working local fatigue prediction engine.

---

### **Week 4 → Dashboard Integration**

 *Goal:* Make NeuroTrack interactive & demo-ready.

- Build Streamlit dashboard:
    - Live fatigue gauge (updates every few seconds).
    - Fatigue trend graph.
    - Alert popup for high scores.
- Add toggle for camera & typing logging.
- Store fatigue scores in SQLite for history tracking.

*End of week 4:* MVP complete, usable, and visually impressive for Imagine Cup demo.

---

### **Week 5 → Testing & Fine-tuning**

 *Goal:* Improve accuracy & user trust.

- Collect multiple user datasets.
- Fine-tune thresholds and alert logic.
- Add transparency messages (“camera active”, “no raw data saved”).
- Optional: Add Azure Face API for comparison & benchmark.

 *End of week 5:* Stable, privacy-safe MVP with demo video capability.

---

### **Week 6 → Azure + Pitch Prep**

 *Goal:* Scale + storytelling for judges.

- Integrate Azure ML endpoint for remote inference (optional).
- Use Azure App Service for hosting dashboard (optional).
- Create short demo:
    
    “Here’s NeuroTrack detecting fatigue in real time — local-only, ethical AI, improving focus.”
    
- Prepare **Pitch Deck Storyline:**
    1. Problem — digital fatigue epidemic
    2. Solution — real-time local AI fatigue monitor
    3. Demo — live fatigue detection
    4. Impact — safer, healthier work habits
    5. Tech — Azure ML + OpenCV + Streamlit
    6. Roadmap — personalization, corporate dashboards

---

##  Final Vision

By the end:

> We will have a functional, explainable AI system that detects fatigue in real time, respects privacy, and can easily be scaled or personalize
> 

#  Core Technical & Software Skills.

| Skill | Why It’s Needed | Example Tools |
| --- | --- | --- |
| **Python Programming** | Backbone for model, data pipeline, and desktop app | Python, Jupyter, VS Code |
| **Data Handling / Preprocessing** | Cleaning webcam + keyboard input data | Pandas, NumPy |
| **Computer Vision Basics** | Extract facial landmarks, blink rate, gaze direction | OpenCV, Mediapipe, Azure Face API |
| **Frontend for Dashboard** | Visualizing fatigue levels, alerts, logs | Streamlit / Flask + HTML/CSS |
| **System Integration / API Calls** | Linking camera, keyboard logger, and ML model | Python APIs, REST |
| **Cloud Basics** | For deploying model & dashboard | Azure ML, Azure Functions, Azure Web Apps |

---

##  AI / Machine Learning Skill Set

| Skill | Role in Project | Tools & Frameworks |
| --- | --- | --- |
| **Feature Engineering** | Extract patterns like blink frequency, typing intervals, mouse speed, etc. | NumPy, Pandas |
| **Model Training** | Train fatigue detection models using labeled data | scikit-learn, TensorFlow, PyTorch |
| **Model Evaluation** | Tune accuracy, reduce false alerts | confusion matrix, ROC, F1 score |
| **Data Labeling & Annotation** | Build dataset of “tired vs. alert” states | Custom GUI, manual tagging |
| **Edge ML (optional)** | Run lightweight models locally for privacy | ONNX Runtime, TensorFlow Lite |

---

##  Product & Ethical Design Skills

| Skill | Role | Tools / Notes |
| --- | --- | --- |
| **UX/UI Design** | Simple, calm interface that encourages user trust | Figma, Canva, Adobe XD |
| **Human–Computer Interaction (HCI)** | Understanding fatigue cues and behavior | Research reading / pilot testing |
| **Data Privacy & Ethics** | Handling biometric data responsibly | GDPR basics, anonymization |
| **User Testing** | Collect feedback from real users for tuning alerts | Surveys, A/B testing |
| **Documentation & Presentation** | For Imagine Cup pitch & submissions | PowerPoint, Notion, Word |

---

##  Business / Impact Skills

| Skill | Why It Matters | Examples |
| --- | --- | --- |
| **Problem Validation** | Prove that fatigue detection helps productivity & wellbeing | Research papers, surveys |
| **Cost–Benefit Analysis** | Estimate value for corporate clients or individuals | Excel / Google Sheets |
| **Pitching & Storytelling** | Sell the idea to judges & investors | Presentation practice |
| **Marketing Insight** | Identify target segments — remote workers, developers, etc. | Case study analysis |

---

##  Suggested Team Roles

| Role | Primary Skills Needed |
| --- | --- |
|  **AI/ML Engineer** | Python, ML, OpenCV |
| **Full-Stack Developer** | Backend + Streamlit / Flask dashboard |
|  **UI/UX Designer** | Figma, accessibility, interface flow |
|  **Project Lead / Researcher** | Documentation, presentation, ethical framework |

*(If you’re solo — you can handle AI + dashboard yourself and keep the design minimal for MVP.)*

---

##  Bonus: Learn These Quick

If you’re starting fresh, here’s a good roadmap:

1. **Python + Pandas + NumPy** — 1–2 weeks
2. **OpenCV & Mediapipe (Facial landmarks)** — 1 week
3. **ML basics (scikit-learn models)** — 1–2 weeks
4. **Streamlit dashboard** — 3 days
5. **Azure ML & Face API** — 1 week
