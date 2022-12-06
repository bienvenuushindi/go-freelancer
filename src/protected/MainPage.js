import { Navigate, Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const useAuth = () => {
  const loggedIn = true;
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
    <Navigate to="/signin" />
  );
};

export default MainPage;
