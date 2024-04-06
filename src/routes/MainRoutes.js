import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// Auth Component
import Auth from 'utils/auth';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default/index')));
const Country = Loadable(lazy(() => import('module/admin/views/country/index')));
// const Customer = Loadable(lazy(() => import('module/admin/views/customer/index')));
// const Orders = Loadable(lazy(() => import('module/admin/views/orders/index')));
 


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
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
      path: 'country',
      children: [
        {
          path: '',
          element: <Country />
        }
      ]
    },
    // {
    //   path: 'customers',
    //   children: [
    //     {
    //       path: '',
    //       element: <Customer />
    //     }
    //   ]
    // },
    // {
    //   path: 'orders',
    //   children: [
    //     {
    //       path: '',
    //       element: <Orders/>
    //     }
    //   ]
    // },
  ]
};

export default MainRoutes;
