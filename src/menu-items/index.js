

import adminMenu from './dashboard';
import licensee from './licensee';
import vendorMenu from './vendor';
import customerMenu from './customer';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  admin: [adminMenu.admin, adminMenu.country,],
  licensee: [licensee],
  customer: [customerMenu.customer, customerMenu.other],
  vendor: [vendorMenu.vendor]
};

export default menuItems;
