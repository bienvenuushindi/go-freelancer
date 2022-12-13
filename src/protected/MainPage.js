import { Navigate, Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const isAuth = (token) => {
  if (!token || token === '') return false;
  return true;
};

const MainPage = () => (
  isAuth(localStorage.getItem('token')) ? (
    <>
      <Navigation />
      <div className="xl:ml-72">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  )
);

export default MainPage;
