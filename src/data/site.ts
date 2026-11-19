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
  challenges: { title: string; text: string }[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "visionguard",
    name: "VisionGuard",
    tagline: "An AI digital watcher for the cameras a building already has",
    category: "AI · Computer Vision · Embedded IoT",
    image: "/projects/visionguard.jpg",
    imageSize: [1192, 611],
    imagePosition: "48% 50%",
    gallery: [
      {
        src: "/projects/visionguard-alerts.jpg",
        size: [1272, 544],
        alt: "VisionGuard alerts list with risk scores and reasons",
        caption: "Alerts with a risk score and the reasons behind it. Marking each one real or false alarm is how the system learns.",
      },
      {
        src: "/projects/visionguard-telegram.jpg",
        size: [410, 778],
        alt: "Telegram alert from VisionGuard showing six people in a restricted zone",
        caption: "A real Telegram alert: six people detected inside a restricted zone during restricted hours.",
      },
    ],
    year: "2026",
    role: "Creator & team lead — architecture and frontend",
    stack: ["Next.js", "TypeScript", "YOLOv8n", "ONNX Runtime Web", "WebRTC", "Telegram Bot API", "Vercel"],
    description:
      "VisionGuard is a real-time, proactive CCTV intelligence platform that turns the ordinary cameras of a residential building into intelligent security and safety monitoring. It plugs into the building's existing DVR/NVR, so residents change nothing about their setup — they only connect their system. Instead of plain motion alerts, it warns the owner only when the risk is real, using context: who, what, where and when. It was a semi-finalist at Grameenphone Future Maker 2026.",
    features: [
      "Person detection with YOLOv8n running right in the browser through ONNX Runtime",
      "Owner-drawn polygon zones with restricted hours",
      "A rule-based risk score, with Telegram alerts that include a snapshot and the reasons",
      "Live phone camera over WebRTC, with a TURN relay fallback",
      "Areas, alerts and settings, with setup import/export",
    ],
    live: "https://visionguard-ui-three.vercel.app/",
    repo: "https://github.com/IFTI737/visionguard-ui",
    challenges: [
      {
        title: "Zero-change installation",
        text: "Most AI camera products ask you to buy new cameras. Designing around existing DVR/NVR systems meant planning for many stream formats and keeping the cost low for residents.",
      },
      {
        title: "AI without a server GPU",
        text: "To keep it cheap, detection runs in the visitor's browser with YOLOv8n on ONNX Runtime. That meant a small model, careful frame sampling, and a hybrid plan where an edge gateway does fast checks and sends only key frames to cloud AI.",
      },
      {
        title: "Streaming a phone camera reliably",
        text: "WebRTC works well until a network blocks peer-to-peer traffic, so I added a TURN relay fallback to keep the live feed running.",
      },
    ],
    future: [
      "A gateway with Frigate NVR, go2rtc and MQTT to connect real DVR/NVR cameras",
      "Child-safety zones and face recognition (known vs. unknown)",
      "Weapon detection with a custom YOLO model",
      "Loitering and climbing detection using tracking, plus a multi-signal context engine",
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
