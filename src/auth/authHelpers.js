import Freelancers from '../components/Freelancers';

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (!token || token === '') return false;
  return true;
};

/* eslint-disable react/prop-types */
export const RequireAuth = ({ children }) => {
  const auth = isLoggedIn();
  return auth === true ? (
    children
  ) : (
    <>
      <h2 className="text-red-500 text-xl">You are not signed in</h2>
      <Freelancers />
    </>
  );
};
