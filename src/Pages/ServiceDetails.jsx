import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {

    const { _id, company_name, company_logo, service_name, website, category } = useLoaderData()


    return (
        <div className="flex items-start gap-3">
            <div className="w-1/3">
                <img src={company_logo} alt="company logo" />
            </div>
            <div className="w-2/3 space-y-2">
                <h2 className="text-2xl font-bold">{company_name}</h2>
                <h2 className="font-bold">{service_name}</h2>
                <p>{website}</p>
                <div className="px-2 py-1 rounded-full bg-indigo-400 w-fit">
                    <p>{category}</p>
                </div>
                <Link className="btn" to={`/addreview/${_id}`}>Add Review</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;