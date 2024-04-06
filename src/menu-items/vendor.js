// assets
import { IconDashboard, IconBrandSuperhuman, IconBow, IconSteam, IconBrandPaypal, Icon24Hours,IconSettings } from '@tabler/icons';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
 

// constant
const icons = { IconDashboard, IconBrandSuperhuman, IconBow, IconSteam, IconBrandPaypal, Icon24Hours,IconSettings };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const vendor = {
  id: 'vendor-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard6',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      // icon: icons.<DashboardOutlinedIcon/>,
      breadcrumbs: false
    },
    {
      id: 'customer',
      title: 'Customers',
      type: 'item',
      url: '/customers',
      icon: icons.IconBrandSuperhuman,
      breadcrumbs: false
    },
    {
      id: 'orders',
      title: 'Orders',
      type: 'item',
      url: '/orders',
      icon: icons.IconBow,
      breadcrumbs: false
    },
    {
      id: 'country2',
      title: 'Payment ',
      type: 'item',
      url: '/country',
      icon: icons.IconBrandPaypal,
      breadcrumbs: true
    },
    {
      id: 'myteam',
      title: 'MyTeam',
      type: 'item',
      url: '/myteam',
      icon: icons.IconSteam,
      breadcrumbs: false
    },
    {
      id: 'support',
      title: 'Support',
      type: 'item',
      url: '/support',
      icon: icons.Icon24Hours,
      breadcrumbs: false
    },
    {
      id: 'settings2',
      title: 'Settings',
      type: 'collapse',
      icon: icons.IconSettings,

      breadcrumbs: true,
      children: [
        {
          id: 'option1',
          title: 'Option 1',
          type: 'item',
          url: '#', // URL for Option 1
          breadcrumbs: true
        },
        {
          id: 'option2',
          title: 'Option 2',
          type: 'item',
          url: '#', // URL for Option 2
          breadcrumbs: true
        }
      ]
    }
  ]
};

const VendorMenu = {
  vendor
};

export default VendorMenu;
