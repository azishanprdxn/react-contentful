import React from 'react';
import { usePosts } from '../../custom-hooks/usePosts';
import { PostsContainer, Post } from './Posts.styled';

export default function Posts() {
  const [posts, isLoading] = usePosts();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;

    return posts.map((post) => {
      const date = new Date(post.fields.date);
      const renderedDate = () => {
        return `${date.getDate()} ${date.getMonth()}, ${date.getFullYear()}`;
      };

      return (
        <Post
          className='posts__post'
          key={post.fields.slug}
          to={post.fields.slug}
        >
          <div className='posts__post__img'>
            <img
              src={post.fields.featuredImage.fields.file.url}
              alt={post.fields.title}
            />
          </div>

          <div className='posts__post__details'>
            <small>{renderedDate()}</small>
            <h3>{post.fields.title}</h3>
            <p>{post.fields.description}</p>
          </div>
        </Post>
      );
    });
  };

  return (
    <PostsContainer className='posts__container'>
      <h2>Blogs</h2>

      <div className='posts'>{renderPosts()}</div>
    </PostsContainer>
  );
}
