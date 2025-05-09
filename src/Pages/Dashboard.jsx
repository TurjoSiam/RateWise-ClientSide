import axios from "axios";
import { useEffect, useState } from "react";


const Dashboard = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => setUser(res.data))
    }, [])

    return (
        <div>
            <h2>this is dashboard page</h2>
            <h2>total number of users are {user.length}</h2>
        </div>
    );
};

export default Dashboard;