import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllCategories from "../../Pages/Shared/AllCategories/AllCategories";
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
                path: '/categories/:id',
                element: <PrivetRoute><AllCategories></AllCategories></PrivetRoute>
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