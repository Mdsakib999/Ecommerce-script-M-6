import { NavLink } from 'react-router';
import {
  ShoppingCartIcon,
  ClipboardDocumentIcon,
  UserGroupIcon
} from '@heroicons/react/20/solid';

function AdminSidebar() {
  return (
    <nav className="mt-10">
      <ul>
        <li>
          <NavLink 
            to="/admin/products" 
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
          >
            <ShoppingCartIcon className="w-5 h-5 mr-2 text-gray-300" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/orders"
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
          >
            <ClipboardDocumentIcon className="w-5 h-5 mr-2 text-gray-300" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/users"
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
          >
            <UserGroupIcon className="w-5 h-5 mr-2 text-gray-300" />
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default AdminSidebar;
