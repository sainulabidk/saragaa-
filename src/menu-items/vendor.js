// assets
import { IconDashboard ,IconBrandSuperhuman, IconBow, IconSteam , IconBrandPaypal} from '@tabler/icons';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

// constant
const icons = { IconDashboard , IconBrandSuperhuman, IconBow, IconSteam, IconBrandPaypal};

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
   
  ]
};


const VendorMenu={
  vendor

}

export default VendorMenu;
