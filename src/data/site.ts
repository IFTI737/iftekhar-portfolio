// ─────────────────────────────────────────────────────────────
//  All portfolio content lives in this one file.
//  Edit text here — no need to touch the components.
//  Photo: add /public/me.jpg and set profile.photo to "/me.jpg".
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Iftekhar Bin Shoib",
  shortName: "Iftekhar",
  nickname: "Ifti",
  designation: "Full-Stack Web Developer",
  secondary: "Applied AI & Computer Vision",
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka",
  status: "Open to internships",
  intro:
    "I build full-stack web apps with Next.js, NestJS and MongoDB/PostgreSQL, and I pair them with applied deep learning. Right now I'm turning ordinary building cameras into an AI security system.",
  // Put your photo at /public/me.jpg and change this to "/me.jpg"
  photo: null as string | null,
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
    href: "https://www.linkedin.com/in/iftekhar-bin-shoib-7570082a6",
    icon: "linkedin",
  },
  { label: "WhatsApp", href: `https://wa.me/${contact.whatsapp}`, icon: "whatsapp" },
  { label: "Email", href: `mailto:${contact.email}`, icon: "mail" },
] as const;

export const about = {
  statement:
    "I like software that fixes a real problem for a real person — a shopper checking the price of rice, or a family that wants to know their building is safe.",
  journey: [
    "My programming journey started when I joined Computer Science and Engineering at AIUB in 2023. C, C++, Java and C# taught me the fundamentals, and building for the web turned into my main craft.",
    "I went from HTML, CSS and JavaScript to React and Next.js, then to the backend with Node.js, Express and NestJS, backed by MongoDB and PostgreSQL. Along the way I fell into computer vision — collecting my own datasets, training detectors on Kaggle, and running models right in the browser. Now I'm in my final semester with a 3.79 CGPA, and only my internship and thesis left.",
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
      { name: "Auth & REST APIs", level: 4 },
    ],
  },
  {
    title: "AI / Computer Vision",
    blurb: "Models that see and explain",
    skills: [
      { name: "Python", level: 4 },
      { name: "PyTorch", level: 4 },
      { name: "YOLO / RT-DETR", level: 4 },
      { name: "ONNX Runtime (browser)", level: 3 },
      { name: "TensorFlow", level: 3 },
      { name: "OpenCV", level: 4 },
      { name: "scikit-learn", level: 3 },
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
      { name: "WebRTC", level: 3 },
      { name: "Docker", level: 2 },
      { name: "Linux", level: 3 },
      { name: "Arduino / ESP32", level: 3 },
    ],
  },
];

export const levelLabel = ["", "Learning", "Familiar", "Comfortable", "Strong", "Daily driver"];

export const education = [
  {
    degree: "BSc in Computer Science and Engineering",
    school: "American International University-Bangladesh (AIUB)",
    period: "2023 – Present",
    detail:
      "CGPA 3.79/4.00 with Dean's List Honors. Final semester — only the internship and thesis remain. Thesis on machine learning for gene-expression analysis in autoimmune disease.",
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
    role: "Team lead & developer — VisionGuard",
    org: "Grameenphone Future Maker 2026 · Semi-finalist",
    period: "2026",
    points: [
      "Pitched VisionGuard, an AI CCTV security platform that plugs into a building's existing cameras.",
      "Built the prototype: in-browser YOLOv8n person detection, owner-drawn zones, a rule-based risk score and Telegram alerts.",
      "Designing the next step — a gateway with Frigate NVR, go2rtc and MQTT to reach real DVR/NVR cameras.",
    ],
  },
  {
    role: "Researcher — Urban Waste Detection with Explainable AI",
    org: "Paper submitted to ICCA 2026",
    period: "2026",
    points: [
      "Collected and labeled a ~12,000-image, 9-class waste dataset in Bangladesh (YOLO and COCO formats).",
      "Trained YOLO26, RT-DETR-L and Faster R-CNN — RT-DETR-L performed best at ~83.4% mAP@0.50.",
      "Used confusion matrices, Grad-CAM++ and Eigen-CAM to find weak classes and false positives.",
    ],
  },
  {
    role: "Researcher — Brinjal Fruit Disease Classification",
    org: "Paper in progress",
    period: "2026",
    points: [
      "Benchmarked 7 CNN backbones and a fusion hybrid on BrinjalFruitX — 91.26% accuracy against an 80.0% baseline.",
    ],
  },
  {
    role: "Dean's Award (Dean's List Honors)",
    org: "AIUB",
    period: "2023–24",
    points: ["Awarded for a 3.84/4.00 GPA in the Spring 2023–2024 semester."],
  },
];

export const research = [
  {
    title: "Bangla Sentiment Pro",
    text: "Fine-tuned BanglaBERT for Bangla sentiment (~91%) and emotion (~70%), plus XLM-RoBERTa for Banglish, served with FastAPI on Hugging Face Spaces.",
  },
  {
    title: "Face Verification Door Lock",
    text: "Real-time YuNet + SFace face verification with blur and landmark checks, sending grant/deny to an Arduino servo lock.",
  },
  {
    title: "Smart Crop Recommendation",
    text: "An ML model that recommends crops from soil and weather readings, served through a FastAPI backend built for ESP32 sensors.",
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  year: string;
  role: string;
  stack: string[];
  description: string;
  features: string[];
  live: string;
  repo: string | null;
  repoNote?: string;
  challenges: { title: string; text: string }[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "visionguard",
    name: "VisionGuard",
    tagline: "An AI digital watcher for the cameras a building already has",
    category: "AI security",
    image: "/projects/visionguard.svg",
    year: "2026",
    role: "Team lead, architecture & frontend",
    stack: ["Next.js", "TypeScript", "YOLOv8n", "ONNX Runtime Web", "WebRTC", "Telegram Bot API", "Vercel"],
    description:
      "VisionGuard turns the ordinary CCTV cameras of a residential building into intelligent security and safety monitoring. It plugs into the building's existing DVR/NVR, so residents change nothing about their setup — they only connect their system. Instead of plain motion alerts, it warns the owner only when the risk is real, using context: who, what, where and when. It was a semi-finalist at Grameenphone Future Maker 2026.",
    features: [
      "Person detection with YOLOv8n running right in the browser through ONNX Runtime",
      "Owner-drawn polygon zones with restricted hours",
      "A rule-based risk score, with Telegram alerts that include a snapshot and the reasons",
      "Live phone camera over WebRTC, with a TURN relay fallback",
      "Areas, alerts and settings, with setup import/export",
    ],
    live: "https://visionguard-ui-three.vercel.app/",
    repo: null,
    repoNote: "The source code is private for now while VisionGuard is in competition.",
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
    slug: "bazardor",
    name: "BazarDor (বাজার দর)",
    tagline: "Daily market prices of everyday essentials, in Bangla",
    category: "Full-stack web",
    image: "/projects/bazardor.svg",
    year: "2026",
    role: "Solo developer",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "daisyUI 5", "Better Auth", "MongoDB", "Vercel"],
    description:
      "BazarDor is a Bengali-first market-price tracker for rice, lentils, oil, vegetables, fish, meat, eggs, dairy and spices. It compares prices across 12 bazars, shows today's biggest risers and fallers, and lets signed-in users open detailed product pages with lowest, highest and average prices against yesterday, last week and last month.",
    features: [
      "Live price ticker under the navbar that pauses on hover",
      "Today's price movers, colour-coded up, down and unchanged",
      "Price comparison across 12 markets with historic changes",
      "Email/password, Google and GitHub sign-in with protected routes",
      "Search by Bangla name, category sorting with Bengali digits, light/dark mode",
    ],
    live: "https://bazar-dor-2-0-ifti.vercel.app/",
    repo: "https://github.com/IFTI737/bazar-dor-2.0-ifti",
    challenges: [
      {
        title: "Sorting Bengali numbers",
        text: "Prices arrive as Bengali digits (৳১২০), which sort as text by default. I converted them to numeric values before sorting so low-to-high actually works.",
      },
      {
        title: "An API that can go down",
        text: "To stop a slow API from breaking the site, requests time out after 8 seconds and fall back to two backup APIs before showing a friendly Bangla message.",
      },
      {
        title: "Auth on the newest Next.js",
        text: "Wiring Better Auth with MongoDB into Next.js 16 with Cache Components meant learning the new proxy and making sure protected pages return users to where they were going.",
      },
    ],
    future: [
      "Price history charts for each product",
      "Price alerts when an item drops below a set amount",
      "Let market volunteers submit verified daily prices",
      "Add more districts beyond Dhaka",
    ],
  },
  {
    slug: "dev-stack",
    name: "Dev Stack",
    tagline: "Explore technologies and build your own tech stack",
    category: "Frontend",
    image: "/projects/devstack.svg",
    year: "2026",
    role: "Solo developer",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "daisyUI", "React Toastify", "Netlify"],
    description:
      "Dev Stack is a React app for exploring development technologies and putting together a personal stack. Each card shows a technology's category, description, difficulty and rating. Add one to your stack, remove it, or clear everything — and the app warns you if you try to add the same thing twice.",
    features: [
      "Technology cards with category, difficulty, rating and badge",
      "Add, remove or clear your stack with a live count",
      "Duplicate detection with toast notifications",
      "Responsive grid: three columns on desktop, two on tablet, one on mobile",
    ],
    live: "https://dev-stack-by-ifti.netlify.app/",
    repo: "https://github.com/IFTI737/Dev-Stack",
    challenges: [
      {
        title: "Loading data without useEffect",
        text: "I loaded the JSON data with fetch, React's use() and Suspense instead of useEffect, which meant rethinking how loading states work.",
      },
      {
        title: "Keeping shared state simple",
        text: "The stack lives in the parent component and flows down through props, so the list and the stack panel always agree without a state library.",
      },
    ],
    future: [
      "Save stacks to an account with a backend",
      "Share a stack with a public link",
      "Filter and search technologies by category and difficulty",
    ],
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
