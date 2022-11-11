import {createBrowserRouter} from "react-router-dom";
import AddServices from "../components/AddServices";
import Blog from "../components/Blog";
import Details from "../components/Details";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReviews from "../components/MyReviews";
import Register from "../components/Register";
import Services from "../components/Services";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch('http://localhost:5000/services-limited'),
                element: <Home></Home>
            },
            {
                path: "/services",
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: "/services/:id",
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Details></Details>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/myreviews",
                element: <MyReviews></MyReviews>
            },
            {
                path: "/addservices",
                element: <AddServices></AddServices>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'errorpage',
        element: <Error></Error>
    }
]);

export default router;