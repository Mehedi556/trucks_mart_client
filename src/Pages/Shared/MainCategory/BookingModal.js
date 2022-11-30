import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../Loader/Loader';

const BookingModal = ({ truckItem, setTruckItem }) => {
  const { loading, user } = useContext(AuthContext);
  // console.log(truckItem);
  const {} = truckItem;

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const truckName = form.truckName.value;
    const price = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const location = form.location.value;
    const image = truckItem.image;

    const datas = {
      truckName,
      price,
      name,
      email,
      number,
      location,
      image,
    };
    ordersFunction(datas);
    // console.log(truckName, price, email, number, location , name , image);
    toast.success('Selected Truck is Booked..');
    setTruckItem(null);
  };

  const ordersFunction = data => {
    // const singleItem = data;
    console.log(data);

    fetch('https://server-site-lake.vercel.app/myorders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  // const {data: users = [] } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: async () => {
  //       const res = await fetch('https://server-site-lake.vercel.app/users');
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
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              name="truckName"
              type="text"
              placeholder="Truck Name"
              className="input input-bordered "
              defaultValue={`${truckItem?.name}`}
              readOnly
            />
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered "
              defaultValue={`${truckItem?.resale_price}`}
              readOnly
            />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered "
              defaultValue={`${user?.displayName}`}
              readOnly
            />
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              className="input input-bordered "
              defaultValue={`${user?.email}`}
              readOnly
            />
            <input
              name="number"
              type="number"
              placeholder="Your Number"
              className="input input-bordered "
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input input-bordered "
            />
            <div className="flex items-center justify-center pt-5">
              <button onClick={ordersFunction}>
                <input
                  className="btn btn-wide btn-primary flex items-center"
                  type="submit"
                  value="Submit"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
