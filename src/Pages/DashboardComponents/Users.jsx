import axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => setUser(res.data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Email
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Make Admin</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;