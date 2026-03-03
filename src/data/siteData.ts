// ============================================================
// 🎬 SITE DATA — Edit this file to customize the entire portfolio
// ============================================================
// To sell this template: just swap the data below for a new client.
// No need to touch any component files.
// ============================================================

// ─── PERSONAL INFO ──────────────────────────────────────────
export const personalInfo = {
  name: "Avinash",
  role: "Video Editor & Motion Designer",
  tagline: ["A Video Editor & 3D Artist", "turning ideas into visuals."],
  email: "avinash@example.com",
  phone: "+91 9876543210",
};

// ─── HERO SECTION ───────────────────────────────────────────
export const heroData = {
  videoUrl:
    "https://framerusercontent.com/assets/vByUTRpjIKiQC9dZga6fw6PQLM.mp4",
  scrollGifUrl:
    "https://framerusercontent.com/images/ooyYK8koXxi95QXafRKMXtdbVSA.gif",
  headingLine1: "Let me take you",
  headingLine2: "through a journey of",
};

// ─── PARALLAX SECTION ───────────────────────────────────────
export const parallaxData = {
  // Text parts — rendered with line breaks and inline images between them
  textParts: [
    { text: "Simplifying the", br: true },
    { text: "experience", br: false },
  ],
  // Inline gif stickers shown between text
  stickers: [
    {
      src: "https://framerusercontent.com/images/Omh6oj53opUFAsz5PdJ0h2mJB54.gif",
      rotate: "-rotate-10",
    },
    {
      src: "https://framerusercontent.com/images/Vi2Rc9XzMiijQWFO6ASg06AHKxc.gif",
      rotate: "rotate-10",
    },
    {
      src: "https://framerusercontent.com/images/Omh6oj53opUFAsz5PdJ0h2mJB54.gif",
      rotate: "-rotate-10",
    },
  ],
  // Text after stickers
  afterStickersText: "of",
  // Last line with circular gif overlay
  lastLineText: "living one",
  circleGif:
    "https://framerusercontent.com/images/hy8qneqqsYDtd9iAa3CPOuIS7I.gif?width=640&height=360",
  circleOverlayText: "Screen",
  endText: "at a time",
  // Parallax mountain/sky images
  skyImage:
    "https://framerusercontent.com/images/9SnlRERg9iwp8HZyYEp7VtlP8P0.png?width=1920&height=1296",
  bgMountainImage:
    "https://framerusercontent.com/images/snR7rLEQS23Ks0LjGdsp4ciM48.png?width=1920&height=1080",
  fgMountainImage:
    "https://framerusercontent.com/images/J1zm8vrw81ZeeRi4U0x0CQtcpgU.png?width=1920&height=1230",
};

// ─── EXPERIENCE SECTION ─────────────────────────────────────
export const experienceData = {
  heading: "Skills",
  subheading:
    "A showcase of tools, techniques, and creative skills that define my craft.",
  slides: [
    {
      title: "Video Editing",
      text: "Every frame tells a story. I craft compelling narratives through precise cuts, seamless transitions, and emotional pacing that captivates audiences and brings your vision to life.",
      num: "(01)",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      bgColor: "bg-[#F1F1F1]",
      textColor: "text-[#121212]",
    },
    {
      title: "Motion Graphics",
      text: "From kinetic typography to animated explainers, I design motion graphics that grab attention and communicate your message with style, energy, and impact.",
      num: "(02)",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
      bgColor: "bg-[#C4EF7A]",
      textColor: "text-[#527200]",
    },
    {
      title: "3D Design",
      text: "I bring concepts to life in three dimensions using Blender and Cinema 4D — creating product renders, environments, and abstract visuals that feel tangible and immersive.",
      num: "(03)",
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
      bgColor: "bg-[#FC4C3B]",
      textColor: "text-white",
    },
    {
      title: "Color Grading",
      text: "Color sets the mood. I use DaVinci Resolve and Lumetri to grade footage with cinematic precision — from warm nostalgic tones to cold futuristic sci-fi looks.",
      num: "(04)",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      bgColor: "bg-[#F1F1F1]",
      textColor: "text-[#121212]",
    },
    {
      title: "Visual Design",
      text: "Beyond video, I design thumbnails, social media creatives, and brand assets that maintain visual consistency and drive engagement across every platform.",
      num: "(05)",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      bgColor: "bg-[#C4EF7A]",
      textColor: "text-[#527200]",
    },
  ],
};

// ─── ABOUT SECTION ──────────────────────────────────────────
export const aboutData = {
  heading: "About",
  // Each word swaps on scroll. Use `br: true` to force a line break after the word.
  titleWords: [
    { text: "Crafting", br: false },
    { text: "visuals", br: false },
    { text: "that", br: true },
    { text: "move", br: false },
    { text: "&", br: true },
    { text: "inspire.", br: false },
  ],
  image:
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
};

// ─── SOCIAL LINKS ───────────────────────────────────────────
// Icons are kept as SVG path strings for portability (no JSX dependency in data)
export const socialLinks = [
  {
    label: "YouTube",
    url: "#",
    iconPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Instagram",
    url: "#",
    iconPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "LinkedIn",
    url: "#",
    iconPath:
      "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  },
  {
    label: "Twitter",
    url: "#",
    iconPath:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

// ─── FEATURED PROJECTS (HOME + WORK PAGE) ──────────────────
export const projectsData = [
  {
    slug: "cinematic-reel-2025",
    title: "Cinematic Reel 2025",
    category: "Ads",
    year: "2025",
    thumbnail:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1400&q=80",
    description:
      "A compilation of my best cinematic work from 2025 — featuring brand films, music videos, and documentary pieces.",
    challenge:
      "Condense a year's worth of diverse creative output into a cohesive 3-minute showreel that feels like a single narrative rather than a disjointed montage.",
    approach:
      "Mapped emotional beats like a short film — opening with impact, building through variety, peaking with the strongest piece, and closing with a quiet, memorable end.",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    result:
      "50K+ views on YouTube in the first week. 12 new client inquiries directly attributed to the reel.",
    gallery: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    ],
    videoUrl:
      "https://framerusercontent.com/assets/vByUTRpjIKiQC9dZga6fw6PQLM.mp4",
    featured: true,
    layout: "wide" as const,
  },
  {
    slug: "flavour-co-brand-film",
    title: "Flavour Co. Brand Film",
    category: "Ads",
    year: "2025",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1400&q=80",
    description:
      "A visually rich brand film blending slow-motion food photography with kinetic typography to convey warmth and authenticity.",
    challenge:
      "The client had no existing visual identity. The brief was simply 'make us feel premium' — with only raw product footage and no script.",
    approach:
      "Created a moodboard-first workflow: defined color palette, pacing rhythm, and typography before touching the footage. Built the story around sensory moments.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    result:
      "Awarded 'Best Brand Film' at a regional ad festival. 2.3M impressions across social platforms.",
    gallery: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    ],
    featured: true,
    layout: "tall" as const,
  },
  {
    slug: "neon-nights-music-video",
    title: "Neon Nights — Music Video",
    category: "YouTube",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1400&q=80",
    description:
      "An electrifying music video with neon-drenched visuals, rapid cuts, and custom motion graphics.",
    challenge:
      "The artist wanted a video that matched the intensity of a live concert — but the entire shoot was done in a small studio with green screen.",
    approach:
      "Designed 15 unique 3D environments in Blender, synced every cut to the beat map, and layered custom particle effects over the performance footage.",
    tools: ["Premiere Pro", "After Effects", "Blender"],
    result: "1.2M views on YouTube. Featured on two major music blogs.",
    gallery: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    ],
    featured: true,
    layout: "wide" as const,
  },
  {
    slug: "urban-stories-documentary",
    title: "Urban Stories — Documentary",
    category: "YouTube",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80",
    description:
      "A mini-documentary exploring the creative underground of Mumbai with handheld footage and natural light.",
    challenge:
      "12 hours of raw handheld footage, no script, multiple interview subjects with contradicting narratives.",
    approach:
      "Built a paper edit first — transcribed all interviews, found the emotional throughline, then structured a three-act narrative around the strongest stories.",
    tools: ["DaVinci Resolve", "Premiere Pro"],
    result:
      "Selected for two independent film festivals. Client used it as their primary brand asset for 6 months.",
    gallery: [
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    ],
    featured: true,
    layout: "tall" as const,
  },
  {
    slug: "product-vis-3d",
    title: "Product Visualisation — 3D",
    category: "Reels",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1400&q=80",
    description:
      "Photorealistic 3D product renders and animated turntables for an e-commerce brand.",
    challenge:
      "The client needed 50 product shots but only had 3 physical prototypes — and a 2-week deadline.",
    approach:
      "Built accurate 3D models from reference photos, used HDRI lighting rigs for photorealism, and automated the turntable render pipeline in Blender.",
    tools: ["Blender", "Substance Painter", "After Effects"],
    result:
      "40% increase in product page conversion rate. Client renewed for quarterly content.",
    gallery: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    ],
    featured: false,
    layout: "wide" as const,
  },
  {
    slug: "social-reels-package",
    title: "Social Reels Package",
    category: "Reels",
    year: "2025",
    thumbnail:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1400&q=80",
    description:
      "A series of high-energy social media reels combining trending transitions, bold captions, and punchy sound design.",
    challenge:
      "Create 30 reels per month that feel unique — without them blending into the sea of generic social content.",
    approach:
      "Developed a modular template system with interchangeable intro hooks, transition packs, and CTA endings — keeping consistency while allowing creative variation.",
    tools: ["Premiere Pro", "Photoshop", "CapCut"],
    result:
      "Average 200K views per reel. Brand's Instagram grew from 5K to 45K followers in 4 months.",
    gallery: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    ],
    featured: false,
    layout: "tall" as const,
  },
  {
    slug: "eternal-vows-wedding",
    title: "Eternal Vows — Wedding Film",
    category: "Weddings",
    year: "2025",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80",
    description:
      "A cinematic wedding film that captures the raw emotion and intimate moments of a destination wedding.",
    challenge:
      "8 hours of multi-camera footage across two days, outdoor lighting shifts, and emotional moments that couldn't be re-shot.",
    approach:
      "Synced all cameras in a multi-cam timeline, color-matched across lighting conditions, and built the narrative around the couple's personal vows.",
    tools: ["DaVinci Resolve", "Premiere Pro", "After Effects"],
    result:
      "Couple shared it on social media — 500K organic views. Led to 8 new wedding bookings.",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    ],
    featured: false,
    layout: "tall" as const,
  },
];

// ─── PROCESS STEPS ──────────────────────────────────────────
export const processData = {
  heading: "How I Work",
  subheading: "Every project follows a proven creative process.",
  steps: [
    {
      num: "01",
      title: "Understand the Story",
      description:
        "I start by listening — understanding your brand, audience, and the emotion you want to evoke. No editing happens before the story is clear.",
    },
    {
      num: "02",
      title: "Structure the Narrative",
      description:
        "I map out the pacing, beats, and flow. Whether it's a 15-second reel or a 10-minute film, every second has a purpose.",
    },
    {
      num: "03",
      title: "Craft the Emotion",
      description:
        "This is where the magic happens — precise cuts, sound design, color grading, and motion graphics that make the viewer feel something.",
    },
    {
      num: "04",
      title: "Deliver Impact",
      description:
        "Final delivery optimized for your platform — YouTube, Instagram, cinema, or web. Every format, every aspect ratio, pixel-perfect.",
    },
  ],
};

// ─── STATS ──────────────────────────────────────────────────
export const statsData = [
  { value: "80+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "10M+", label: "Views Generated" },
  { value: "40+", label: "Happy Clients" },
];

// ─── TESTIMONIALS ───────────────────────────────────────────
export const testimonialsData = [
  {
    quote:
      "He didn't just edit our video — he made us feel something we didn't even know was in the footage.",
    name: "Priya Sharma",
    role: "Founder, Flavour Co.",
    result: "2.3M impressions",
  },
  {
    quote:
      "The fastest turnaround I've ever seen without compromising quality. Our YouTube channel grew 300% after working with him.",
    name: "Rahul Mehta",
    role: "YouTuber, 500K subs",
    result: "300% channel growth",
  },
  {
    quote:
      "Our wedding film made everyone cry — even people who weren't at the wedding. That's the level of storytelling here.",
    name: "Ananya & Vikram",
    role: "Wedding Clients",
    result: "500K organic views",
  },
  {
    quote:
      "We gave him raw product photos and got back cinematic 3D renders that outperformed our studio photography.",
    name: "Karan Desai",
    role: "E-Commerce Director",
    result: "40% conversion increase",
  },
];

// ─── SERVICES ───────────────────────────────────────────────
export const servicesData = [
  {
    title: "YouTube Editing",
    forWho: "YouTubers, Creators, Educators",
    description:
      "End-to-end YouTube video editing — from raw footage to upload-ready content. Includes cuts, transitions, sound design, color correction, thumbnails, and SEO-optimized titles.",
    includes: [
      "Jump-cut & narrative editing",
      "Custom transitions & motion graphics",
      "Sound design & music sync",
      "Color correction & grading",
      "Thumbnail design",
      "Subtitle & caption integration",
    ],
    timeline: "3–5 business days per video",
    icon: "play",
  },
  {
    title: "Brand Commercials",
    forWho: "Startups, D2C Brands, Agencies",
    description:
      "Cinematic brand films and product commercials that make your brand unforgettable. From concept to final cut — every frame designed to convert.",
    includes: [
      "Cinematic editing & pacing",
      "Color grading (DaVinci Resolve)",
      "Motion graphics & titles",
      "Sound design & voiceover sync",
      "Multi-format delivery (16:9, 9:16, 1:1)",
    ],
    timeline: "5–10 business days",
    icon: "film",
  },
  {
    title: "Social Media Reels",
    forWho: "Brands, Influencers, Agencies",
    description:
      "Scroll-stopping short-form content for Instagram, TikTok, and YouTube Shorts. Trend-aware, fast-paced, and designed for engagement.",
    includes: [
      "Trending transition styles",
      "Bold text & caption overlays",
      "Sound design & beat sync",
      "Platform-specific optimization",
      "Batch editing (10–30 reels/month)",
    ],
    timeline: "1–2 business days per reel",
    icon: "reels",
  },
  {
    title: "Wedding Films",
    forWho: "Couples, Wedding Planners",
    description:
      "Cinematic wedding films that capture the emotion, beauty, and story of your special day. Multi-camera editing with professional color grading.",
    includes: [
      "Multi-camera sync & editing",
      "Cinematic color grading",
      "Music & sound design",
      "Highlight reel (3–5 min)",
      "Full ceremony edit",
      "Social media teasers",
    ],
    timeline: "10–15 business days",
    icon: "heart",
  },
];

// ─── ABOUT PAGE ─────────────────────────────────────────────
export const aboutPageData = {
  headline: "I turn raw footage into stories worth watching.",
  bio: [
    "I'm a video editor and motion designer based in Mumbai with over 3 years of experience crafting visual narratives for brands, artists, and creators.",
    "My journey started with a fascination for how a single cut can change the entire emotion of a scene. Since then, I've edited everything from brand films and music videos to documentaries and social content.",
    "I believe great editing is invisible — it guides the viewer's emotion without them ever noticing the craft behind it. That's the standard I hold every project to.",
  ],
  philosophy:
    "Editing is not cutting clips. It's shaping emotion. It's rhythm. It's impact.",
  profileImage: "/Layer 0.png",
  tools: [
    { name: "Premiere Pro", level: 95 },
    { name: "After Effects", level: 90 },
    { name: "DaVinci Resolve", level: 85 },
    { name: "Blender", level: 80 },
    { name: "Photoshop", level: 85 },
    { name: "Cinema 4D", level: 70 },
  ],
  vision:
    "I want to build a creative studio where story always comes first — where every brand, creator, and artist gets the kind of editing that makes people stop scrolling and start feeling.",
};

// ─── CONTACT PAGE ───────────────────────────────────────────
export const contactPageData = {
  headline: "Let's create something unforgettable.",
  subtext:
    "Have a project in mind? I'd love to hear about it. Drop me a message and let's bring your vision to life.",
  email: "avinash@example.com",
  phone: "+91 9876543210",
  location: "Mumbai, India",
  availability: "Available for freelance — Q2 2026",
  projectTypes: [
    "YouTube Editing",
    "Brand Commercial",
    "Social Media Reels",
    "Wedding Film",
    "Music Video",
    "Other",
  ],
  budgetRanges: [
    "Under ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000+",
    "Let's discuss",
  ],
};

// ─── ME SECTION (HOME PAGE) ─────────────────────────────────
export const meData = {
  heading: "Its me",
  description:
    "I'm a video editor and motion designer who lives and breathes visual storytelling. With 3+ years behind the timeline, I've crafted brand films, music videos, reels, and 3D visualisations — always obsessing over the perfect cut, the right colour, and the tiniest details that make a project feel alive.",
  image: "/Layer 0.png",
  name: "Nakul",
};

// ─── FOOTER MENUS ───────────────────────────────────────────
export const footerMenus = [
  {
    title: "About me",
    links: [
      { label: "My Story", url: "/about" },
      { label: "Skills", url: "/#skills" },
      { label: "Services", url: "/services" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "All Projects", url: "/work" },
      { label: "Brand Films", url: "/work" },
      { label: "Music Videos", url: "/work" },
      { label: "Reels & Ads", url: "/work" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", url: "/contact" },
      { label: "Instagram", url: "#" },
      { label: "YouTube", url: "#" },
    ],
  },
];

// ─── FOOTER VIDEO ───────────────────────────────────────────
export const footerData = {
  videoUrl:
    "https://res.cloudinary.com/dtomdzrqo/video/upload/v1759931671/Footer_Video_optimized_nkxwyl.mp4",
  copyright: `© ${new Date().getFullYear()} All rights reserved.`,
};
