import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Header, Nav } from './Header.styled';

const GET_NAVBAR_DATA = gql`
  query NavBar {
    navbarCollection {
      items {
        navbarTitle
        siteLogo {
          url
        }
        navigationLinks
      }
    }
  }
`;

const DisplayHeaderData = () => {
  const { loading, error, data } = useQuery(GET_NAVBAR_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const { navbarTitle, navigationLinks } = data?.navbarCollection.items[0];

  return (
    data && (
      <Header>
        <div className='wrapper'>
          <div className='header__container'>
            <h1>
              <a href='#FIXME' title={navbarTitle}>
                {navbarTitle}
              </a>
            </h1>
            {Array.isArray(navigationLinks) && (
              <Nav>
                <ul>
                  {navigationLinks.map((navLink, index) => (
                    <li key={index}>
                      <a href='#FIXME' title={navLink}>
                        {navLink}
                      </a>
                    </li>
                  ))}
                </ul>
              </Nav>
            )}
          </div>
        </div>
      </Header>
    )
  );
};

const HeaderComponent = () => {
  return (
    <>
      <DisplayHeaderData />
    </>
  );
};

export default HeaderComponent;
