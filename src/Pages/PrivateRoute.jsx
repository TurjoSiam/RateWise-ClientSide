import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import loader from "/loader.gif"


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="w-full flex items-center justify-center h-screen">
            <img src={loader} alt="" />
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate to="/signin" state={location?.pathname}></Navigate>
};

export default PrivateRoute;