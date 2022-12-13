import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Freelancers from './components/Freelancers';
import MainPage from './protected/MainPage';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route element={<MainPage />}>
            <Route exact path="/freelancers" element={<Freelancers />} />
            <Route exact path="/details/:id" element={<><h1>Link to FreeLancer&apos;s Details page</h1></>} />
            <Route exact path="/reserve" element={<><h1>Link to Reservation page</h1></>} />
            <Route exact path="/myreservation" element={<><h1>Link to My Reservation page</h1></>} />
            <Route exact path="/addfreelancer" element={<><h1>Link to Add Freelancer page</h1></>} />
            <Route exact path="/deletefreelancer" element={<><h1>Link to Delete Freelancer Page</h1></>} />
          </Route>
          <Route path="*" element={<h1 className="font-bold text-2xl text-center mt-20">404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
