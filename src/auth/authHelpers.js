import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import Freelancers from '../pages/Freelancers';
import showMessage from '../helpers';

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (!token || token === '') {
    return false;
  }
  return true;
};

/* eslint-disable react/prop-types */
export const RequireAuth = ({ children }) => {
  const auth = isLoggedIn();
  useEffect(() => {
    if (!auth) {
      showMessage('You are not signed in!');
    }
  }, [auth]);

  return auth === true ? (
    <>
      <div className="relative top-24 text-red-500 z-10 text-lg text-right pr-6">
        <Toaster />
      </div>
      {children}
    </>
  ) : (
    <>
      <div className="relative top-24 text-red-500 z-10 text-lg text-right pr-6">
        <Toaster />
      </div>
      <Freelancers />
    </>
  );
};
