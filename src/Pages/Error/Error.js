import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/12.jpg'

const Error = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='text-center h-full'>
        <div className='mb-16'>
            <img className='w-full' src={images} alt="" />
             <h1 className='text-5xl mt-10 font-bold pb-10'>404 - Not Found!</h1>
                 <Link className='text-2xl underline' to="/">Go Home</Link>
             </div>
   </div>
        </div>
    );
};

export default Error;