import { useContext, useEffect, useState } from "react";
import Service from "./Service";
import AuthContext from "../../Context/AuthContext/AuthContext";
import loader from "/loader.gif"
import { Link } from "react-router-dom";
import pc from "/pc.png"
import gear from "/gear.png"
import { motion } from "motion/react"
import RecentService from "./RecentService";


const RecentServices = () => {

    const { loading } = useContext(AuthContext);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
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
        <div className="w-11/12 mx-auto my-10 flex flex-col items-center">
            <div className="flex w-full items-center justify-around">
                <motion.div
                    animate={{ x: 200 }}
                    initial={{ x: 0 }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
                    <img src={gear} alt="gear" />
                </motion.div>
                <h2 className="text-4xl underline font-bold text-blue-800 text-center mb-5">Recently Added Services</h2>
                <motion.div
                    animate={{ x: -200 }}
                    initial={{ x: 0 }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
                    <img src={pc} alt="gear" />
                </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 rounded-xl p-5">
                {
                    services.map(item => <RecentService key={item._id} item={item}></RecentService>)
                }
            </div>
            <Link to="/allservices" className="mt-6 w-4/12 btn text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See More</Link>
        </div>
    );
};

export default RecentServices;