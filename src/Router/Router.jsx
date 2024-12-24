import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import AddService from "../Pages/AddService";
import MyReview from "../Pages/MyReview";
import Register from "../Pages/Register";
import Signin from "../Pages/Signin";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";



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
                path: "/allservices",
                element: <AllServices></AllServices>
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
            },
            {
                path: "/signin",
                element: <Signin></Signin>
            },
            {
                path: "/allservices/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allservices/${params.id}`)
            }
        ]
    },
]);


export default router;