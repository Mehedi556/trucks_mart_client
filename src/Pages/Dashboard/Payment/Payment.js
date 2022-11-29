import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

  const data = useLoaderData();
//   console.log('booking data', data);
  return (
    <div>
      <h2 className="text-3xl">Payment For {data.truckName}</h2>
      <p className="text-xl font-bold">
        Please Pay ${data.price} for Buy This Truck
      </p>
      <div className='w-96 my-12'>
        <Elements stripe={stripePromise}>
          <CheckoutForm
          data={data}
           />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
