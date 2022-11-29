import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const MyOrders = () => {
    const {user , loading } = useContext(AuthContext);
    // console.log(user.email);
    const [products , setProducts] = useState([]);
    // console.log(products);

    useEffect( () => {
        fetch(`http://localhost:5000/myorders?email=${user?.email}` , {

        })
       .then(res => res.json())
       .then(data => {
        // console.log(data);
        setProducts(data);
        // refetch()
       });
    } , [user?.email])

    if(loading){
        return <Loader></Loader>
      }




    return (
        <div  className="my-16 p-5 pt-10 rounded-xl w-10/12 mx-auto" style={{ backgroundColor: '#ECF4E7' }}>
        <div className="text-center">
            <h2 className="text-4xl font-bold font-mono pb-3">My Booking Items</h2>
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
        <h2 className="card-title font-bold text-2xl">{product?.truckName}</h2>
        <p>Price: $ {product.price}</p>
        <div className="card-actions justify-end">
          {
            product.price && !product.paid && <Link to={`/dashboardLayout/payment/${product._id}`}>
            <button className="btn border-0 btn-primary">Pay</button>
          </Link>
          }
          {
            product.price && product.paid && <span className='text-primary'>Paid</span>
          }
          
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
    );
};

export default MyOrders;