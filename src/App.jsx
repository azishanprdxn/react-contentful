import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Posts from './components/Posts/posts';
import SinglePost from './components/SinglePost/single-post';

import HeaderComponent from './components/header';

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path='/blogs' exact element={<Posts />} />
        <Route path='/blogs/:id' element={<SinglePost />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
