import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// Auth Component
import Auth from 'utils/auth';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default/index')));

const Customers = Loadable(lazy(() => import('module/vendor/views/Customers/index')));
const Orders = Loadable(lazy(() => import('module/vendor/views/Orders/index')));
const MyTeam = Loadable(lazy(() => import('module/vendor/views/MyTeam/index')));
const Support = Loadable(lazy(() => import('module/vendor/views/Support/index')));
// const Profile = Loadable(lazy(()=> import('module/vendor/views/Profile/index')));
const Profile = Loadable(lazy(() => import('module/vendor/views/Profile/TEXT')));
const ResetPassword = Loadable(lazy(() => import('module/vendor/views/Profile/resetPassword/ResetPassword')));
const Payments = Loadable(lazy(() => import('module/vendor/views/Payments/index')));
// ==============================|| MAIN ROUTING ||============================== //

const VendorRoutes = {
  path: '/',
  element: (
    <>
      <Auth>
        <MainLayout />
      </Auth>
    </>
  ),
  children: [
    {
      path: '',
      element: <Navigate to="/dashboard" replace={true} />
    },
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },

    {
      path: 'customers',
      children: [
        {
          path: '',
          element: <Customers />
        }
      ]
    },
    {
      path: 'orders',
      children: [
        {
          path: '',
          element: <Orders />
        }
      ]
    },
    {
      path: 'myTeam',
      children: [
        {
          path: '',
          element: <MyTeam />
        }
      ]
    },
    {
      path: 'support',
      children: [
        {
          path: '',
          element: <Support />
        }
      ]
    },
    {
      path: 'profile',
      children: [
        {
          path: '',
          element: <Profile />
        }
      ]
    },
    {
      path: 'resetPassword',
      children: [
        {
          path: '',
          element: <ResetPassword />
        }
      ]
    },
    {
      path: 'Payments',
      children: [
        {
          path: '',
          element: <Payments />
        }
      ]
    }
  ]
};

export default VendorRoutes;
