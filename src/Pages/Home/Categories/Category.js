import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  const { image, category_name, category_id } = category;
  return (
    <div>
      <div className="card bg-base-100 h-[100%] shadow-xl">
        <figure>
          <img className='h-[300px]' src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{category_name}</h2>
         
          <div className="card-actions justify-end">
            <Link to={`/maincategory/${category_id}`}>
              <button className="btn btn-primary">Show More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
