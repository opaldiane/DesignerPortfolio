export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ux-ui' | 'mobile' | 'web';
  imageUrl: string;
  role?: string;
  timeline?: string;
  tools?: string[];
  team?: string;
  content?: {
    overview?: string;
    images?: string[];
    sections?: {
      title: string;
      content: string;
      image?: string;
    }[];
  };
}

export const projects: Project[] = [
  // UX UI Design Projects (8)
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description: "Analytics & user management interface",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    role: "UX Research, Build UI Design System, UI Design",
    timeline: "Sep 2023 - Dec 2023",
    tools: ["Figma", "Adobe XD", "Miro"],
    team: "Project Interactive Media Design",
    content: {
      overview: "새로운 세대를 위한 혁신적인 소셜 네트워킹 서비스 디자인 프로젝트입니다. 사용자 리서치부터 UI 디자인 시스템 구축까지 전 과정을 담당했습니다.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
      ],
      sections: [
        {
          title: "User Research & Analysis",
          content: "기존 소셜 네트워킹 서비스의 한계점을 분석하고, 새로운 세대 사용자들의 니즈를 파악하기 위한 심층 인터뷰와 설문조사를 진행했습니다.",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        },
        {
          title: "Design System Development",
          content: "일관된 사용자 경험을 위한 컴포넌트 라이브러리와 디자인 시스템을 구축했습니다. 다양한 화면 크기와 플랫폼에서 일관성을 유지할 수 있도록 했습니다.",
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        },
        {
          title: "Interface Design",
          content: "사용자 중심의 직관적인 인터페이스를 디자인했습니다. 특히 새로운 세대의 소통 방식을 반영한 혁신적인 UI 요소들을 개발했습니다.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        }
      ]
    }
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Comprehensive component library",
    category: "ux-ui",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    role: "Lead UI Designer, Design System Architect",
    timeline: "Mar 2023 - Aug 2023",
    tools: ["Figma", "Storybook", "Sketch"],
    team: "Design Platform Team",
    content: {
      overview: "확장 가능한 디자인 시스템을 구축하여 다양한 프로덕트 팀이 일관된 사용자 경험을 제공할 수 있도록 했습니다. 컴포넌트 라이브러리부터 디자인 토큰까지 전체 시스템을 설계했습니다.",
      images: [
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
      ],
      sections: [
        {
          title: "디자인 토큰 정의",
          content: "색상, 타이포그래피, 간격 등 디자인의 기본 단위를 정의하고 체계화했습니다. 다양한 플랫폼에서 일관성을 유지할 수 있도록 토큰 기반 시스템을 구축했습니다.",
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        },
        {
          title: "컴포넌트 라이브러리",
          content: "재사용 가능한 UI 컴포넌트들을 설계하고 문서화했습니다. 각 컴포넌트는 다양한 변형과 상태를 고려하여 개발팀이 쉽게 활용할 수 있도록 했습니다.",
          image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
        }
      ]
    }
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
