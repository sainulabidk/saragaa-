
// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const admin = {
  id: 'admin-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard2',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
    
  ]
};

const country = {
  id: 'country',
  type: 'group',
  children: [
    {
      id: 'country2',
      title: 'Country',
      type: 'item',
      url: '/country',
      icon: icons.IconBrandChrome,
      breadcrumbs: true
    }
  ]
};

// const myteam = {
//   id: 'myteam',
//   type: 'group',
//   children: [
//     {
//       id: 'myteam',
//       title: 'myteam',
//       type: 'item',
//       url: '/myteam',
//       icon: icons.IconBrandChrome,
//       breadcrumbs: true
//     }
//   ]
// };


// const customer = {
//   id: 'customer',
//   type: 'group',
//   children: [
//     {
//       id: 'customer',
//       title: 'Customerddddddd',
//       type: 'item',
//       url: '/customers',
//       icon: icons.IconBrandChrome,
//       breadcrumbs: true
//     }
//   ]
// };
// const orders = {
//   id: 'orders',
//   type: 'group',
//   children: [
//     {
//       id: 'orders',
//       title: 'orders',
//       type: 'item',
//       url: '/order',
//       icon: icons.IconBrandChrome,
//       breadcrumbs: true
//     }
//   ]
// };

const adminMenu = {
  admin,
  country,
  // myteam
  // customer,
  // orders
};

export default adminMenu;
