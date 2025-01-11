import { Link } from "react-router-dom";

const Service = ({ item }) => {

    const { _id, company_name, company_logo, service_name, website, category } = item;

    return (
        <div className="flex items-start gap-2 bg-green-100 rounded-2xl p-3">
            <div>
                <img className="w-12 h-12 object-cover rounded-full" src={company_logo} alt="company logo" />
            </div>
            <div className="w-2/3 space-y-2">
                <h2 className="text-2xl font-bold">{company_name}</h2>
                <h2 className="font-bold">{service_name}</h2>
                <p className="text-gray-600">{website}</p>
                <p className="text-sm font-bold">{category}</p>
                <Link to={`/allservices/${_id}`} className="btn text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See Details</Link>
            </div>
        </div>
    );
};

export default Service;