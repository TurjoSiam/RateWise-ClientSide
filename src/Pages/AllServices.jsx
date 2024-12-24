import { useEffect, useState } from "react";
import AllService from "./AllService";


const AllServices = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])


    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    services.map(item => <AllService key={item._id} item={item}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;