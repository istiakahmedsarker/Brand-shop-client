import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home'
import ErrorPage from "../ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import IndividualBrands from "../Components/IndividualBrands/IndividualBrands"; // Make sure it's imported correctly
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/data.json')
            },
            {
                path: "/addProduct",
                element: <AddProduct />,
            },
            {
                path: "/myCart",
                element: <UpdateProduct />,
            },
            {
                path: "/brands/:id",
                element: <IndividualBrands />,
                loader: () => fetch('http://localhost:5000/allProducts'),
                children: [
                    {
                        path: "productDetails/:id",
                        element: <ProductDetails />,
                    },
                ],
            },
            {
                path: "updateProduct/:id",
                element: <UpdateProduct />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default Router;

