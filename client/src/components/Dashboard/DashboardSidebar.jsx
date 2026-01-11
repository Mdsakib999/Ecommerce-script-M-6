import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router';

function DashboardSidebar() {
  return (
    <nav className="mt-10">
      <ul>
        <li>
          <NavLink 
            to="/dashboard/profile" 
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
          >
            <UserCircleIcon className="w-5 h-5 mr-2 text-gray-300" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/dashboard/orders"
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
          >
            <ShoppingBagIcon className="w-5 h-5 mr-2 text-gray-300" />
            My Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardSidebar;
