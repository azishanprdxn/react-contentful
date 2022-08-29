import axios from 'axios';

const {
  REACT_APP_CONTENTFUL_URL: baseUrl,
  REACT_APP_CONTENTFUL_SPACE: space,
  REACT_APP_CONTENTFUL_TOKEN: token,
} = process.env;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

const PROTO = {
  /**
   * Post data
   *
   */
  postData: async (body, options) => {
    const config = {
      headers,
      ...options,
    };
    const response = await axios.post(`${baseUrl}/${space}`, body, config);

    return response;
  },

  /**
   * Get data
   *
   */
  getData: async (options) => {
    const config = {
      headers,
      ...options,
    };
    const response = await axios.get(`${baseUrl}/${space}`, config);

    return response;
  },

  /**
   * Put data
   *
   */
  putData: async (body, options) => {
    const config = {
      headers,
      ...options,
    };
    const response = await axios.put(`${baseUrl}/${space}`, body, config);

    return response;
  },

  /**
   * Delete data
   *
   */
  deleteData: async (options) => {
    const config = {
      headers,
      ...options,
    };
    const response = await axios.delete(`${baseUrl}/${space}`, config);

    return response;
  },
};

const FetchUtils = Object.create(PROTO);

export default FetchUtils;
