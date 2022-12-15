import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
