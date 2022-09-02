import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { useSinglePost } from '../../custom-hooks/useSinglePost';

export default function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);

  const RenderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <>
        <div className='post__intro'>
          <h2 className='post__intro__title'>{post.title}</h2>
          <small className='post__intro__date'>{post.date}</small>
          <p className='post__intro__desc'>{post.description}</p>

          <img
            className='post__intro__img'
            src={post.featuredImage.fields.file.url}
            alt={post.title}
          />
        </div>

        <div className='post__body'>{documentToReactComponents(post.body)}</div>
      </>
    );
  };

  return (
    <div className='post'>
      <Link className='post__back' to='/blogs'>
        {'< Back'}
      </Link>

      <RenderPost />
    </div>
  );
}
