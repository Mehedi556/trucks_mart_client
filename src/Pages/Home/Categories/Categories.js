import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Category from './Category';

import Loader from '../../Shared/Loader/Loader';

const Categories = () => {
  const { loading } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setCategories(data);
      });
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-5 p-9 rounded-xl" style={{ backgroundColor: '#ECF4E7' }}>
      <div className="text-center">
        <h2 className="text-4xl font-bold  pb-8">
          Are you looking for <br /> used truck from expensive brands? <br />{' '}
          Get into your favorite brand from here and pick the trucks you like
          the most!!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-5">
        {categories?.map(category => (
          <Category category={category} key={category._id}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
