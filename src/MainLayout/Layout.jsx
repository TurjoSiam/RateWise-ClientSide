import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import loader from "/loader.gif"
import Footer from "../Pages/Shared/Footer";

const Layout = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className="w-full flex items-center justify-center h-screen">
            <img src={loader} alt="" />
        </div>
    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;