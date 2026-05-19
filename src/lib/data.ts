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
    title: "Fintech Dashboard App",
    description:
      "Challenge: Processing high-volume real-time financial data with minimal latency.\nSolution: Implemented a custom WebSocket architecture with aggressive client-side caching using React Query.",
    tags: ["React", "WebSockets"],
    image: "/projects/od-formy.png",
    alt: "OD.Formy interior design studio website homepage with modern living room hero.",
    imageFit: "contain",
  },
  {
    title: "Global E-Commerce API",
    description:
      "Challenge: Unifying disparate regional inventory databases into a single headless storefront.\nSolution: Designed a federated GraphQL gateway layering over legacy REST services.",
    tags: ["GraphQL", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUDI-VfkpyxPmc9jdVU6Vj2-yAL8iXSBkWrE-LOeD_QuSw6qhPfuz8meOfszcgzKtljQQFKdY6u_BnYeaQ9nx4bEeuA6aUimp0wDcnHZow9Khq_9ms4l4BLLrklMXeamt2gXIfepKAeRA-NYm0nCu8fFDoKTygo6E9GdqMUvx_PTHCe2d1d1zulgbpBGL6H1UwJJBz0c3pYZzJhGLfuzlzfwNPuWHGB4kLroDHr8CT4PiMSEwkWM58b1g2FIk-Mw_eMFj9iE96XYE",
    alt: "A stark, minimalist flat-lay of a modern data visualization dashboard on a tablet.",
    imageFit: "cover",
  },
  {
    title: "SaaS Identity Platform",
    description:
      "Challenge: Building a secure, multi-tenant authentication microservice.\nSolution: Deployed a zero-trust architecture utilizing OAuth2.0 and JWTs on AWS ECS.",
    tags: ["AWS", "Security"],
    image: "/projects/teddy-cherry-club.png",
    alt: "Teddy Cherry Club children's animation and workshops website homepage.",
    imageFit: "contain",
  },
] as const;

export const FOOTER_LINKS = [
  { href: "#", label: "GitHub", icon: "github" },
  { href: "#", label: "LinkedIn", icon: "linkedin" },
  { href: "#", label: "X", icon: "x" },
  { href: "#", label: "Email", icon: "email" },
] as const;
