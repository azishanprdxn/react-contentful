import styled from 'styled-components';

const PostContainer = styled.div`
  padding: 24px 12px;

  & > a.post__back {
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }
  }

  & > div.post__intro {
    & > h2 {
      padding-top: 12px;
    }

    & > small {
      display: inline-block;
      padding-bottom: 12px;
    }

    & > p.post__intro__desc {
      padding-bottom: 12px;
      font-size: 20px;
    }

    & > img.post__intro__img {
      width: 600px;
    }
  }

  & > div.post__body {
    padding: 12px 0;
    font-size: 16px;
  }
`;

export { PostContainer };
