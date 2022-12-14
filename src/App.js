import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Freelancers from './components/Freelancers';
// import MainPage from './protected/MainPage';
// import Login from './auth/Login';
// import Signup from './auth/Signup';
import MyRoutes from './components/MyRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}
export default App;
