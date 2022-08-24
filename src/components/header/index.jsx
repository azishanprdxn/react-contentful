import React, { useEffect, useState } from 'react';
// import { useQuery, gql } from '@apollo/client';

import { Header, Nav } from './Header.styled';

const query = `
  {
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

const { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_TOKEN } = process.env;

const DisplayHeaderData = () => {
  const [page, setPage] = useState(null);
  // const { loading, error, data } = useQuery(GET_NAVBAR_DATA);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACE}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Authenticate the request
            Authorization: `Bearer ${REACT_APP_CONTENTFUL_TOKEN}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.navbarCollection.items[0]);
      });
  }, []);

  console.log(page);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;

  if (!page) return <p>Loading...</p>;

  const { navbarTitle, navigationLinks } = page;

  return (
    page && (
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
  return <DisplayHeaderData />;
};

export default HeaderComponent;
