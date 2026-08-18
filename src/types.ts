export type CategoryFilter = 'all' | 'advocacy' | 'dev' | 'learning';

export interface Milestone {
  id: string;
  roman: string;
  year: string;
  month: string;
  title: string;
  category: 'advocacy' | 'dev' | 'learning';
  categoryLabel: string;
  summary: string;
  details: string[];
  tags: string[];
}

export interface ProposalItem {
  id: string;
  roman: string;
  date: string;
  title: string;
  category: string;
  status: '研擬中' | '已提案' | '列管追蹤中' | '縣府研採';
  proposalContent: string; // 提案內容
  departmentResponse?: {   // 政府部門回覆
    department: string;   // 回覆單位 (例：新竹縣政府教育處 / 社會處)
    responseDate?: string;
    content: string;      // 研覆內容
  };
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: '兒少權益' | '技術開發' | '學習與隨筆';
  tags: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'advocacy' | 'dev';
  categoryLabel: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  roman: string;
}
