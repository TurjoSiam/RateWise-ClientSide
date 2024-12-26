import { useContext, useEffect, useState } from "react";
import AllService from "./AllService";
import AuthContext from "../Context/AuthContext/AuthContext";
import loader from "/loader.gif"


const AllServices = () => {

    const { loading } = useContext(AuthContext);

    const [services, setServices] = useState([]);

    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');


    useEffect(() => {
        fetch(`https://assignment-11-beta.vercel.app/allservices?filter=${filter}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [filter, search])

    if (loading) {
        return <div className="w-full flex items-center justify-center h-screen">
            <img src={loader} alt="" />
        </div>
    }


    return (
        <div className="w-10/12 mx-auto my-20">
            <div className="mb-5 flex items-center flex-col lg:flex-row justify-around gap-3">
                <select className="select border border-teal-500 select-bordered w-full max-w-xs order-2 lg:order-1" onChange={e => setFilter(e.target.value)}>
                    <option value="">Filter by Category</option>
                    <option value="">All</option>
                    <option value="Technology">Technology</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Food and Beverages">Food and Beverages</option>
                    <option value="Education">Education</option>
                    <option value="Home Services">Home Services</option>
                </select>
                <h2 className="order-1 lg:order-2 text-3xl underline font-bold text-center text-blue-900">Available Services</h2>
                <form className="flex items-start order-3 lg:order-3">
                    <input type="text" placeholder="Search by Service Name" className="input input-bordered border border-teal-500 w-full max-w-xs" onChange={e => setSearch(e.target.value)} />
                    <input type="submit" className="btn text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" value="Search" />
                </form>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    services.map(item => <AllService key={item._id} item={item}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;