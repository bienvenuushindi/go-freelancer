import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Freelancers from './components/Freelancers';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route exact path="/" element={<Freelancers />} />
          <Route path="*" element={<h1 className="font-bold text-2xl text-center mt-20">404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
