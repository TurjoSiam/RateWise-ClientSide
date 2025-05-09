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
import PrivateRoute from "../Pages/PrivateRoute";
import AddReview from "../Pages/AddReview";
import MyService from "../Pages/MyService";
import UpdateService from "../Pages/UpdateService";
import UpdateReview from "../Pages/UpdateReview";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Dashboard from "../Pages/Dashboard";



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
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/myreview",
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: "/myservice",
                element: <PrivateRoute><MyService></MyService></PrivateRoute>
            },
            {
                path: "/updateservice/:id",
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-beta.vercel.app/allservices/updateservice/${params.id}`)
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
                loader: ({ params }) => fetch(`https://assignment-11-beta.vercel.app/allservices/${params.id}`)
            },
            {
                path: "/addreview/:id",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: "/updatereview/:id",
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-beta.vercel.app/service-reviews/updatereview/${params.id}`)
            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contactus",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },
]);


export default router;