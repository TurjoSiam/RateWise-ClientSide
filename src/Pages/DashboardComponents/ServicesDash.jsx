import axios from "axios";
import { useEffect, useState } from "react";


const ServicesDash = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("https://assignment-11-beta.vercel.app/allservices")
            .then(res => setServices(res.data))
    }, [])

    return (
        <div>
            <h2>this is all services page from dashboard. total number of services {services.length}</h2>
        </div>
    );
};

export default ServicesDash;