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
      <div className="relative top-24 text-red-500 z-10 text-lg text-right pr-6">You are not signed in</div>
      <Freelancers />
    </>
  );
};
