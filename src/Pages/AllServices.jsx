import { useContext, useEffect, useState } from "react";
import AllService from "./AllService";
import AuthContext from "../Context/AuthContext/AuthContext";
import loader from "/loader.gif"


const AllServices = () => {

    const { loading } = useContext(AuthContext);

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    if (loading) {
        return <div className="w-full flex items-center justify-center h-screen">
            <img src={loader} alt="" />
        </div>
    }


    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-3 gap-5 my-20">
                {
                    services.map(item => <AllService key={item._id} item={item}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;