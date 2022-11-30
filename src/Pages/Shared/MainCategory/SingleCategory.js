import React, { useContext } from 'react';
import tick from '../../../assets/tick.png'
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../Loader/Loader';


const SingleCategory = ({data , setTruckItem}) => {
    const {loading} = useContext(AuthContext);
    const {image , name , location , resale_price , original_price , years_of_use , sellers_name , year_of_purchase } = data;

    const ordersFunction = (data) => {
      const orderItem = data;
      fetch('http://localhost:5000/myorders' , {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:  JSON.stringify(orderItem),
    })
    .then(res => res.json())
      .then(data => {
        console.log(data);
        // toast.success('Your post is added for Advertise');
        // if(acknowledged === true){
        //   
        // }
      });
    }




    if(loading){
        return <Loader></Loader>
    }

    return (
        <div>
            <div className="card bg-base-100 h-min-[600px] shadow-xl">
        <figure>
          <img className='h-[300px] p-3 rounded-xl' src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
            <div>
                <p>LOCATION: {location}</p>
                <p>ORIGINAL PRICE: ${original_price}</p>
                <p>RESALE PRICE: ${resale_price}</p>
                <div className='flex'>
                  <p>SELLERS NAME: {sellers_name}</p>
                  {
                  data?.status === 'verified' && <img className='w-[35px]' src={tick} alt="" />
                  }
                  
                </div>
                
                <p>YEARS OF USE: {years_of_use} years</p>
                <p>YEAR OF PURCHASE DATE: {year_of_purchase}</p>
            </div>
          
         
          <div className="card-actions justify-end">
            
              <label onClick={() => setTruckItem(data)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
           
              
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingleCategory;