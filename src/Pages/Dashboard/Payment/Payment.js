import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

  const data = useLoaderData();
  // const navigation = useNavigation();

  // if(navigation.state === "loading"){
  //   return <Loader></Loader>
  // }

  return (
    <div>
      <h2 className="text-center mt-10 mb-5 text-3xl">Payment For {data.truckName}</h2>
      <p className="text-xl font-bold text-center mt-5 mb-5">
        Please Pay ${data.price} for Buy This Truck
      </p>
      <div className='w-6/12 my-12 mx-auto border p-5 rounded-xl border-green-600'>
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
