import { useEffect, useState } from 'react';

import { getBlogPosts } from '../utils/contentful';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const promise = getBlogPosts();

    promise.then((blogPosts) => {
      setPosts(blogPosts);
      setLoading(false);
    });
  }, []);

  return [posts, isLoading];
}
