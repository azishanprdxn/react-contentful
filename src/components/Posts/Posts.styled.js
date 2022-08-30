import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostsContainer = styled.div`
  & > h2 {
    text-align: center;
    padding: 24px 12px 24px;
  }

  & .posts {
    padding: 24px;
    display: flex;
    gap: 20px;

    &__post {
      width: 33.33%;
      box-shadow: 2px 2px 8px grey;
      border-radius: 20px;
      overflow: hidden;
      transition: box-shadow 0.2s;

      &__img {
        height: 200px;
        overflow: hidden;

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.2s;
        }
      }

      &:hover {
        box-shadow: 2px 2px 16px grey;

        img {
          transform: scale(1.2, 1.2);
        }
      }
    }
  }
`;

const Post = styled(Link)`
  & > div.posts__post__details {
    padding: 24px 12px;
  }
`;

export { PostsContainer, Post };
