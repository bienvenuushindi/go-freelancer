import { Navigate, Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const useAuth = () => {
  let loggedIn = false;
  if (localStorage.getItem('token')) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }

  return loggedIn;
};

const MainPage = () => {
  const isAuth = useAuth();
  return isAuth ? (
    <>
      <Navigation />
      <div className="xl:ml-72">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default MainPage;
