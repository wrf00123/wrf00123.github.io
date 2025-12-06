
export type Category = '推荐' | '开发' | '设计' | '人工智能' | '工具' | '学习' | '资讯' | '其他';

export interface Website {
  id: string;
  title: string;
  url: string;
  description: string;
  category: Category;
  icon?: string; // Optional custom icon url
  tags?: string[];
}
