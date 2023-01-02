import { useRoutes } from 'react-router-dom';
import { RequireAuth } from '../auth/authHelpers';
import Freelancers from '../pages/Freelancers';
import MainPage from '../protected/MainPage';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Freelancer from '../pages/Freelancer';
import AddFreelancer from '../pages/AddFreelancer';
import DeleteFreelancers from '../pages/DeleteFreelancers';
import Reserve from '../pages/Reserve';
import MyReservations from '../pages/MyReservations';

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
          element: <div><Freelancer /></div>,
        },
        {
          path: '/reserve',
          element: <RequireAuth><Reserve /></RequireAuth>,
        },
        {
          path: '/myreservation',
          element: <RequireAuth><MyReservations /></RequireAuth>,
        },
        {
          path: '/addfreelancer',
          element: <RequireAuth><AddFreelancer /></RequireAuth>,
        },
        {
          path: '/deletefreelancer',
          element: <RequireAuth><DeleteFreelancers /></RequireAuth>,
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
