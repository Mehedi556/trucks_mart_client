import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Services from '../Services/Services';

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://server-site-lake.vercel.app/advertise?email=${user?.email}`,
      {}
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProducts(data);
        // refetch()
      });
  }, [user?.email]);
  return (
    <div className="w-10/12 mx-auto">
      <Banner></Banner>
      <Categories></Categories>
      {products.length > 0 && <AdvertiseSection></AdvertiseSection>}
      <Services></Services>
    </div>
  );
};

export default Home;
