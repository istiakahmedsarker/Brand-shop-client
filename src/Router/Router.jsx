import {
    createBrowserRouter,
    Link,
} from "react-router-dom";
import Root from "../Root/Root";
import Register from "../Pages/Register/Register";
import Home from '../Pages/Home/Home'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            }
        ]
    },

]);

export default Router