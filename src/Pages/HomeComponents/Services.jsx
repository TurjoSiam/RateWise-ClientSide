import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            console.log(data);
        })
    }, [])


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