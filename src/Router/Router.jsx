import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home'
import ErrorPage from "../ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import PrivateRoute from "../providers/PrivateRoute";
import MyCart from "../Pages/MyCart/MyCart";
import CustomOrder from "../Components/CustomOrder/CustomOrder";
import IndividualBrands from '../Components/IndividualBrands/IndividualBrands'
import Team from "../Components/Team/Team";

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
                element: <PrivateRoute>
                    <AddProduct />,
                </PrivateRoute>
            },
            {
                path: "/myCart",
                element: <PrivateRoute>
                    <MyCart />
                </PrivateRoute>,
                loader: () => fetch('https://foodify-server-side-ak50jpw7o-1234-fs-projects.vercel.app/allProducts'),
            },
            {
                path: "/customOrder",
                element: <PrivateRoute>
                    <CustomOrder />
                </PrivateRoute>,
            },
            {
                path: "/team",
                element: <PrivateRoute>
                    <Team />
                </PrivateRoute>,
            },
            {
                path: "/brands/:id",
                element: <IndividualBrands />,
                loader: () => fetch('https://foodify-server-side-ak50jpw7o-1234-fs-projects.vercel.app/allProducts'),
            },
            {
                path: "productDetails/:id",
                element: <ProductDetails />,
            },
            {
                path: "updateProduct/:id",
                element: <PrivateRoute>
                <UpdateProduct />
            </PrivateRoute>,
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

