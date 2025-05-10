import axios from "axios";
import { useEffect, useState } from "react";
import Statistics from "./DashboardComponents/Statistics";
import Users from "./DashboardComponents/Users";
import ServicesDash from "./DashboardComponents/ServicesDash";


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
                        {activeTab === "dashboard" && <Statistics />}
                        {activeTab === "users" && <Users />}
                        {activeTab === "services" && <ServicesDash />}

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li className="text-center font-semibold border hover:bg-gray-200 py-2 cursor-pointer" onClick={() => setActiveTab("dashboard")}>Statistics</li>
                            <li className="text-center font-semibold border hover:bg-gray-200 py-2 cursor-pointer" onClick={() => setActiveTab("users")}>All Users</li>
                            <li className="text-center font-semibold border hover:bg-gray-200 py-2 cursor-pointer" onClick={() => setActiveTab("services")}>All Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;