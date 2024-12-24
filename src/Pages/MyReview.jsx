import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";


const MyReview = () => {

    const {user} = useContext(AuthContext);

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
            <h2>this is my review page. total review: {reviews.length}</h2>
        </div>
    );
};

export default MyReview;