import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Services from "../Pages/Services";
import AddService from "../Pages/AddService";
import MyReview from "../Pages/MyReview";
import Register from "../Pages/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/addservice",
                element: <AddService></AddService>
            },
            {
                path: "/myreview",
                element: <MyReview></MyReview>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);


export default router;