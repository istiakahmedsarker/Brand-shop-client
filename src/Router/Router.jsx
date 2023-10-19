import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home'
import ErrorPage from "../ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import IndividualBrands from "../Components/IndividualBrands/IndividualBrands"; // Make sure it's imported correctly

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>,
            },
            {
                path: "/updateProduct",
                element: <updateProduct></updateProduct>
            },
            {
                path: "/brands/:id",
                element: <IndividualBrands></IndividualBrands>,
                loader: () => fetch('http://localhost:5000/allProducts')
            },
            {
                path: "/register",
                element: <Register></Register>,
            }
        ]
    },
]);

export default Router;
