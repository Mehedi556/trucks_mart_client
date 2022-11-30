import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hookes/UseAdmin';
import useBuyer from '../Hookes/UseBuyer';
import useSeller from '../Hookes/UseSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    console.log(isBuyer); 


    return (
        <div style={{backgroundColor: "#ECF4E7"}} className='w-10/12 mx-auto'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>
   
  </div> 
  <div className="drawer-side border-4 rounded-xl">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">
    {
      isSeller && 
      <>
      <li className='font-bold'><Link to="/dashboardLayout/addproduct">Add Product</Link></li>
      <li className='font-bold'><Link to="/dashboardLayout/myproducts">My Products</Link></li>
      </>
    }

    {
      isAdmin && <>
      <li className='font-bold'><Link to="/dashboardLayout/allmembers">All Sellers</Link></li>
      <li className='font-bold'><Link to="/dashboardLayout/allusers">All Buyers</Link></li>
      </>
    }

    {
        isBuyer && <>
        <li className='font-bold'><Link to="/dashboardLayout/myorders">My Orders</Link></li>
        </>
    }


    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;