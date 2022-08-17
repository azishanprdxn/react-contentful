import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query NavBar {
    reactContentfulDemoCollection {
      total
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
      }
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const { title, logo } = data.reactContentfulDemoCollection.items[0];
  console.log(title);

  return (
    <div>
      <h1>Hi {title}</h1>
      <figure>
        <img src={logo.url} alt='logo' />
      </figure>
    </div>
  );
}

function App() {
  return (
    <div>
      <DisplayLocations />
    </div>
  );
}

export default App;
