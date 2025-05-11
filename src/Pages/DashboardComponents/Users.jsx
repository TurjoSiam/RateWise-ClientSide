import axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => setUser(res.data))
    }, [])

    return (
        <div className="min-w-full">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead className="bg-teal-50">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            user.map(item =>
                                <tr>
                                    <td>
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-decagon h-12 w-12">
                                                    <img
                                                        src={item?.photo}
                                                        alt="User Photo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.email}
                                    </td>
                                    <td>
                                        {item?.role}
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Make Admin</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;