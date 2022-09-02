const { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_TOKEN } = process.env;

const client = require('contentful').createClient({
  space: REACT_APP_CONTENTFUL_SPACE,
  accessToken: REACT_APP_CONTENTFUL_TOKEN,
});

const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
    });
    if (response) {
      return response.items;
    }
    console.log(response);
  } catch (e) {
    console.log('Error:', e);
  }
};

const getSinglePost = async (slug) => {
  try {
    const response = await client.getEntries({
      'fields.slug': slug,
      content_type: 'blogPost',
    });
    if (response) {
      return response.items;
    }
    console.log(response);
  } catch (e) {
    console.log('Error:', e);
  }
};

export { getBlogPosts, getSinglePost };
