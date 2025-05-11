import axios from "axios";
import { useState } from "react";


const Users = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then(res => setUser(res.data))
    }, [])

    return (
        <div>
            <h2>total number of users are {user.length}</h2>
        </div>
    );
};

export default Users;