import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {

    const { _id, company_name, company_logo, service_name, website, category, price, description } = useLoaderData();

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
        <div className="flex items-start gap-10 w-8/12 mx-auto my-20">
            <div className="w-1/3 space-y-3 bg-green-50 p-10 rounded-3xl border border-green-300">
                <img className="w-60 h-60 border border-teal-300 rounded-3xl object-cover" src={company_logo} alt="company logo" />
                <h2 className="text-2xl font-bold">{company_name}</h2>
                <h2 className="font-bold">{service_name}</h2>
                <p>{website}</p>
                <p className="font-bold">{category}</p>
                <p className="text-green-700">{price}</p>
                <p className="text-xs">{description}</p>

            </div>
            <div className="space-y-2 w-2/3">
                <div>
                    <h2 className="text-3xl mb-3 text-teal-600 font-bold">Reviews</h2>
                    {
                        reviews.map(item => <div className="mb-2 flex items-start bg-cyan-50 rounded-xl p-5 gap-3 border border-teal-500">
                            <div>
                                <img className="w-28 h-8 object-cover rounded-full" src={item.reviewerPhoto} alt="photo" />
                            </div>
                            <div>
                                <div className="flex items-center gap-5">
                                    <h2 className="text-xl font-bold">{item.reviewerName}</h2>
                                    <div className="text-xs px-2 py-1 bg-orange-200 rounded-2xl w-fit">
                                        Rating: {item.rating}/10
                                    </div>
                                    <p className="text-xs text-gray-500">{item.date}</p>
                                </div>
                                <p>{item.review}</p>
                            </div>
                        </div>)
                    }
                </div>
                <Link className="btn text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to={`/addreview/${_id}`}>Add Review</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;