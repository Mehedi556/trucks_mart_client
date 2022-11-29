import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const AdvertiseSection = () => {
    const {user , loading } = useContext(AuthContext);
    const [products , setProducts] = useState([]);





    // const { data: products = [] , isLoading , refetch } = useQuery({
    //     queryKey: ['advertise'],
    //     queryFn: () => {
        useEffect( () => {
            fetch(`http://localhost:5000/advertise?email=${user?.email}` , {

            })
           .then(res => res.json())
           .then(data => {
            // console.log(data);
            setProducts(data);
            // refetch()
           });
        } , [user?.email])

    //     },
    //   });

      if(loading){
        return <Loader></Loader>
      }



    return (
        <div  className="my-16 p-5 pt-10 rounded-xl" style={{ backgroundColor: '#ECF4E7' }}>
            <div className="text-center">
                <h2 className="text-4xl font-bold font-mono pb-3">ADVERTISING ITEMS</h2>
            </div>
            <div
      style={{ backgroundColor: '#ECF4E7' }}
      className="grid grid-cols-1 rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 py-9 px-9 p-5">
      {
      products &&
      products?.map(product => (
        <div key={product?._id} className="card bg-base-100 h-[100%] shadow-xl">
          <figure>
            <img className="h-[300px]" src={product?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{product?.name}</h2>
            <p>Price: $ {product.resale_price}</p>
            <div className="card-actions justify-end">
              <Link>
                <button className="btn border-0 btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
        
    );
};

export default AdvertiseSection;