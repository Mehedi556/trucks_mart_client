import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../Loader/Loader';

const BookingModal = ({ truckItem , setTruckItem }) => {
  const { loading  , user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const truckName = form.truckName.value;
    const price = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const location = form.location.value;

    console.log(truckName , price , name , email , number , location);
    toast.success('Selected Truck is Booked..');
    setTruckItem(null);
  }

  // const {data: users = [] } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: async () => {
  //       const res = await fetch('http://localhost:5000/users');
  //       const data = res.json();
  //       return data;
  //   }
  //  });

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold mb-4">{truckItem?.name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
          <input name="truckName" type="text" placeholder="Truck Name" className="input input-bordered " defaultValue={`Truck Name: ${truckItem?.name}`} readOnly/>
          <input name="price" type="text" placeholder="Price" className="input input-bordered " defaultValue={`Truck Price: ${truckItem?.resale_price}$`} readOnly/>
          {/* <input name="name" type="text" placeholder="Your Name" className="input input-bordered " defaultValue={`Buyer Name: ${user?.displayName}`} readOnly/> */}
          <input name="email" type="text" placeholder="Your Email" className="input input-bordered " defaultValue={`Buyer Email: ${user?.email}`} readOnly/>
          <input name="number" type="number" placeholder="Your Number" className="input input-bordered " />
          <input name="location" type="text" placeholder="Meeting Location" className="input input-bordered " />
          <div className='flex items-center justify-center pt-5'>
             <input className='btn btn-wide btn-primary flex items-center' type="submit" value="Submit" />
          </div>
         
          </form>
          
        </div>
      </div>
    </>
  );
};

export default BookingModal;
