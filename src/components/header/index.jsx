import React, { useEffect, useState } from 'react';
import FetchUtils from '../../utils/fetch-util';
// import { useQuery, gql } from '@apollo/client';

import { Header, Nav } from './Header.styled';

const NAVBAR_QUERY = `
query navBar {
  headerCollection {
    items {
      title
      logo {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      navsCollection(limit: 5) {
        total
        items {
          ... on Navigations {
            title
            pageUrl
            subLinksCollection(limit: 5) {
              items {
                ... on Navigations {
                  title
                  pageUrl
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const DisplayHeaderData = () => {
  const [page, setPage] = useState(null);
  // const { loading, error, data } = useQuery(GET_NAVBAR_DATA);

  const fetchData = async () => {
    try {
      const response = await FetchUtils.postData(
        JSON.stringify({ query: NAVBAR_QUERY })
      );
      if (response.status === 200) {
        const { data } = response.data;
        setPage(data.headerCollection.items[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;

  if (!page) return <p>Loading...</p>;

  console.log(page);

  const { title, navsCollection } = page;

  return (
    page && (
      <Header>
        <div className='wrapper'>
          <div className='header__container'>
            <h1>
              <a href='#FIXME' title={title}>
                {title}
              </a>
            </h1>
            {Array.isArray(navsCollection.items) && (
              <Nav>
                <ul>
                  {navsCollection.items.map((navLink) => (
                    <li key={navLink.pageUrl}>
                      <a href={navLink.pageUrl} title={navLink.title}>
                        {navLink.title}
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
