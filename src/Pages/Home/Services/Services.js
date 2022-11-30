import React from 'react';
import tick from '../../../assets/usp-1.svg'
import tick2 from '../../../assets/usp-2.svg'
import tick3 from '../../../assets/usp-3.svg'

const Services = () => {
    return (
        <div className='mb-10 rounded-xl' style={{backgroundColor: "#ECF4E7"}}>
            <div className="my-14 p-10">
        <h3 className="pb-2">-----WHY YOU CHOOSE FROM THESE TRUCKS</h3>
        <h1 className="pl-8 mb-10 font-bold text-2xl">
          Best Price. Quality Service.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex p-5 border-4 rounded-xl">
            <img style={{ width: '40px' }} src={tick} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">Select For Booking</h1>
              <p>Pick your Truck, and buy.</p>
            </div>
          </div>
          <div className="flex p-5 border-4 rounded-xl">
            <img style={{ width: '40px' }} src={tick2} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">24/7 Customer Support</h1>
              <p>For any queries, comments and support.</p>
            </div>
          </div>
          <div className="flex p-5 border-4 rounded-xl">
            <img style={{ width: '40px' }} src={tick3} alt="" />
            <div className="pl-3 ">
              <h1 className="text-black font-bold">Online Payment </h1>
              <p>Choose your preferred payment method.</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Services;