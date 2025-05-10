import axios from "axios";
import { useEffect, useState } from "react";


const Dashboard = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => setUser(res.data))
    }, [])

    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div>
            <div>
                {/* sidebar of dashboard */}
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <h2>total number of users are {user.length}</h2>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li onClick={setActiveTab("dashboard")}>Statistics</li>
                            <li onClick={setActiveTab("users")}>All Users</li>
                            <li onClick={setActiveTab("posts")}>All posts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;