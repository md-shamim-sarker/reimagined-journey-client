import {createBrowserRouter} from "react-router-dom";
import AddServices from "../components/AddServices";
import Blog from "../components/Blog";
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
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
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