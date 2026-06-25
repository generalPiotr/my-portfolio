export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const SKILLS = [
  { name: "React / Next.js", icon: "react-next" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "GraphQL", icon: "graphql" },
  { name: "Docker / K8s", icon: "docker-k8s" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Claude", icon: "claude" },
  { name: "Cursor", icon: "cursor" },
  { name: "ChatGPT", icon: "chatgpt" },
] as const;

export const PROJECTS = [
  {
    title: "OD.Formy landingpage",
    description:
      "An aesthetic showcase website created for an architecture studio. A combination of custom HTML, CSS, and JS code with the reliability of the WordPress platform. The project stands out with its minimalist design, smooth navigation, and a strong emphasis on displaying architectural photography.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    image: "/projects/od-formy.png",
    alt: "OD.Formy architecture studio showcase website homepage.",
    imageFit: "contain",
    href: "https://odformy.pl",
  },
  {
    title: "E.T Roofing",
    description:
      "A modern, high-converting service website designed for a Melbourne-based roofing company. The main goal was to transform a heavy amount of business information into a clean, scannable user experience that drives leads through optimized quote forms and clear call-to-actions.",
    tags: ["Astro", "HTML", "CSS", "JS"],
    image: "/projects/et-roofing.png",
    alt: "E.T Roofing website homepage with hero section and quote request form.",
    imageFit: "contain",
    href: "https://roofers-website-2137.vercel.app/",
  },
  {
    title: "Teddy Cherry Club website",
    description:
      "A fully responsive web experience developed for a premium children's animation and workshop business. The site effectively handles diverse content, from dynamic workshop details (art, dance, languages) to a transparent pricing structure and a clean booking flow. The WordPress integration ensures the client can easily update monthly cultural themes and weekly calendars.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    image: "/projects/teddy-cherry-club.png",
    alt: "Teddy Cherry Club children's animation and workshops website homepage.",
    imageFit: "contain",
    href: "https://teddycherryclub.com/",
  },
  {
    title: "GYM AI",
    description:
      "Challenge: Building personalized workout plans that adapt to each user's profile and goals.\nSolution: A React Native app with AI-generated weekly plans, live set tracking, and calorie estimates powered by Ollama.",
    tags: ["React Native", "Ollama"],
    image: "/projects/gym-ai.png",
    alt: "GYM AI mobile app screens for weekly plan, active workout, and user profile.",
    imageFit: "contain",
    href: "https://github.com/generalPiotr/GymAI",
  },
] as const;

export const FOOTER_LINKS = [
  { href: "https://github.com/generalPiotr", label: "GitHub", icon: "github" },
  {
    href: "https://www.linkedin.com/in/piotr-dabrowski-wroclaw/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  { href: "mailto:piotrdabrowski.dev@gmail.com", label: "Email", icon: "email" },
] as const;
