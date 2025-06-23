export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedDate: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "art-of-simplification",
    title: "The Art of Simplification in UX Design",
    description: "Exploring how constraint-driven design leads to more intuitive user experiences and better product outcomes.",
    category: "Design Process",
    readTime: "5 min read",
    publishedDate: "2024-01-15",
    content: `
      <h2>디자인에서 단순함의 힘</h2>
      <p>복잡함 속에서 단순함을 찾아내는 것은 UX 디자이너의 가장 중요한 능력 중 하나입니다. 사용자들은 복잡한 인터페이스보다는 직관적이고 이해하기 쉬운 디자인을 선호합니다.</p>
      
      <h3>제약이 만드는 창의성</h3>
      <p>제약은 창의성의 적이 아닙니다. 오히려 명확한 제약 조건은 디자이너가 핵심에 집중할 수 있게 도와주며, 더 나은 사용자 경험을 만들어냅니다.</p>
      
      <h3>단순화의 원칙</h3>
      <ul>
        <li><strong>핵심 기능 우선:</strong> 사용자가 가장 자주 사용하는 기능을 먼저 고려합니다.</li>
        <li><strong>시각적 계층:</strong> 정보의 우선순위를 명확하게 구분합니다.</li>
        <li><strong>일관성 유지:</strong> 패턴과 규칙을 일관되게 적용합니다.</li>
      </ul>
      
      <h3>결론</h3>
      <p>단순함은 복잡함을 숨기는 것이 아니라, 복잡함을 우아하게 해결하는 것입니다. 사용자 중심의 단순한 디자인이야말로 진정한 혁신을 가능하게 합니다.</p>
    `
  },
  {
    id: "building-empathy",
    title: "Building Empathy Through Design Research",
    description: "How user interviews and observation methods shape better design decisions and create more inclusive products.",
    category: "User Research",
    readTime: "8 min read",
    publishedDate: "2024-02-03",
    content: `
      <h2>공감을 통한 디자인</h2>
      <p>훌륭한 디자인은 사용자에 대한 깊은 이해에서 시작됩니다. 디자인 리서치는 단순히 데이터를 수집하는 것이 아니라, 사용자의 감정과 경험을 이해하는 과정입니다.</p>
      
      <h3>사용자 인터뷰의 중요성</h3>
      <p>직접적인 대화를 통해 얻은 인사이트는 설문조사나 분석 도구로는 발견할 수 없는 깊은 통찰을 제공합니다. 사용자의 행동 뒤에 숨은 동기와 감정을 이해할 수 있습니다.</p>
      
      <h3>관찰의 힘</h3>
      <p>사용자가 실제로 제품을 사용하는 모습을 관찰하면, 그들이 말로 표현하지 못한 불편함이나 어려움을 발견할 수 있습니다.</p>
      
      <h3>포용적 디자인</h3>
      <p>다양한 배경과 능력을 가진 사용자들을 고려할 때, 우리는 더 포용적이고 접근 가능한 디자인을 만들 수 있습니다. 이는 모든 사용자에게 더 나은 경험을 제공합니다.</p>
      
      <h3>실천 방법</h3>
      <ul>
        <li>정기적인 사용자 인터뷰 진행</li>
        <li>다양한 사용자 그룹과의 만남</li>
        <li>사용성 테스트를 통한 객관적 관찰</li>
        <li>팀 내 인사이트 공유</li>
      </ul>
    `
  },
  {
    id: "scaling-design",
    title: "Scaling Design: From Component to System",
    description: "A comprehensive guide to building and maintaining design systems that grow with your product and team.",
    category: "Design Systems",
    readTime: "12 min read",
    publishedDate: "2024-02-20",
    content: `
      <h2>디자인 시스템의 필요성</h2>
      <p>프로덕트가 성장하고 팀이 확대되면서, 일관된 디자인을 유지하는 것은 점점 어려워집니다. 디자인 시스템은 이러한 문제를 해결하는 체계적인 접근법입니다.</p>
      
      <h3>컴포넌트에서 시스템으로</h3>
      <p>개별 컴포넌트를 만드는 것에서 시작하여, 점진적으로 전체 디자인 시스템을 구축해나가는 과정을 살펴보겠습니다.</p>
      
      <h3>디자인 토큰의 활용</h3>
      <p>색상, 타이포그래피, 간격 등의 기본 요소들을 토큰화하여 일관성을 보장하고, 변경사항을 효율적으로 관리할 수 있습니다.</p>
      
      <h4>토큰의 종류:</h4>
      <ul>
        <li><strong>Color Tokens:</strong> Primary, Secondary, Neutral 컬러 팔레트</li>
        <li><strong>Typography Tokens:</strong> Font family, Size, Weight, Line-height</li>
        <li><strong>Spacing Tokens:</strong> Margin, Padding, Gap 값들</li>
        <li><strong>Border Tokens:</strong> Border radius, Width, Style</li>
      </ul>
      
      <h3>문서화와 가이드라인</h3>
      <p>디자인 시스템의 성공은 좋은 문서화에 달려있습니다. 언제, 어떻게, 왜 특정 컴포넌트를 사용해야 하는지 명확하게 설명해야 합니다.</p>
      
      <h3>팀과의 협업</h3>
      <p>디자인 시스템은 디자이너만의 것이 아닙니다. 개발자, PM, 콘텐츠 작성자 등 모든 팀 구성원이 함께 만들어가는 것입니다.</p>
      
      <h3>지속적인 발전</h3>
      <p>디자인 시스템은 완성되는 것이 아니라 계속 진화하는 살아있는 도구입니다. 피드백을 받고, 개선하고, 확장해나가는 과정이 중요합니다.</p>
    `
  }
];
