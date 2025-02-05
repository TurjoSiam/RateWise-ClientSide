import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import MyReviewCard from "./MyReviewCard";
import axios from "axios";


const MyReview = () => {

    document.title = "RateWise | My Review"

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // fetch(`https://assignment-11-beta.vercel.app/service-reviews?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setReviews(data)
        //     })

        axios.get(`https://assignment-11-beta.vercel.app/service-reviews?email=${user.email}`, { withCredentials: true })
            .then(res => setReviews(res.data))

    }, [user.email])


    return (
        <div className="w-10/12 lg:w-8/12 mx-auto my-20">
            {
                reviews.map(item => <MyReviewCard key={item._id} item={item}></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;