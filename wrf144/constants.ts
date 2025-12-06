
import { Website, Category } from './types';
import { 
  Code2, 
  Palette, 
  BrainCircuit, 
  Zap, 
  GraduationCap, 
  Newspaper, 
  LayoutGrid,
  Star,
  Folder
} from 'lucide-react';

// ==========================================
// 用户配置区域 (USER CONFIGURATION AREA)
// ==========================================
// 在下方 WEBSITES 数组中添加新的网站数据
// Add new websites in the WEBSITES array below

export const CATEGORIES: { id: Category; label: string; icon: any }[] = [
  { id: '推荐', label: '推荐', icon: Star },
  { id: '开发', label: '开发', icon: Code2 },
  { id: '设计', label: '设计', icon: Palette },
  { id: '人工智能', label: 'AI & GPT', icon: BrainCircuit },
  { id: '工具', label: '工具', icon: Zap },
  { id: '学习', label: '学习', icon: GraduationCap },
  { id: '资讯', label: '资讯', icon: Newspaper },
];

export const WEBSITES: Website[] = [
  // 推荐 (Recommended)
  {
    id: 'rec-1',
    title: 'GitHub',
    url: 'https://github.com',
    description: '全球最大的代码托管平台，开发者必备。',
    category: '推荐',
    tags: ['代码', '开源', 'Git']
  },
  {
    id: 'rec-2',
    title: 'ChatGPT',
    url: 'https://chat.openai.com',
    description: 'OpenAI 开发的最强人工智能聊天机器人。',
    category: '推荐',
    tags: ['AI', '聊天', '助手']
  },

  // 开发 (Development)
  {
    id: 'dev-1',
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/zh-CN/',
    description: 'Web 开发者的权威指南和文档。',
    category: '开发',
    tags: ['文档', '前端', '教程']
  },
  {
    id: 'dev-2',
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    description: '全球最大的程序员问答社区。',
    category: '开发',
    tags: ['问答', '社区']
  },
  {
    id: 'dev-3',
    title: '掘金',
    url: 'https://juejin.cn',
    description: '帮助开发者成长的社区，包含前沿技术文章。',
    category: '开发',
    tags: ['社区', '博客', '国内']
  },
  {
    id: 'dev-4',
    title: 'V2EX',
    url: 'https://www.v2ex.com',
    description: '一个关于分享和探索的地方，程序员聚集地。',
    category: '开发',
    tags: ['社区', '论坛']
  },

  // 设计 (Design)
  {
    id: 'des-1',
    title: 'Dribbble',
    url: 'https://dribbble.com',
    description: '设计师灵感分享平台，发现顶级设计作品。',
    category: '设计',
    tags: ['灵感', 'UI', '社区']
  },
  {
    id: 'des-2',
    title: 'Figma',
    url: 'https://figma.com',
    description: '在线协作界面设计工具，团队协作首选。',
    category: '设计',
    tags: ['工具', 'UI/UX', '协作']
  },
  {
    id: 'des-3',
    title: 'Pinterest',
    url: 'https://www.pinterest.com',
    description: '发现灵感，图片收藏工具。',
    category: '设计',
    tags: ['灵感', '图片']
  },

  // 人工智能 (AI)
  {
    id: 'ai-1',
    title: 'Hugging Face',
    url: 'https://huggingface.co',
    description: 'AI 领域的 GitHub，开源模型和数据集聚集地。',
    category: '人工智能',
    tags: ['模型', '开源', 'ML']
  },
  {
    id: 'ai-2',
    title: 'Midjourney',
    url: 'https://www.midjourney.com',
    description: '强大的 AI 绘画工具，生成高质量图像。',
    category: '人工智能',
    tags: ['绘画', '生成式AI']
  },
  {
    id: 'ai-3',
    title: 'Poe',
    url: 'https://poe.com',
    description: 'Quora 推出的 AI 聊天聚合平台，集成了多种模型。',
    category: '人工智能',
    tags: ['聚合', '聊天']
  },

  // 工具 (Tools)
  {
    id: 'tool-1',
    title: 'Notion',
    url: 'https://notion.so',
    description: '集笔记、任务、数据库于一体的 all-in-one 工作空间。',
    category: '工具',
    tags: ['笔记', '效率']
  },
  {
    id: 'tool-2',
    title: 'TinyPNG',
    url: 'https://tinypng.com',
    description: '智能 WebP, PNG 和 JPEG 图片压缩工具。',
    category: '工具',
    tags: ['图片', '压缩']
  },

  // 学习 (Learning)
  {
    id: 'learn-1',
    title: 'Coursera',
    url: 'https://www.coursera.org',
    description: '与全球顶尖大学合作的在线课程平台。',
    category: '学习',
    tags: ['课程', '教育']
  },
  {
    id: 'learn-2',
    title: 'Bilibili',
    url: 'https://www.bilibili.com',
    description: '国内知名的视频弹幕网站，也是学习编程的好地方。',
    category: '学习',
    tags: ['视频', '教程']
  },

  // 资讯 (News)
  {
    id: 'news-1',
    title: 'Hacker News',
    url: 'https://news.ycombinator.com',
    description: '高质量的科技新闻社区。',
    category: '资讯',
    tags: ['科技', '新闻']
  },
  {
    id: 'news-2',
    title: '少数派',
    url: 'https://sspai.com',
    description: '致力于更好地运用数字产品或科学方法，提升工作效率和生活质量。',
    category: '资讯',
    tags: ['测评', '效率']
  }
];
