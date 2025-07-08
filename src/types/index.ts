export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  category: string;
}

export interface ApiResponse<T> {
  data: T;
  totalCount: number;
  page: number;
  size: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: USER_ROLES;
  isLoggedIn: boolean;
}