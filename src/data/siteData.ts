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

// ─── FOOTER MENUS ───────────────────────────────────────────
export const footerMenus = [
  {
    title: "About me",
    links: [
      { label: "My Story", url: "#" },
      { label: "Skills", url: "#" },
      { label: "Experience", url: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Video Editing", url: "#" },
      { label: "Motion Graphics", url: "#" },
      { label: "3D Design", url: "#" },
      { label: "Color Grading", url: "#" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Short Films", url: "#" },
      { label: "Music Videos", url: "#" },
      { label: "Brand Films", url: "#" },
      { label: "Reels & Ads", url: "#" },
    ],
  },
];

// ─── FOOTER VIDEO ───────────────────────────────────────────
export const footerData = {
  videoUrl:
    "https://res.cloudinary.com/dtomdzrqo/video/upload/v1759931671/Footer_Video_optimized_nkxwyl.mp4",
  copyright: `© ${new Date().getFullYear()} All rights reserved.`,
};
