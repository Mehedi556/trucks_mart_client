import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `https://server-site-lake.vercel.app/productDetails?email=${user?.email}`;

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['productDetails', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div
      style={{ backgroundColor: '#ECF4E7' }}
      className="grid grid-cols-1 rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 py-9 px-9 w-10/12 mx-auto p-5"
    >
      {products.map(product => (
        <div key={product?._id} className="card bg-base-100 h-[100%] shadow-xl">
          <figure>
            <img className="h-[300px]" src={product?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{product?.name}</h2>
            <p>Price: $ {product.resale_price}</p>
            <div className="card-actions justify-between">
              <Link to={`/maincategory/${product?._id}`}>
                <button className="btn bg-red-700 border-0">Delete item</button>
              </Link>
              <Link to={`/maincategory/${product?.category_id}`}>
                <button className="btn border-0 btn-primary">Advertise</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
