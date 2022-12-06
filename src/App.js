import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigation />} />
          <Route path="*" element={<h1 className="font-bold text-2xl text-center mt-20">404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
