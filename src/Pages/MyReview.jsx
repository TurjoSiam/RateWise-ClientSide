import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import MyReviewCard from "./MyReviewCard";


const MyReview = () => {

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service-reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user.email])


    return (
        <div>
            {
                reviews.map(item => <MyReviewCard key={item._id} item={item}></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;