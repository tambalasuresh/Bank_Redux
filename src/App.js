import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from './store/apislice';
import LoginPage from './component/login';

const App = () => {
  // const { accessToken } = useSelector(selectAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
