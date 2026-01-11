import { Outlet } from "react-router";
import CartDrawer from '../CartDrawer';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';

const Root = () => {
    return (    
        <div className="min-h-screen flex flex-col relative">
            <Navbar className="flex-1 bg-gray-50" />
            <CartDrawer />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;