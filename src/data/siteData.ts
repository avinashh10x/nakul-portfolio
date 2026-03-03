// ============================================================
//  PORTFOLIO SITE DATA
//  -----------------------------------------------------------
//  This is the only file you need to edit to personalise
//  the entire portfolio. Change nothing outside this file.
//
//  MEDIA HOSTING
//  Upload all videos and images to Cloudinary and paste
//  the URLs below. Format:
//    Image -> https://res.cloudinary.com/<cloud>/image/upload/<id>.jpg
//    Video -> https://res.cloudinary.com/<cloud>/video/upload/<id>.mp4
// ============================================================

// --- 01. IDENTITY --------------------------------------------
// Your name, role, and contact details.


export const personalInfo = {
  name: "avinash",
  role: "Video Editor & Motion Designer",
  email: "avinash@example.com",
  phone: "+91 9876543210",
  location: "Punjab, India",
  availability: "Available for freelance - Q2 2026",
  // Tagline lines shown in the footer (each entry is a separate line)
  tagline: ["Crafting visuals", "that move & inspire."],
};

// --- 02. SOCIAL LINKS ----------------------------------------
// Update the `url` field for each platform.

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

// --- 03. HERO ------------------------------------------------
// The full-screen background video on the homepage.
// Upload your showreel to Cloudinary and paste the URL here.

export const heroData = {
  videoUrl: "/hero.mp4",
  scrollGifUrl:
    "https://framerusercontent.com/images/ooyYK8koXxi95QXafRKMXtdbVSA.gif",
  headingLine1: "Let me take you",
  headingLine2: "through a journey of",
};

export const aboutPageData = {
  headline: "I turn raw footage into stories worth watching.",
  // Your profile photo for the About page
  profileImage: "/Layer 0.png",
  bio: [
    "I'm a video editor and motion designer based in Mumbai with over 3 years of experience crafting visual narratives for brands, artists, and creators.",
    "My journey started with a fascination for how a single cut can change the entire emotion of a scene. Since then, I've edited everything from brand films and music videos to documentaries and social content.",
    "I believe great editing is invisible - it guides the viewer's emotion without them ever noticing the craft behind it. That's the standard I hold every project to.",
  ],
  philosophy:
    "Editing is not cutting clips. It's shaping emotion. It's rhythm. It's impact.",
  vision:
    "I want to build a creative studio where story always comes first - where every brand, creator, and artist gets the kind of editing that makes people stop scrolling and start feeling.",
  // Your tools and proficiency levels (0-100)
  tools: [
    { name: "Premiere Pro", level: 95 },
    { name: "After Effects", level: 90 },
    { name: "DaVinci Resolve", level: 85 },
    { name: "Blender", level: 80 },
    { name: "Photoshop", level: 85 },
    { name: "Cinema 4D", level: 70 },
  ],
};

// --- 05. SKILLS ----------------------------------------------
// Each entry becomes a stacked card in the Skills section.
// Keep 4-6 entries. For `image`: use a Cloudinary image URL.

export const experienceData = {
  heading: "The Craft.",
  subheading:
    "Every frame I touch is driven by a deep command of these tools and disciplines.",
  slides: [
    {
      title: "Video Editing",
      text: "Every frame tells a story. I craft compelling narratives through precise cuts, seamless transitions, and emotional pacing that captivates audiences.",
      num: "(01)",
      image:
        "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
      bgColor: "bg-[#F1F1F1]",
      textColor: "text-[#121212]",
    },
    {
      title: "Motion Graphics",
      text: "From kinetic typography to animated explainers, I design motion graphics that grab attention and communicate your message with style and impact.",
      num: "(02)",
      image:
        "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
      bgColor: "bg-[#C4EF7A]",
      textColor: "text-[#527200]",
    },
    {
      title: "3D Design",
      text: "I bring concepts to life in three dimensions using Blender and Cinema 4D - product renders, environments, and abstract visuals that feel tangible.",
      num: "(03)",
      image:
        "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
      bgColor: "bg-[#FC4C3B]",
      textColor: "text-white",
    },
    {
      title: "Color Grading",
      text: "Color sets the mood. I use DaVinci Resolve and Lumetri to grade footage with cinematic precision - from warm nostalgic tones to cold futuristic looks.",
      num: "(04)",
      image:
        "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
      bgColor: "bg-[#F1F1F1]",
      textColor: "text-[#121212]",
    },
    {
      title: "Visual Design",
      text: "Beyond video, I design thumbnails, social creatives, and brand assets that maintain visual consistency and drive engagement across every platform.",
      num: "(05)",
      image:
        "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
      bgColor: "bg-[#C4EF7A]",
      textColor: "text-[#527200]",
    },
  ],
};

// --- 06. STATS -----------------------------------------------
// Your key numbers shown in the stats bar.

export const statsData = [
  { value: "80+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "10M+", label: "Views Generated" },
  { value: "40+", label: "Happy Clients" },
];

// --- 07. TESTIMONIALS ----------------------------------------
// Client reviews. Keep 4 for the best grid layout.

export const testimonialsData = [
  {
    quote:
      "He didn't just edit our video - he made us feel something we didn't even know was in the footage.",
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
      "Our wedding film made everyone cry - even people who weren't at the wedding. That's the level of storytelling here.",
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

// --- 08. SERVICES --------------------------------------------
// What you offer. Each entry gets its own card on /services.
// `icon` options: "play" | "film" | "reels" | "heart"

export const servicesData = [
  {
    title: "YouTube Editing",
    forWho: "YouTubers, Creators, Educators",
    description:
      "End-to-end YouTube video editing from raw footage to upload-ready content. Includes cuts, transitions, sound design, color correction, thumbnails, and captions.",
    includes: [
      "Jump-cut & narrative editing",
      "Custom transitions & motion graphics",
      "Sound design & music sync",
      "Color correction & grading",
      "Thumbnail design",
      "Subtitle & caption integration",
    ],
    timeline: "3-5 business days per video",
    icon: "play",
  },
  {
    title: "Brand Commercials",
    forWho: "Startups, D2C Brands, Agencies",
    description:
      "Cinematic brand films and product commercials that make your brand unforgettable. From concept to final cut - every frame designed to convert.",
    includes: [
      "Cinematic editing & pacing",
      "Color grading (DaVinci Resolve)",
      "Motion graphics & titles",
      "Sound design & voiceover sync",
      "Multi-format delivery (16:9, 9:16, 1:1)",
    ],
    timeline: "5-10 business days",
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
      "Batch editing (10-30 reels/month)",
    ],
    timeline: "1-2 business days per reel",
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
      "Highlight reel (3-5 min)",
      "Full ceremony edit",
      "Social media teasers",
    ],
    timeline: "10-15 business days",
    icon: "heart",
  },
];

// --- 09. PROJECTS --------------------------------------------
// Your work portfolio shown on the home page and /work page.
//
// slug        - URL-friendly ID used in /work/<slug>
// thumbnail   - Cloudinary image URL shown in the grid
// heroImage   - Cloudinary image URL at top of project detail page
// videoUrl    - (optional) Cloudinary video URL for the detail page
// gallery     - Array of Cloudinary image URLs below project details
// featured    - true = shown on home page (keep max 4 featured)
// layout      - "wide" spans full width in grid, "tall" is half-width
// category    - filter tab: "Ads" | "YouTube" | "Reels" | "Weddings"

export const projectsData = [
   {
    slug: "documentary-urbans",
    title: "Urban Stories - Documentary",
    category: "YouTube",
    year: "2024",
    thumbnail:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    heroImage:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    videoUrl:
      "https://res.cloudinary.com/dbfuwh7cz/video/upload/v1772531591/330898_small_ok4x5x.mp4",
    description:
      "A mini-documentary exploring the creative underground of Mumbai with handheld footage and natural light.",
    challenge:
      "12 hours of raw handheld footage, no script, multiple interview subjects with contradicting narratives.",
    approach:
      "Built a paper edit first - transcribed all interviews, found the emotional throughline, then structured a three-act narrative around the strongest stories.",
    tools: ["DaVinci Resolve", "Premiere Pro"],
    result:
      "Selected for two independent film festivals. Used as primary brand asset for 6 months.",
    gallery: [
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    ],
    featured: true,
    layout: "tall" as const,
  },
  {
    slug: "cinematic-reel-2025",
    title: "Cinematic Reel 2025",
    category: "Ads",
    year: "2025",
    thumbnail:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    heroImage:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    videoUrl:
      "https://res.cloudinary.com/dbfuwh7cz/video/upload/v1772531600/336603_small_foxblk.mp4",
    description:
      "A compilation of my best cinematic work from 2025 featuring brand films, music videos, and documentary pieces.",
    challenge:
      "Condense a year's worth of diverse creative output into a cohesive 3-minute showreel that feels like a single narrative rather than a disjointed montage.",
    approach:
      "Mapped emotional beats like a short film - opening with impact, building through variety, peaking with the strongest piece, and closing with a quiet memorable end.",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    result:
      "50K+ views on YouTube in the first week. 12 new client inquiries directly attributed to the reel.",
    gallery: [
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    ],
    featured: true,
    layout: "wide" as const,
  },
  // {
  //   slug: "brand-film-2025",
  //   title: "Brand Film - Hero Campaign",
  //   category: "Ads",
  //   year: "2025",
  //   thumbnail:
  //     "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
  //   heroImage:
  //     "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
  //   videoUrl:
  //     "https://res.cloudinary.com/dbfuwh7cz/video/upload/v1772531591/330898_small_ok4x5x.mp4",
  //   description:
  //     "A visually rich brand film blending slow-motion footage with kinetic typography to convey warmth and authenticity.",
  //   challenge:
  //     "The client had no existing visual identity. The brief was simply 'make us feel premium' with only raw footage and no script.",
  //   approach:
  //     "Created a moodboard-first workflow: defined color palette, pacing rhythm, and typography before touching the footage. Built the story around sensory moments.",
  //   tools: ["Premiere Pro", "After Effects", "Photoshop"],
  //   result: "2.3M impressions across social platforms in the first month.",
  //   gallery: [
  //     "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
  //     "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
  //   ],
  //   featured: true,
  //   layout: "tall" as const,
  // },
  {
    slug: "music-video-neon",
    title: "Neon Nights - Music Video",
    category: "YouTube",
    year: "2024",
    thumbnail:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    heroImage:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    videoUrl:
      "https://res.cloudinary.com/dbfuwh7cz/video/upload/v1772531600/336603_small_foxblk.mp4",
    description:
      "An electrifying music video with neon-drenched visuals, rapid cuts, and custom motion graphics.",
    challenge:
      "The artist wanted a video that matched the intensity of a live concert but the entire shoot was done in a small studio with green screen.",
    approach:
      "Designed 15 unique 3D environments in Blender, synced every cut to the beat map, and layered custom particle effects over the performance footage.",
    tools: ["Premiere Pro", "After Effects", "Blender"],
    result: "1.2M views on YouTube. Featured on two major music blogs.",
    gallery: [
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    ],
    featured: true,
    layout: "wide" as const,
  },
  {
    slug: "documentary-urban",
    title: "Urban Stories - Documentary",
    category: "YouTube",
    year: "2024",
    thumbnail:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    heroImage:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    videoUrl:
      "https://res.cloudinary.com/dbfuwh7cz/video/upload/v1772531591/330898_small_ok4x5x.mp4",
    description:
      "A mini-documentary exploring the creative underground of Mumbai with handheld footage and natural light.",
    challenge:
      "12 hours of raw handheld footage, no script, multiple interview subjects with contradicting narratives.",
    approach:
      "Built a paper edit first - transcribed all interviews, found the emotional throughline, then structured a three-act narrative around the strongest stories.",
    tools: ["DaVinci Resolve", "Premiere Pro"],
    result:
      "Selected for two independent film festivals. Used as primary brand asset for 6 months.",
    gallery: [
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    ],
    featured: true,
    layout: "tall" as const,
  },
  {
    slug: "product-reels",
    title: "Product Reels Package",
    category: "Reels",
    year: "2025",
    thumbnail:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    heroImage:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    videoUrl:
      "https://res.cloudinary.com/dbfuwh7cz/video/upload/v1772531600/336603_small_foxblk.mp4",
    description:
      "A series of high-energy social media reels combining trending transitions, bold captions, and punchy sound design.",
    challenge:
      "Create 30 reels per month that feel unique without blending into the sea of generic social content.",
    approach:
      "Developed a modular template system with interchangeable intro hooks, transition packs, and CTA endings.",
    tools: ["Premiere Pro", "Photoshop", "CapCut"],
    result:
      "Average 200K views per reel. Brand's Instagram grew from 5K to 45K followers in 4 months.",
    gallery: [
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
    ],
    featured: false,
    layout: "wide" as const,
  },
  {
    slug: "wedding-eternal-vows",
    title: "Eternal Vows - Wedding Film",
    category: "Weddings",
    year: "2025",
    thumbnail:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    heroImage:
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    videoUrl:
      "https://res.cloudinary.com/dbfuwh7cz/video/upload/v1772531591/330898_small_ok4x5x.mp4",
    description:
      "A cinematic wedding film that captures the raw emotion and intimate moments of a destination wedding.",
    challenge:
      "8 hours of multi-camera footage across two days, outdoor lighting shifts, and emotional moments that couldn't be re-shot.",
    approach:
      "Synced all cameras in a multi-cam timeline, color-matched across lighting conditions, and built the narrative around the couple's personal vows.",
    tools: ["DaVinci Resolve", "Premiere Pro", "After Effects"],
    result:
      "500K organic views after the couple shared it. Led to 8 new wedding bookings.",
    gallery: [
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
      "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531766/nordseher-castle-9198810_1280_xd8bof.jpg",
    ],
    featured: false,
    layout: "tall" as const,
  },
];

// --- 10. CONTACT PAGE ----------------------------------------

export const contactPageData = {
  headline: "Let's create something unforgettable.",
  subtext:
    "Have a project in mind? I'd love to hear about it. Drop me a message and let's bring your vision to life.",
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
  availability: personalInfo.availability,
  projectTypes: [
    "YouTube Editing",
    "Brand Commercial",
    "Social Media Reels",
    "Wedding Film",
    "Music Video",
    "Other",
  ],
  budgetRanges: [
    "Under Rs.25,000",
    "Rs.25,000 - Rs.50,000",
    "Rs.50,000 - Rs.1,00,000",
    "Rs.1,00,000+",
    "Let's discuss",
  ],
};

// ============================================================
//  TEMPLATE DATA
//  Do not edit below - these control site structure.
// ============================================================

export const parallaxData = {
  textParts: [
    { text: "Simplifying the", br: true },
    { text: "experience", br: false },
  ],
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
  afterStickersText: "of",
  lastLineText: "living one",
  circleGif: "/img/p4.png",
  circleOverlayText: "Screen",
  endText: "at a time",
  skyImage: "/img/p1.png",
  bgMountainImage: "/img/p2.png",
  fgMountainImage: "/img/p3.png",
};

export const aboutData = {
  heading: "About",
  titleWords: [
    { text: "Crafting", br: false },
    { text: "visuals", br: false },
    { text: "that", br: true },
    { text: "move", br: false },
    { text: "&", br: true },
    { text: "inspire.", br: false },
  ],
  image:
    "https://res.cloudinary.com/dbfuwh7cz/image/upload/v1772531767/neelam279-love-pearls-10074583_1280_kgdi5h.jpg",
};

export const processData = {
  heading: "How I Work",
  subheading: "Every project follows a proven creative process.",
  steps: [
    {
      num: "01",
      title: "Understand the Story",
      description:
        "I start by listening - understanding your brand, audience, and the emotion you want to evoke. No editing happens before the story is clear.",
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
        "This is where the magic happens - precise cuts, sound design, color grading, and motion graphics that make the viewer feel something.",
    },
    {
      num: "04",
      title: "Deliver Impact",
      description:
        "Final delivery optimized for your platform - YouTube, Instagram, cinema, or web. Every format, every aspect ratio, pixel-perfect.",
    },
  ],
};

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

export const footerData = {
  videoUrl:
    "https://res.cloudinary.com/dtomdzrqo/video/upload/v1759931671/Footer_Video_optimized_nkxwyl.mp4",
  copyright: `© ${new Date().getFullYear()} All rights reserved.`,
};
