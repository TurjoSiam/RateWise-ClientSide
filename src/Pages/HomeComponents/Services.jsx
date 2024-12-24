import { useContext, useEffect, useState } from "react";
import Service from "./Service";
import AuthContext from "../../Context/AuthContext/AuthContext";
import loader from "/loader.gif"

const Services = () => {

    const { loading } = useContext(AuthContext);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])

    if (loading) {
        return <div className="w-full flex items-center justify-center h-screen">
            <img src={loader} alt="" />
        </div>
    }


    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    services.map(item => <Service key={item._id} item={item}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;