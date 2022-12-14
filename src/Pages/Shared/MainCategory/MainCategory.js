import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../Loader/Loader';
import BookingModal from './BookingModal';
import SingleCategory from './SingleCategory';

const MainCategory = () => {
  const { loading } = useContext(AuthContext);
  const [truckItem, setTruckItem] = useState(null);
  // console.log(truckItem);

  const details = useLoaderData();
  //

  // useEffect( async () => {
  //   const res = await fetch(`https://server-site-lake.vercel.app/productDetails/${}`)
  // } , [])

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div
      style={{ backgroundColor: '#ECF4E7' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-5 "
    >
      {details?.map(data => (
        <SingleCategory
          data={data}
          key={data._id}
          setTruckItem={setTruckItem}
        ></SingleCategory>
      ))}
      {truckItem && (
        <BookingModal
          truckItem={truckItem}
          setTruckItem={setTruckItem}
        ></BookingModal>
      )}
    </div>
  );
};

export default MainCategory;
