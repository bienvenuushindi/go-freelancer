import { useRoutes } from 'react-router-dom';
import { RequireAuth } from '../auth/authHelpers';
import Freelancers from './Freelancers';
import MainPage from '../protected/MainPage';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Freelancer from './Freelancer';
import AddFreelancer from './AddFreelancer';
import DeleteFreelancers from './DeleteFreelancers';

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
          path: '/reserve/:freelancer_id?',
          element: <RequireAuth><div>Link to Add Reserve</div></RequireAuth>,
        },
        {
          path: '/myreservation',
          element: <RequireAuth><div>Link to my reservation</div></RequireAuth>,
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
