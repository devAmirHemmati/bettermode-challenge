const NAVIGATION = {
  POST_LIST: '/',
  NEW_POST: '/posts/new',
  LOGIN: '/auth/login',
  POST_DETAIL: (id: string) => `/posts/${id}`,
};

export default NAVIGATION;
