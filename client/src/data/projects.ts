export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ux-ui' | 'mobile' | 'web';
  imageUrl: string;
}

export const projects: Project[] = [
  // UX UI Design Projects (8)
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description: "Analytics & user management interface",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Comprehensive component library",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "saas-platform",
    title: "SaaS Platform",
    description: "Enterprise software redesign",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "user-research",
    title: "User Research",
    description: "Journey mapping & wireframes",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Visual identity & guidelines",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "multiplatform-app",
    title: "Multi-platform App",
    description: "Cross-device experience design",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "ux-strategy",
    title: "UX Strategy",
    description: "Research & ideation process",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description: "Interactive prototype development",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },

  // Mobile App Interfaces (6)
  {
    id: "finance-app",
    title: "Finance App",
    description: "Personal banking & budgeting",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "social-platform",
    title: "Social Platform",
    description: "Community-focused mobile app",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "travel-app",
    title: "Travel App",
    description: "Booking & navigation system",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "health-app",
    title: "Health App",
    description: "Wellness tracking & insights",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "elearning-app",
    title: "E-learning App",
    description: "Educational platform design",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "food-delivery",
    title: "Food Delivery",
    description: "Order & delivery experience",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },

  // Web Design Mockups (4)
  {
    id: "corporate-website",
    title: "Corporate Website",
    description: "B2B service platform",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Creative agency showcase",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "ecommerce-site",
    title: "E-commerce Site",
    description: "Online retail experience",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description: "Product launch campaign",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
  }
];
