import React from 'react';
import { Link } from 'react-router-dom';

const NoProducts = () => {
    return (
        <div style={{backgroundColor: "#ECF4E7"}} className='w-10/12 mx-auto text-center flex justify-center items-center h-screen'>
            <div className='w-10/12 mx-auto'>
                 <h1 className='text-3xl font-bold'>You have not added any truck yet. If you want to add a product, <Link to="/dashboardLayout/addproduct"><button className='btn btn-sm'>click here.</button></Link></h1>
                 <br />
                 <h1 className='text-3xl font-bold'>And if you have added truck then RELOAD the page</h1>
            </div>
           
        </div>
    );
};

export default NoProducts;