import { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "게시판 프로젝트 시작합니다",
    content: "React와 Java Spring으로 게시판을 만들어보겠습니다.",
    author: "개발자1",
    createdAt: "2025-01-15 10:30",
    updatedAt: "2025-01-15 10:30",
    views: 15,
    category: "공지사항"
  },
  {
    id: 2,
    title: "CSS 스타일링 가이드",
    content: "순수 CSS로 깔끔한 UI를 만들어보세요.",
    author: "퍼블리셔1", 
    createdAt: "2025-01-14 14:20",
    updatedAt: "2025-01-14 14:20",
    views: 8,
    category: "일반"
  }
];