import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error404 from "../Pages/ErrorPages/Error404";

import Login from "../Pages/Login/Login";
import Registration from "../Registration/Registration";
import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "../../Provider/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error404></Error404>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/registration",
                Component: Registration,
            },
            {
                path: "/toyDetails/:id",
                loader: () => fetch('/toyData.json'),
                element: (<PrivateRoute>
                    <ToyDetails></ToyDetails>
                </PrivateRoute>),
            }
        ]
    }
])