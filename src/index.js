import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

const {
  REACT_APP_CONTENTFUL_URL,
  REACT_APP_CONTENTFUL_SPACE,
  REACT_APP_CONTENTFUL_TOKEN,
} = process.env;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${REACT_APP_CONTENTFUL_URL}/${REACT_APP_CONTENTFUL_SPACE}`,
  headers: {
    Authorization: `Bearer ${REACT_APP_CONTENTFUL_TOKEN}`,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
