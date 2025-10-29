import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error404 from "../Pages/ErrorPages/Error404";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: "/",
                Component: Home
            },
        ]
    }
])