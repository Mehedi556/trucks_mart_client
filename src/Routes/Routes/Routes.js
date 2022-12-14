import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import MainLayout from '../../Layout/MainLayout';
import Blog from '../../Pages/Blog/Blog';
import AddProduct from '../../Pages/Dashboard/AddProduct/AddProduct';
import AllMembers from '../../Pages/Dashboard/AllMembers/AllMembers';
import AllUsers from '../../Pages/Dashboard/AllMembers/AllUsers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import Error from '../../Pages/Error/Error';

import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import MainCategory from '../../Pages/Shared/MainCategory/MainCategory';
import AdminRoute from '../AdminRoute/AdminRoute';

import PrivetRoute from '../PrivetRoute/PrivetRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/maincategory/:id',
        element: (
          <PrivetRoute>
            <MainCategory></MainCategory>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-site-lake.vercel.app/productDetails/${params.id}`
          ),
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
  {
    path: '/dashboardLayout',
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: '/dashboardLayout/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/dashboardLayout/addproduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/dashboardLayout/myproducts',
        element: <MyProducts></MyProducts>,
      },
      {
        path: '/dashboardLayout/allmembers',
        element: (
          <AdminRoute>
            <AllMembers></AllMembers>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboardLayout/allusers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboardLayout/myorders',
        element: <MyOrders></MyOrders>,
      },
      {
        path: '/dashboardLayout/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://server-site-lake.vercel.app/orders/${params.id}`),
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);
