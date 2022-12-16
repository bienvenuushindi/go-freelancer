import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MainPage = () => (
  <>
    <Navigation />
    <div className="xl:ml-64">
      <Outlet />
    </div>
  </>
);

export default MainPage;
