// 나중에 실제 API로 교체할 부분
export const boardApi = {
  // GET /api/posts
  getPosts: (page = 1, size = 10) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockPosts,
          totalCount: mockPosts.length,
          page,
          size
        });
      }, 500); // API 호출 시뮬레이션
    });
  },

  // GET /api/posts/{id}
  getPost: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = mockPosts.find(p => p.id === parseInt(id));
        if (post) {
          resolve(post);
        } else {
          reject(new Error('Post not found'));
        }
      }, 300);
    });
  },

  // POST /api/posts
  createPost: (postData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPost = {
          ...postData,
          id: Date.now(),
          createdAt: new Date().toISOString(),
          views: 0
        };
        resolve(newPost);
      }, 800);
    });
  }
};