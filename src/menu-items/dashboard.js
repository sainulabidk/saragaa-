
// assets
import { IconBuildingBank, IconDashboard, IconSettings, IconWorld ,IconHelp} from '@tabler/icons';

// constant
const icons = { IconDashboard, IconSettings,IconBuildingBank,IconWorld,IconHelp };

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
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    
    // {
    //   id: 'icons',
    //   title: 'Settings',
    //   type: 'collapse',
    //   icon: icons.IconSettings,
    //   children: [
    //     {
    //       id: '',
    //       title: 'Bank',
    //       type: 'item',
    //       url: '/Bank',
    //       icon: icons.IconBrandChrome,
    //       breadcrumbs: true
    //     }
    //   ]
    // },
  ]
};

// const country = {
//   id: 'country',
//   type: 'group',
//   children: [
//     {
//       id: 'country2',
//       title: 'Country',
//       type: 'item',
//       url: '/country',
//       icon: icons.IconBrandChrome,
//       breadcrumbs: true
//     }
//   ]
// };

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


const settings = {
  id: 'settings',
  type: 'group',
  children: [
    {
      id: 'icons',
      title: 'Settings',
      type: 'collapse',
      icon: icons.IconSettings,
      children: [
        {
          id: 'bank',
          title: 'Bank',
          type: 'item',
          url: '/Bank',
          icon: icons.IconBuildingBank,
          breadcrumbs: false
        },
        {
          id: 'supportType',
          title: 'SupportType',
          type: 'item',
          url: '/supportType',
          icon: icons.IconHelp,
          breadcrumbs: false
        },
        {
          id: 'country2',
          title: 'Country',
          type: 'item',
          url: '/country',
          icon: icons.IconWorld,
          breadcrumbs: false
        },
        {
          id: 'state',
          title: 'State',
          type: 'item',
          url: '/state',
          icon: icons.IconWorld,
          breadcrumbs: false
        },
        {
          id: 'enqSource',
          title: 'Enquiry Source',
          type: 'item',
          url: '/enqSource',
          icon: icons.IconWorld,
          breadcrumbs: false
        },
        {
          id: 'enqMode',
          title: 'Enquiry Model',
          type: 'item',
          url: '/enqMode',
          icon: icons.IconWorld,
          breadcrumbs: false
        },
      ]
    }
  ]
};

const adminMenu = {
  admin,
  // country,
  // myteam
  // customer,
  // orders
  settings,

};

export default adminMenu;
