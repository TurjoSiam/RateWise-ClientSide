import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateReview = () => {

    document.title = "RateWise | Update Review"

    const navigate = useNavigate();

    const date = new Date().toJSON().slice(0, 10);

    const [rating, setRating] = useState(0);

    const { register, handleSubmit } = useForm();

    const { _id, review } = useLoaderData();

    const onSubmit = data => {
        data.rating = rating;
        fetch(`https://assignment-11-beta.vercel.app/service-review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Updated!",
                    text: "Your review has been updated.",
                    icon: "success"
                });
                navigate("/myreview");
            })
    }

    return (
        <div className="lg:w-8/12 mx-auto my-20">
            <form onSubmit={handleSubmit(onSubmit)} className="mx-8 bg-violet-50 p-16 rounded-3xl border border-violet-200">
            <h1 className="mx-auto text-center text-[30px] font-bold mb-6">Update Review</h1>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea {...register('review')} type="text" name="review" defaultValue={review} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write Your Review</label>
                </div>

                <div className="mb-7">
                    <h2 className="text-sm mb-2">Rating</h2>
                    <div className="flex items-center gap-3">
                        <Rating style={{ maxWidth: 270 }} transition="zoom" items={10} value={rating} onChange={setRating} />
                        <input className="rounded-2xl w-12 text-center h-7 text-gray-600" readOnly value={rating} type="text" />
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input {...register('date')} type="text" name="date" defaultValue={date} readOnly className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Posted Date</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Review</button>
            </form>

        </div>
    );
};

export default UpdateReview;