import { useRoutes } from 'react-router-dom';
import Freelancers from './Freelancers';
import MainPage from '../protected/MainPage';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import { isLoggedIn, RequireAuth } from '../auth/authHelpers';

const MyRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage />,
      children: [
        {
          index: true,
          element: <Freelancers />,
        },
        {
          path: '/details/:id',
          element: <div>Link to details</div>,
        },
        {
          path: '/reserve',
          element: <div>Link to reserve</div>,
        },
        {
          path: '/myreservation',
          element: <div>Link to myreservations</div>,
        },
        {
          path: '/addfreelancer',
          element: isLoggedIn() ? <h1>Link to Add Freelancer</h1> : <div>SDF</div>,
        },
        {
          path: '/deletefreelancer',
          element: <RequireAuth><div>Link to Add Freelancer</div></RequireAuth>,
        },
        {
          path: '/logout',
          element: <div>Logout</div>,
        },
        {
          path: '*',
          element: <div>Page not found</div>,
        },
      ],
    },
    {
      path: '/signin',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ]);

  return routes;
};

export default MyRoutes;
