import { Milestone, BlogPost, ProjectItem, ProposalItem } from '../types';

export const PROFILE_INFO = {
  name: "Tofu",
  domain: "tofu1201.me",
  email: "tofu@tofu1201.tw",
  github: "https://github.com/tofu1201",
  instagram: "https://instagram.com/tofu1201_tw",
  repoUrl: "https://github.com/tofu1201/tofu1201.me",
  location: "新竹縣, 台灣",
  tagline: "在會考學業、程式碼與兒少權益倡議之間，劃出屬於國中世代的痕跡。",
  bio: "我是 Tofu，一名國中學生（116會考生）、新竹縣兒少代表（115/08/10 正式上任）以及程式設計者。我掌握 Python、HTML 與 CSS，熱愛透過程式打造網頁與小工具。",
};

export const IDENTITIES = [
  {
    roman: "I",
    title: "新竹縣兒少代表",
    subtitle: "Public Advocacy & Youth Rights (115/08/10 上任)",
    icon: "ShieldAlert",
    description: "於 115 年 8 月 10 日正式上任新竹縣兒少代表，關注在地兒少權益與公共議題。",
    bullets: [
      "115 年 8 月 10 日正式上任新竹縣兒少代表",
      "關注在地國中小與國高中生切身權益",
      "參與兒少交流與公共議題討論"
    ]
  },
  {
    roman: "II",
    title: "程式設計者",
    subtitle: "Python, HTML & CSS",
    icon: "Code2",
    description: "學習與探索軟體開發，掌握 Python 腳本撰寫、HTML5 架構與 CSS3 視覺設計。",
    bullets: [
      "使用 HTML & CSS 設計個人品牌網站",
      "撰寫 Python 自動化腳本與工具",
      "關注 Web 視覺設計與無障礙網頁體驗"
    ]
  },
  {
    roman: "III",
    title: "116 會考學生",
    subtitle: "Junior High School Student (116 CAP Exam)",
    icon: "GraduationCap",
    description: "目前為國中九年級學生，積極備戰 116 國中會考，保持自律學習與好勝心。",
    bullets: [
      "目標明確備戰 116 CAP 國中會考",
      "培養自主學習與自律時間管理習慣",
      "將邏輯思維運用於課業學習與程式探索中"
    ]
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    roman: "I",
    year: "2026",
    month: "08",
    title: "正式上任新竹縣兒少代表 (115/08/10)",
    category: "advocacy",
    categoryLabel: "兒少代表上任",
    summary: "於 115 年 8 月 10 日正式就任新竹縣兒少代表，開啟公共參與新篇章。",
    details: [
      "115 年 8 月 10 日正式就任新竹縣兒少代表"
    ],
    tags: ["新竹縣兒少代表", "115/08/10上任", "兒少權益"]
  }
];

// 兒少提案與政府部門回覆資料庫（可隨時新增真正提案）
export const PROPOSALS: ProposalItem[] = [];

export const BLOG_POSTS: BlogPost[] = [];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    roman: "I",
    title: "tofu1201.me 個人品牌網站",
    subtitle: "Physical Notebook & Sticky Note Portfolio Website",
    category: "dev",
    categoryLabel: "程式作品",
    description: "運用 HTML, CSS 與現代前端技術打造的個人品牌網站。採用實體線圈手帳與 Post-it 便利貼視覺風格。",
    tags: ["HTML", "CSS", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "實體線圈手帳與莫蘭迪便利貼視覺語言",
      "全站 SEO 最佳化與 JSON-LD 結構化資料",
      "響應式手持裝置瀏覽體驗"
    ],
    demoUrl: "https://tofu1201.me",
    githubUrl: "https://github.com/tofu1201/tofu1201.me"
  },
  {
    id: "p2",
    roman: "II",
    title: "Python 自動化腳本與小工具",
    subtitle: "Python Utility Scripts",
    category: "dev",
    categoryLabel: "程式作品",
    description: "利用 Python 撰寫的自主學習小工具集，包含自動化檔案整理與基礎資料處理腳本。",
    tags: ["Python", "Scripting", "Automation"],
    highlights: [
      "運用 Python 處理日常檔案與資料",
      "練習演算法邏輯與模組化寫作"
    ]
  }
];
