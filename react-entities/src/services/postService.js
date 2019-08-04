import axios from 'axios';

export const fetchPost = async id => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};
