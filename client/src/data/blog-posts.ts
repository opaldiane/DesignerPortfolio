export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "art-of-simplification",
    title: "The Art of Simplification in UX Design",
    description: "Exploring how constraint-driven design leads to more intuitive user experiences and better product outcomes.",
    category: "Design Process",
    readTime: "5 min read"
  },
  {
    id: "building-empathy",
    title: "Building Empathy Through Design Research",
    description: "How user interviews and observation methods shape better design decisions and create more inclusive products.",
    category: "User Research",
    readTime: "8 min read"
  },
  {
    id: "scaling-design",
    title: "Scaling Design: From Component to System",
    description: "A comprehensive guide to building and maintaining design systems that grow with your product and team.",
    category: "Design Systems",
    readTime: "12 min read"
  }
];
