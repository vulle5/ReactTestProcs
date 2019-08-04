import React, { useCallback } from 'react';

import { usePost } from './entities';

const Post = () => {
  const [{ loading, post }, { loadPost }] = usePost();

  const handleClickLoadPost = useCallback(
    () => loadPost(Math.floor(Math.random() * 100) + 1),
    [loadPost]
  );

  if (loading) {
    return <div>...Loading</div>;
  }

  console.log(post);

  return (
    <div>
      <button onClick={handleClickLoadPost}>get post</button>
      {post && (
        <div>
          <h2>{`${post.title}, id:${post.id}`}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
