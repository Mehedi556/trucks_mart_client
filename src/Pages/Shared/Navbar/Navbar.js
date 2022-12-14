import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import truck from '../../../assets/truck.png'
import useAdmin from '../../../Hookes/UseAdmin';
import useSeller from '../../../Hookes/UseSeller';

const Navbar = () => {
  const { logOut , user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const handleLogOut = () => {
    logOut()

    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
  }

    const menuItems = <>
    <li className='font-bold'><Link to="/">Home</Link></li>
    <li className='font-bold'><Link to="/blog">Blog</Link></li>

    

    {/* {
      isSeller && 
      <>
      <li className='font-bold'><Link to="/dashboardLayout/addproduct">Add Product</Link></li>
      <li className='font-bold'><Link to="/dashboardLayout/myproducts">My Products</Link></li>
      </>
    }

    {
      isAdmin && <>
      <li className='font-bold'><Link to="/dashboardLayout/allmembers">All Members</Link></li>
      </>
    }
 */}


    {
      user?.uid ? <>
      <li className='font-bold'><Link to="/dashboardLayout/dashboard">Dashboard</Link></li>
      <li className='font-bold'><button onClick={handleLogOut}> Logout</button></li>

      </>
      
      :
      <li className='font-bold'><Link to="/login">Login</Link></li>
    }
    
    
  </>;






    return (
        <div style={{backgroundColor: "#ECF4E7"}} className="navbar py-5  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <div className='flex items-center'>
            <img className='w-[50px] ml-5' src={truck} alt="" />
          <a className="ml-2 font-bold text-2xl normal-case text-xl">TrucksMart</a>
          </div>
        </div>
        <div className="navbar-center lg:navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuItems}
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={3} className="pr-4 ml-5 lg:hidden navbar-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
      </div>
    );
};

export default Navbar;