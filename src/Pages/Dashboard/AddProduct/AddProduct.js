import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const AddProduct = () => {
  const { register , handleSubmit ,  formState: { errors } } = useForm();
    const [error , setError] = useState('');
    const [images , setImages] = useState("");
    // console.log(images);

    const navigate = useNavigate();
    const imgHostingKey = process.env.REACT_APP_imgbb_key;
    // console.log(imgHostingKey);


    const handleAddProduct = (data) => {
      console.log(data.image);
    //   setProduct(data.image , data.category_id , data.condition , data.description , data.location , data.mobile_number , data.name , data.original_price , data.resale_price , data.sellers_name , data.year_of_purchase , data.years_of_use);
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image' , image);
      const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
      fetch(url , {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imageData => {
        // if(imageData.success){
            // console.log(imageData.data.url);
            const picture = imageData.data.url;
            setProduct(picture , data.category_id , data.condition , data.description , data.location , data.mobile_number , data.name , data.original_price , data.resale_price , data.sellers_name , data.year_of_purchase , data.years_of_use);
        // }
      })




        navigate('/')
        setError('');
   
  }

  const setProduct = (image , category_id , condition , description , location , mobile_number , name , original_price , resale_price , sellers_name , year_of_purchase , years_of_use) => {
    const productDetails = {
        image,
        category_id ,
         condition ,
          description ,
           location ,
            mobile_number ,
             name ,
              original_price ,
               resale_price ,
                sellers_name ,
                 year_of_purchase ,
                  years_of_use
                };
    fetch('http://localhost:5000/productDetails' , {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(productDetails)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast.success('Your post is added');
    })
  }



    return (
        <form style={{backgroundColor: "#ECF4E7"}} onSubmit={handleSubmit(handleAddProduct)} className='rounded-2xl mx-auto w-10/12'>
        <div className="hero my-24 p-5 rounded-xl w-full">
  <div className="hero-content flex-col lg:flex-row">
  <div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold pb-5 text-center">Want To Add New Product? Then</h1>
  <h1 className="text-3xl font-bold text-center">Fill Up The Form!</h1>
  
  
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
  







  <div className="form-control">
        <label className="label">
            <span className="label-text">Select Truck Picture</span>
        </label>
      
      <input {...register("image" , { required: "Truck name is required" } )} type="file"   className="input input-bordered" required/>
    </div>


  {/* ------------------- */}
  
    <div className="form-control">
        <label className="label">
            <span className="label-text">Truck name</span>
        </label>
      
      <input {...register("name" , { required: "Truck name is required" } )} type="text"  placeholder="Truck name" className="input input-bordered" required/>
    </div>

{/* ------------------- */}

    <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Select Category</span>
        </label>

        <select
                {...register('category_id')}
                className="select input-bordered w-full max-w-xs">
                <option value={"VOLVO"}>VOLVO</option>
                <option value={"MAN"}>MAN</option>
                <option value={"SCANIA"}>SCANIA</option>
        </select>
    </div>
  
  {/* ------------------- */}
  
    <div className="form-control">
      <label className="label">
        <span className="label-text">Location</span>
      </label>
      <input {...register("location" , { required: "Location is required" } )} type="text" placeholder="location" className="input input-bordered" required/>
    </div>
  {/* ------------------- */}
  <div className='flex gap-1'>
    <div className="form-control w-2/4">
      <label className="label">
        <span className="label-text">Original Price</span>
      </label>
      <input {...register("original_price" , { required: "Original Price is required" } )} type="number" placeholder="Original Price" className="input input-bordered" required/>
    </div>

    {/* ----------------------- */}

    <div className="form-control w-2/4">
      <label className="label">
        <span className="label-text">Resale Price</span>
      </label>
      <input {...register("resale_price" , { required: "Resale Price is required" } )} type="number" placeholder="Resale Price" className="input input-bordered" required/>
    </div>

  </div>
    
  
  {/* ------------------- */}



  <div className="form-control">
        <label className="label">
            <span className="label-text">Sellers Name</span>
        </label>
      
      <input {...register("sellers_name" , { required: "Sellers name is required" } )} type="text"  placeholder="Sellers name" className="input input-bordered" required/>
    </div>

{/* ------------------- */}


<div className='flex gap-1'>

<div className="form-control w-2/4 max-w-xs">
        <label className="label">
            <span className="label-text">Condition</span>
        </label>

        <select
                {...register('condition')}
                className="select input-bordered w-full max-w-xs">
                <option value={"Excellent"}>Excellent</option>
                <option value={"Good"}>Good</option>
                <option value={"Fair"}>Fair</option>
        </select>
    </div>

{/* ------------------- */}

<div className="form-control w-2/4">
      <label className="label">
        <span className="label-text">Years of Use</span>
      </label>
      <input {...register("years_of_use" , { required: "Years of Use is required" } )} type="number" placeholder="Years of Use" className="input input-bordered" required/>
    </div>

</div>



{/* ------------------- */}


<div className='flex gap-1'>

        <div className="form-control w-2/4">
            <label className="label">
                <span className="label-text">Mobile Number</span>
            </label>
            <input {...register("mobile_number" , { required: "Mobile Number is required" } )} type="number" placeholder="Mobile Number" className="input input-bordered" required/>
        </div>

{/* ------------------- */}

        <div className="form-control w-2/4">
            <label className="label">
                <span className="label-text">Year of Purchase</span>
            </label>
            <input {...register("year_of_purchase" , { required: "Years of Purchase is required" } )} type="date" placeholder="Year of Purchase" className="input input-bordered " required/>
        </div>

</div>


{/* ------------------- */}


        <div className="form-control">
            <label className="label">
                <span className="label-text">Description</span>
            </label>
            <textarea {...register("description" , { required: "Description is required" } )} type="text-area" placeholder="Description about this truck..." className="textarea textarea-bordered" required/>
        </div>



  
    <div className="form-control">
      <label className="label">
        <a  className="label-text-alt link link-hover">{error}</a>
      </label>
    </div>
  
  
  
    <div className="form-control mt-6">
      <button className="btn btn-primary text-white">Add Product</button>
    </div>




  </div>
  </div>
  </div>
  </div>
    </form>
    );
};

export default AddProduct;