// ─────────────────────────────────────────────────────────────
//  All portfolio content lives in this one file.
//  Edit text here — no need to touch the components.
//  Photo: add /public/me.jpg and set profile.photo to "/me.jpg".
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Iftekhar Bin Shoib",
  shortName: "Iftekhar",
  nickname: "Ifti",
  designation: "Full-Stack & AI Developer",
  specialty: "specializing in computer vision and NLP",
  /** Shown on the REC line above the name: the most useful fact for a recruiter. */
  availability: "Open to internships & full-time roles",
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka",
  /** Plain-text summary, used for search results and link previews. */
  intro:
    "Full-Stack & AI Developer in Dhaka. I build complete products — the web app, the API and the AI model behind it — including VisionGuard, Bangla Sentiment Pro and StudioSpace.",
  /** Hero paragraph: one line on what I do, then real projects as proof (each links to its page). */
  introLead: "I build complete products: the web app, the API and the AI model behind it. Recent work:",
  highlights: [
    { slug: "visionguard", name: "VisionGuard", text: "AI CCTV security, Grameenphone Future Maker 2026 semi-finalist" },
    { slug: "bangla-sentiment-pro", name: "Bangla Sentiment Pro", text: "Bangla & Banglish NLP on models I fine-tuned" },
    { slug: "studiospace", name: "StudioSpace", text: "a full-stack booking marketplace" },
  ],
  // Put your photo at /public/me.jpg and change this to "/me.jpg"
  photo: "/me-web.jpg" as string | null,
  // Casual photo shown in the About section
  aboutPhoto: "/me-casual.jpg" as string | null,
  // Put your resume at /public/resume.pdf and set resumeReady to true
  resume: "/resume.pdf",
  resumeReady: true,
};

export const contact = {
  email: "iftekharbinshoib@gmail.com",
  phone: "+880 1876-907822",
  whatsapp: "8801876907822",
  whatsappDisplay: "+880 1876-907822",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/IFTI737", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iftekhar-bin-shoib",
    icon: "linkedin",
  },
  { label: "WhatsApp", href: `https://wa.me/${contact.whatsapp}`, icon: "whatsapp" },
  { label: "Email", href: `mailto:${contact.email}`, icon: "mail" },
] as const;

export const about = {
  statement:
    "I like software that fixes a real problem for a real person — someone writing in Bangla that most AI tools ignore, or a family that wants to know their building is safe.",
  journey: [
    "My programming journey started when I joined Computer Science and Engineering at AIUB in 2023. C, C++, Java and C# taught me the fundamentals, and building for the web turned into my main craft.",
    "I went from HTML, CSS and JavaScript to React and Next.js, then to the backend with Node.js, Express and NestJS, backed by MongoDB and PostgreSQL. Along the way I fell into computer vision — collecting my own datasets, training detectors on Kaggle, and running models right in the browser. Now I'm in my final semester with a 3.79 CGPA and Dean's List Honors, with only my internship remaining.",
  ],
  work: "The work I enjoy most sits where a clean interface meets a system doing something clever underneath: authentication and protected routes, APIs with sensible fallbacks, Bengali-first interfaces, and computer vision models that turn camera feeds into useful alerts. I like shipping a working version fast, then making it solid.",
  outside:
    "Away from the keyboard, I cook. It's my main hobby — I've built up a whole collection of dishes I've made myself, and I treat a new recipe the way I treat a new framework: try it, break it, fix it, then make it my own.",
  facts: [
    { k: "Based in", v: "Dhaka, Bangladesh" },
    { k: "Studying", v: "BSc in CSE, AIUB · CGPA 3.79" },
    { k: "Off the clock", v: "Cooking" },
    { k: "Currently", v: "Building VisionGuard" },
  ],
};

export type Skill = { name: string; level: 1 | 2 | 3 | 4 | 5 };
export const skillGroups: { title: string; blurb: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    blurb: "Interfaces people enjoy using",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "HTML & CSS", level: 5 },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs, data and auth",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "NestJS", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "FastAPI", level: 3 },
      { name: "Auth (JWT, OAuth) & REST APIs", level: 4 },
    ],
  },
  {
    title: "Applied ML, Vision & IoT",
    blurb: "Models that see, running on the edge",
    skills: [
      { name: "Python", level: 4 },
      { name: "PyTorch", level: 4 },
      { name: "YOLO / RT-DETR", level: 4 },
      { name: "Hugging Face Transformers", level: 4 },
      { name: "ONNX Runtime (browser)", level: 3 },
      { name: "Model evaluation", level: 4 },
      { name: "Explainable AI (Grad-CAM++)", level: 3 },
      { name: "OpenCV", level: 4 },
      { name: "scikit-learn", level: 3 },
      { name: "Arduino / ESP32", level: 3 },
    ],
  },
  {
    title: "Tools",
    blurb: "How the work gets shipped",
    skills: [
      { name: "Git & GitHub", level: 5 },
      { name: "Vercel / Netlify", level: 5 },
      { name: "VS Code", level: 5 },
      { name: "Kaggle (multi-GPU)", level: 4 },
      { name: "Hugging Face Spaces", level: 4 },
      { name: "Docker", level: 3 },
      { name: "WebRTC", level: 3 },
      { name: "Figma", level: 3 },
    ],
  },
];

export const levelLabel = ["", "Learning", "Familiar", "Comfortable", "Strong", "Daily driver"];

export const education = [
  {
    degree: "BSc in Computer Science and Engineering",
    school: "American International University-Bangladesh (AIUB)",
    period: "2023 – 2027 (expected)",
    detail:
      "CGPA 3.79/4.00 with Dean's List Honors. Coursework completes in 2026; the mandatory internship follows.",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    school: "Uttara High School and College, Dhaka",
    period: "2022",
    detail: "GPA 5.00/5.00.",
  },
  {
    degree: "Secondary School Certificate (Science)",
    school: "Feni Govt. Pilot High School, Feni",
    period: "2020",
    detail: "GPA 4.50/5.00.",
  },
];

export const experience = [
  {
    role: "Creator & team lead — VisionGuard",
    org: "Grameenphone Future Maker 2026 · Semi-finalist",
    period: "2026",
    points: [
      "Designed and built VisionGuard, a real-time AI CCTV security platform that plugs into a building's existing cameras — the project that took our team to the semi-finals of Grameenphone Future Maker 2026.",
      "It weighs context — who, what, where and when — and alerts only on real risk: in-browser YOLOv8n person detection, owner-drawn restricted zones and hours, dynamic risk scoring, Telegram snapshot alerts and live WebRTC streaming.",
    ],
  },
  {
    role: "AI-Driven Full-Stack Web Development",
    org: "Programming Hero · In progress, expected Dec 2026",
    period: "2026",
    points: [
      "Hands-on course covering HTML, CSS, JavaScript, React, Next.js, TypeScript, Express and MongoDB.",
      "Built StudioSpace (client and server) and Dev Stack as course projects.",
    ],
  },
  {
    role: "Team leader — university course projects",
    org: "American International University-Bangladesh (AIUB)",
    period: "2023 – 2026",
    points: [
      "Led the team in every course project at AIUB: split the work, coordinated members, managed deadlines and led the presentations.",
    ],
  },
  {
    role: "Volunteer — Feni flood relief",
    org: "Community work · Feni, Bangladesh",
    period: "2024",
    points: [
      "Delivered food and supplies to remote areas during the 2024 floods, and guided other relief groups to communities they didn't know.",
    ],
  },
  {
    role: "Dean's Award (Dean's List Honors)",
    org: "American International University-Bangladesh (AIUB)",
    period: "2023–24",
    points: ["Awarded for a 3.84/4.00 GPA in the Spring 2023–2024 semester."],
  },
];

export const research = [
  {
    title: "Urban Waste Detection with Explainable AI",
    text: "Curated and annotated a ~12,000-image, 9-class waste dataset in Bangladesh; benchmarked YOLO26, RT-DETR-L and Faster R-CNN (best: RT-DETR-L, ~83.4% mAP@0.50) and explained model errors with Grad-CAM++ and Eigen-CAM.",
  },
  {
    title: "Brinjal Fruit Disease Classification",
    text: "Benchmarked 7 CNN backbones and a custom fusion hybrid on BrinjalFruitX in PyTorch, reaching 91.26% accuracy against an 80.0% baseline.",
  },
  {
    title: "Smart Crop Recommendation (Fall 2025)",
    text: "An ML model that recommends crops for Bangladesh from soil and weather inputs, served through a FastAPI backend designed for ESP32 sensor data.",
  },
];

/** People who agreed to be references. Contact details are shared on request, not published. */
export const references = [
  {
    name: "Md. Alamgir Jalil",
    role: "Lead Specialist – Collection & Credit Management",
    org: "Product, Partnerships & Ops, Business Division · Grameenphone Ltd.",
  },
  {
    name: "Dipta Justin Gomes",
    role: "Assistant Professor, Department of Computer Science",
    org: "Special Assistant, Ranking and Global Engagement Office · AIUB",
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  /** Pixel size of the screenshot, so the page can reserve space (and show a skeleton) before it loads. */
  imageSize: [number, number];
  /** Which part of the screenshot to keep when the card crops it (CSS object-position). */
  imagePosition?: string;
  /** Extra screenshots shown on the details page. */
  gallery?: { src: string; alt: string; caption: string; size: [number, number] }[];
  year: string;
  role: string;
  stack: string[];
  description: string;
  features: string[];
  live: string;
  repo: string | null;
  repoNote?: string;
  /** Extra buttons on the details page, e.g. API docs or the server repo. */
  extraLinks?: { label: string; href: string }[];
  /** What I personally did on the project. */
  myRole?: string[];
  /** Label for the live link button (default "Live project"). */
  liveLabel?: string;
  /** Stages of the project, e.g. a live prototype and the platform in development. */
  versions?: { label: string; status: string; live?: boolean; text: string; points: string[] }[];
  /** A YouTube video shown on the details page. */
  video?: { youtubeId: string; title: string; caption: string };
  /** System architecture, grouped by layer. */
  architecture?: { title: string; layer: string; items: string[] }[];
  challenges: { title: string; text: string }[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "visionguard",
    name: "VisionGuard",
    tagline: "An AI Digital Watcher that turns existing cameras into a 24/7 watcher",
    category: "AI · Computer Vision · Embedded IoT",
    image: "/projects/visionguard.jpg",
    imageSize: [1192, 611],
    imagePosition: "48% 50%",
    gallery: [
      {
        src: "/projects/visionguard-alerts.jpg",
        size: [1272, 544],
        alt: "VisionGuard v1 alerts list with risk scores and reasons",
        caption: "v1 prototype: alerts with a risk score and the reasons behind it. Marking each one real or false alarm is how the system learns.",
      },
      {
        src: "/projects/visionguard-telegram.jpg",
        size: [410, 778],
        alt: "Telegram alert from VisionGuard showing six people in a restricted zone",
        caption: "v1 prototype: a real Telegram alert, six people detected inside a restricted zone during restricted hours.",
      },
    ],
    year: "2026",
    role: "Creator & team lead — product, system design and architecture",
    myRole: [
      "Created VisionGuard and lead the team behind it.",
      "Designed the product and the full system architecture: from camera input to rules, incidents and alerts that escalate until a person responds.",
      "Planned the roadmap and took the project to the Grameenphone Future Maker 2026 semi-finals.",
      "Built the v1 prototype web app with in-browser detection, zones, risk scoring and Telegram alerts.",
    ],
    versions: [
      {
        label: "v1 · Prototype",
        status: "Live",
        live: true,
        text: "A working prototype that runs in the browser — the version in the live demo.",
        points: [
          "Person detection with YOLOv8n running in the browser through ONNX Runtime",
          "Owner-drawn restricted zones with active hours",
          "Dynamic risk score, with Telegram alerts that include a snapshot and the reasons",
          "Live phone or IP camera over WebRTC, with a TURN relay fallback",
        ],
      },
      {
        label: "v2 · Digital Watcher platform",
        status: "In development",
        text: "One platform for any place — homes, farms, shops, women's hostels and construction sites — set up by the owner in minutes.",
        points: [
          "Backend “brain” (rules, incidents, alerts, call chain, team roles, billing, reports): built and tested",
          "Dashboard for owners and guards: being built next",
          "AI models for people, animals and safety gear: training on our own datasets",
          "Voice assistant: planned · Face recognition: later version",
        ],
      },
    ],
    video: {
      youtubeId: "1HWkm70xUuE",
      title: "VisionGuard Digital Watcher — Concept Film",
      caption: "Concept film of the v2 platform. The screens are designed visuals of the planned product, not a recording of the running software — see the live v1 prototype for that.",
    },
    architecture: [
      { title: "Frontend", layer: "Next.js · React", items: ["Customer dashboard", "Admin dashboard", "Camera client"] },
      { title: "Backend", layer: "NestJS", items: ["Modular REST APIs", "WebSocket gateway", "Auth & role-based access", "Rule engine", "Incident & alert services"] },
      { title: "Data & processing", layer: "PostgreSQL · Redis", items: ["PostgreSQL + TypeORM", "Redis + BullMQ queues", "Background & scheduled jobs", "Materialized views for reports"] },
      { title: "AI", layer: "Python · PyTorch", items: ["YOLOv8n detection (people, animals)", "Custom models for safety gear", "Detections sent as structured readings"] },
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Redis + BullMQ", "WebSockets", "YOLOv8n", "ONNX Runtime Web", "WebRTC", "Telegram Bot API"],
    description:
      "Most places already have CCTV, but cameras only record: no one watches every screen day and night, so theft or an intrusion is usually found the next morning. VisionGuard turns those existing cameras into a Digital Watcher. The owner connects their cameras or DVR/NVR, picks the place type, draws zones and chooses ready-made rules. The AI only reports what it sees; VisionGuard decides what it means — a person on the rooftop at night, fewer cows in the shed than expected, a worker without a helmet — and keeps alerting people until someone responds. It was a semi-finalist at Grameenphone Future Maker 2026.",
    features: [
      "Works with existing cameras and recorders — nothing new to buy, no technician needed",
      "Smart rules, not just motion: counts, zones and time rules for people, animals and safety gear",
      "Waits before alarming, and joins repeated events into one incident with a risk score",
      "Escalation: app alert, then Telegram, then phone calls one by one until someone says “I am on it”",
      "Evidence for every incident: snapshots and a video clip shared through expiring links",
    ],
    live: "https://visionguard-ui-three.vercel.app/",
    liveLabel: "Live prototype (v1)",
    repo: "https://github.com/IFTI737/visionguard-ui",
    challenges: [
      {
        title: "Alerts people can trust",
        text: "Motion alarms cry wolf, so owners stop listening. A rule must stay broken for a set time before VisionGuard raises an alarm, and repeated events join one incident instead of flooding the phone.",
      },
      {
        title: "Making sure someone responds",
        text: "A notification is easy to miss at 2 am. The alert chain moves from the app to Telegram to phone calls, one person after another, and stops the moment anyone confirms.",
      },
      {
        title: "Zero-change installation",
        text: "Most AI camera products ask you to buy new cameras. Designing around existing DVR/NVR systems meant planning for many stream formats and keeping the cost low for families and small farms.",
      },
      {
        title: "AI without a server GPU",
        text: "To keep v1 cheap, detection runs in the visitor's browser with YOLOv8n on ONNX Runtime — a small model and careful frame sampling, with heavier models planned for the v2 pipeline.",
      },
    ],
    future: [
      "Finish the v2 dashboard and connect it to the tested backend",
      "Train our own models for people, animals, helmets and safety vests",
      "Voice assistant: ask “is anyone on the rooftop?” and hear spoken alerts",
      "Face recognition for known vs. unknown people",
      "Grow into a subscription service for homes, farms and shops in Bangladesh",
    ],
  },
  {
    slug: "bangla-sentiment-pro",
    name: "Bangla Sentiment Pro",
    tagline: "Sentiment and emotion analysis for Bangla and Banglish, on models I fine-tuned myself",
    category: "AI · Full-stack",
    image: "/projects/bangla-sentiment.jpg",
    imageSize: [1550, 746],
    imagePosition: "18% 50%",
    year: "2026",
    role: "Solo developer — models, API and frontend",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "FastAPI",
      "Hugging Face Transformers",
      "PyTorch",
      "Docker (HF Spaces)",
      "Vercel",
    ],
    description:
      "People in Bangladesh write in Bangla script (আমি খুব খুশি) and in Banglish — Bangla typed with English letters (ami khub khushi). Most sentiment tools are trained on English and miss both. Bangla Sentiment Pro detects the script, sends the text to a model trained for it, and returns the tone, six emotion scores, and the words that carried them. It runs on three transformer models I fine-tuned — BERT for Bangla sentiment (~91% accuracy), BanglaBERT for six-class Bangla emotion (~70%) and XLM-RoBERTa for Banglish emotion (~62%) — with word-level explanations.",
    features: [
      "Analyze one sentence: sentiment, all six emotion scores and word highlighting",
      "Mood journal: write message by message and watch a chart follow the mood",
      "Bulk CSV (e.g. product reviews, customer feedback): up to 2,000 rows with charts, filters and a labelled CSV download",
      "YouTube: paste a video link and analyze its top comments",
      "Voice input, dark/light themes, and a live API playground with cURL, JavaScript and Python",
    ],
    live: "https://bangla-sentiment-pro-psi.vercel.app",
    repo: "https://github.com/IFTI737/bangla-sentiment-pro",
    extraLinks: [{ label: "API docs", href: "https://iftekhar737-bangla-backend.hf.space/docs" }],
    challenges: [
      {
        title: "Two scripts, one input box",
        text: "The same person types Bangla and Banglish. I count Bangla vs Roman letters to route each text to the right model, and reject evenly mixed text with a clear message instead of guessing.",
      },
      {
        title: "A free backend that falls asleep",
        text: "Free Hugging Face Spaces sleep after 48 hours, and waking means reloading three models. I keep it awake with three light pings to /health — GitHub Actions, Vercel Cron and a browser heartbeat — so one can fail safely.",
      },
      {
        title: "Models that miss obvious phrases",
        text: "A keyword rule layer corrects clear misses like \"মন ভালো নেই\", using word boundaries so \"dar\" never fires inside \"darun\", and the API says when a rule changed the result.",
      },
      {
        title: "Showing why the model decided",
        text: "To explain a result, each word is removed in turn and the model runs again; the drop in probability shows how much that word mattered.",
      },
    ],
    future: [
      "A dedicated Banglish sentiment model (today it is derived from emotions)",
      "A Postgres database for shared corrections and public usage stats",
      "Retrain with the corrections users export from the \"Result looks wrong?\" flow",
      "Automatic sync of the backend to the Hugging Face Space on every push",
    ],
  },
  {
    slug: "studiospace",
    name: "StudioSpace",
    tagline: "Book creative studios by the hour — photo, film, podcast and music",
    category: "Full-stack web",
    image: "/projects/studiospace.jpg",
    imageSize: [1550, 648],
    imagePosition: "1% 50%",
    year: "2026",
    role: "Solo developer — client and server",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Better Auth",
      "JWT (jose)",
      "Express 5",
      "MongoDB",
      "Vercel",
    ],
    description:
      "StudioSpace is a peer-to-peer marketplace where photographers, filmmakers, podcasters and musicians discover and book creative studios by the hour, and hosts list and manage their spaces. Visitors explore and filter studios, book from a modal with live price calculation, and hosts confirm, decline or complete each booking.",
    features: [
      "Explore by category, search by name or location, sort by price, rating or newest",
      "Hourly booking with live price calculation and double-booking prevention",
      "Full host CRUD with image upload, gallery and amenity tags",
      "Reviews and ratings, a saved-studios wishlist and PDF invoices for confirmed bookings",
      "Better Auth (email/password + Google) with JWT-protected API routes",
    ],
    live: "https://studiospace-client-nu.vercel.app",
    repo: "https://github.com/IFTI737/studiospace-client",
    extraLinks: [{ label: "Server repo", href: "https://github.com/IFTI737/studiospace-server" }],
    challenges: [
      {
        title: "Stopping double bookings",
        text: "Before saving a booking, the server runs a MongoDB time-overlap query against existing bookings and returns a clear error on a clash, so two people can't book the same studio hour.",
      },
      {
        title: "Auth across two apps",
        text: "Better Auth issues tokens on the Next.js client; the separate Express server verifies them with jose against the client's JWKS and answers 401 when a token is missing or invalid.",
      },
      {
        title: "Private routes that survive a reload",
        text: "Dashboard, listings and bookings pages had to wait for the session before deciding, so a logged-in user isn't kicked to the login page on refresh.",
      },
      {
        title: "Keeping ratings correct",
        text: "Each new review recalculates the studio's average with a MongoDB aggregation pipeline update, so the rating never drifts from the real reviews.",
      },
    ],
    future: [
      "Online payments for confirmed bookings",
      "A calendar view of each studio's availability",
      "Email notifications when a booking is confirmed or declined",
      "Host analytics: earnings and busiest hours",
    ],
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
