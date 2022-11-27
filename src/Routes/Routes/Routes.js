import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MainCategory from "../../Pages/Shared/MainCategory/MainCategory";

import PrivetRoute from "../PrivetRoute/PrivetRoute";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/maincategory/:id',
                element: <PrivetRoute><MainCategory></MainCategory></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboardLayout',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboardLayout/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])