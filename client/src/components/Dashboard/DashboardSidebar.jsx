import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router';

function DashboardSidebar() {
  return (
    <nav className="mt-10">
      <ul>
        <li>
          <NavLink 
            to="/dashboard/profile" 
            className={({ isActive }) => 
              `flex items-center px-3 py-2 rounded-md transition-colors ${
                isActive ? "bg-cyan-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <UserCircleIcon className="w-5 h-5 mr-2" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/dashboard/orders"
            className={({ isActive }) => 
              `flex items-center px-3 py-2 rounded-md transition-colors ${
                isActive ? "bg-cyan-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <ShoppingBagIcon className="w-5 h-5 mr-2" />
            My Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardSidebar;
