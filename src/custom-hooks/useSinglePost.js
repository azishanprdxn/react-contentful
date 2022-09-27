import { useEffect, useState } from 'react';

import { getSinglePost } from '../utils/contentful';

export function useSinglePost(slug) {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const promise = getSinglePost(slug);

    promise.then((result) => {
      setPost(result[0].fields);
      setLoading(false);
    });
  }, [slug]);

  return [post, isLoading];
}
