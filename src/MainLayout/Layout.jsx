import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import loader from "/loader.gif"

const Layout = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className="w-full flex items-center justify-center h-screen">
            <img src={loader} alt="" />
        </div>
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;