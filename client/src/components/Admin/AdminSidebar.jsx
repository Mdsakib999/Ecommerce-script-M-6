import {
    ClipboardDocumentIcon,
    HomeIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import { NavLink } from "react-router";

function AdminSidebar() {
  return (
    <nav className="mt-10 px-4">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/admin"
            end
            className={({ isActive }) => 
              `flex items-center px-4 py-2.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/20" 
                  : "text-gray-400 hover:bg-gray-700/50 hover:text-white"
              }`
            }
          >
            <HomeIcon className="w-5 h-5 mr-3" />
            <span className="font-medium">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/products"
            className={({ isActive }) => 
              `flex items-center px-4 py-2.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/20" 
                  : "text-gray-400 hover:bg-gray-700/50 hover:text-white"
              }`
            }
          >
            <ShoppingCartIcon className="w-5 h-5 mr-3" />
            <span className="font-medium">Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/categories"
            className={({ isActive }) => 
              `flex items-center px-4 py-2.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/20" 
                  : "text-gray-400 hover:bg-gray-700/50 hover:text-white"
              }`
            }
          >
            <WrenchScrewdriverIcon className="w-5 h-5 mr-3" />
            <span className="font-medium">Categories</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) => 
              `flex items-center px-4 py-2.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/20" 
                  : "text-gray-400 hover:bg-gray-700/50 hover:text-white"
              }`
            }
          >
            <ClipboardDocumentIcon className="w-5 h-5 mr-3" />
            <span className="font-medium">Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/users"
            className={({ isActive }) => 
              `flex items-center px-4 py-2.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/20" 
                  : "text-gray-400 hover:bg-gray-700/50 hover:text-white"
              }`
            }
          >
            <UserGroupIcon className="w-5 h-5 mr-3" />
            <span className="font-medium">Users</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default AdminSidebar;
