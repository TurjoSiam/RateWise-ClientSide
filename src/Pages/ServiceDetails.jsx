import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {

    const { _id, company_name, company_logo, service_name, website, category } = useLoaderData();

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-reviews/${_id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    }, [_id])

    console.log(reviews);




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
                <div>
                    {
                        reviews.map(item => <div className="flex items-start bg-cyan-200 rounded-xl p-5 gap-5">
                            <div>
                                <img className="w-10 h-10 object-cover rounded-full" src={item.reviewerPhoto} alt="photo" />
                            </div>
                            <div>
                                <h2>{item.reviewerName}</h2>
                                <p>{item.review}</p>
                            </div>
                        </div>)
                    }
                </div>
                <Link className="btn" to={`/addreview/${_id}`}>Add Review</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;