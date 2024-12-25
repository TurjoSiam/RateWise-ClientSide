import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyService = () => {

    const { user } = useContext(AuthContext);

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/allservices/service?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [user.email])

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
                fetch(`http://localhost:5000/allservices/${id}`, {
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
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service</th>
                            <th>Category</th>
                            <th>Posted Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            services.map((item, index) => <tr>
                                <th>{index+1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item?.company_logo}
                                                    alt="logo" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.company_name}</div>
                                            <div className="text-sm opacity-50">{item.service_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{item.price}</span>
                                </td>
                                <td>{item.added_date}</td>
                                <th>
                                    <button className="btn btn-xs">Update</button>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyService;