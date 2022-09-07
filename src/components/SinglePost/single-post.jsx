import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { useSinglePost } from '../../custom-hooks/useSinglePost';
import { PostContainer } from './SinglePost.styled';

export default function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);

  const RenderPost = () => {
    if (isLoading) return <p>Loading...</p>;
    const date = new Date(post.date);
    const renderedDate = () => {
      return `${date.getDate()} ${date.getMonth()}, ${date.getFullYear()}`;
    };

    return (
      <>
        <div className='post__intro'>
          <h2 className='post__intro__title'>{post.title}</h2>
          <small className='post__intro__date'>{renderedDate()}</small>
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
    <PostContainer className='post'>
      <Link className='post__back' to='/blogs'>
        {'< Go back to blogs'}
      </Link>

      <RenderPost />
    </PostContainer>
  );
}
