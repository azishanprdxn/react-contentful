const { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_TOKEN } = process.env;

const client = require('contentful').createClient({
  space: REACT_APP_CONTENTFUL_SPACE,
  accessToken: REACT_APP_CONTENTFUL_TOKEN,
});

const getBlogPosts = () =>
  client
    .getEntries({
      content_type: 'blogPost',
    })
    .then((response) => response.items);

const getSinglePost = (slug) =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'blogPost',
    })
    .then((response) => response.items);

export { getBlogPosts, getSinglePost };
