import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './protected/MainPage';
import Freelancers from './components/Freelancers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<><h1>Protected Page, Need to Sign in, splash</h1></>}>
            <Route exact path="/signin" element={<><h1>Sign in Page</h1></>} />
            <Route exact path="/signup" element={<><h1>Registration/ SignUp Page</h1></>} />
          </Route>
          <Route element={<MainPage />}>
            <Route exact path="/" element={<Freelancers />} />
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
