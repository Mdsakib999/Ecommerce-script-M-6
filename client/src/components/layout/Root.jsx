import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from "react-router";
const Root = () => {
    return (    
        <div className="min-h-screen flex flex-col">
            <Navbar className="flex-1 bg-gray-50" />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;