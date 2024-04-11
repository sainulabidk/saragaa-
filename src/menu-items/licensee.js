// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const licensee = {
  id: 'licensee-dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard9',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default licensee;
