import { fetchPost } from '../services/postService';

export const initialState = {
  loading: false,
  post: null
};

export async function loadPost(id) {
  this.setState({ loading: true });

  const res = await fetchPost(id);
  this.setState({ loading: false, post: res });
}
