
import { useState } from "react";
import Statistics from "./DashboardComponents/Statistics";
import Users from "./DashboardComponents/Users";
import ServicesDash from "./DashboardComponents/ServicesDash";


const Dashboard = () => {



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
                            <li
                                className={`text-center font-semibold border py-2 cursor-pointer ${activeTab === "dashboard" ? "bg-teal-100" : "hover:bg-gray-200"}`}
                                onClick={() => setActiveTab("dashboard")}
                            >
                                Statistics
                            </li>
                            <li
                                className={`text-center font-semibold border py-2 cursor-pointer ${activeTab === "users" ? "bg-teal-100" : "hover:bg-gray-200"}`}
                                onClick={() => setActiveTab("users")}
                            >
                                All Users
                            </li>
                            <li
                                className={`text-center font-semibold border py-2 cursor-pointer ${activeTab === "services" ? "bg-teal-100" : "hover:bg-gray-200"}`}
                                onClick={() => setActiveTab("services")}
                            >
                                All Services
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;