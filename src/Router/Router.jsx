import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);


export default router;