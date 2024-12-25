
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyReviewCard = ({ item }) => {

    const { _id, company_name, company_logo, service_name, date, review, rating } = item;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/service-reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your movie has been deleted.",
                                icon: "success"
                            });
                        }
                        window.location.reload();
                    })
            }
        });
    }

    return (
        <div className="flex items-start gap-10 bg-orange-100 rounded-2xl my-3 p-5">
            <div>
                <img className="w-32" src={company_logo} alt="logo" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">{company_name}</h2>
                <h2 className="font-bold">{service_name}</h2>
                <div className="flex items-center gap-20">
                    <h2>Rating: {rating}</h2>
                    <h2>Posted Date: {date}</h2>
                </div>
                <p>{review}</p>
                <Link to={`/updatereview/${_id}`} className="btn">Update</Link>
                <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
            </div>
        </div>
    );
};

export default MyReviewCard;