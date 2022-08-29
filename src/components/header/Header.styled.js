import styled from 'styled-components';

const Header = styled.header`
  background-color: grey;
  color: white;

  & > div.wrapper {
    width: 95%;
    margin: 0 auto;
  }

  & div.header {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;

      & > h1 {
        a {
          img {
            height: 50px;
          }
        }
      }
    }
  }
`;

const Nav = styled.nav`
  & > ul {
    display: flex;
    gap: 30px;
  }
`;

export { Header, Nav };
