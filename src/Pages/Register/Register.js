import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useToken from '../../Hookes/UseToken';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [token] = useToken(userEmail);
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const { createUser, signUpFacebook, updateUser, signUpGoogle } =
    useContext(AuthContext);

  // if(token){
  //   navigate('/');
  // }

  const handleSignup = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        toast.success('User account created');
        setUser(data.name, data.email, data.role);
        console.log(data.name, data.email, data.role);
        const userInformation = {
          displayName: data.name,
        };
        updateUser(userInformation)
          .then(() => {})
          .catch(error => console.log(error));

        setError('');
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    signUpGoogle(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user.displayName, user.email, 'Buyer');
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  const setUser = (name, email, role) => {
    const user = { name, email, role };
    fetch('https://server-site-lake.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserEmail(email);
        navigate('/');

        // ------------------
      });
  };

  const handleFacebook = () => {
    signUpFacebook(facebookProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <form
      style={{ backgroundColor: '#ECF4E7' }}
      onSubmit={handleSubmit(handleSignup)}
      className="rounded-2xl mx-auto"
    >
      <div className="hero my-24 p-5 rounded-xl w-full">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold pb-5 text-center">
              New User In This Site?
            </h1>
            <h1 className="text-3xl font-bold text-center">Register Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Select Your Purpose</span>
                </label>

                <select
                  {...register('role')}
                  className="select input-bordered w-full max-w-xs"
                >
                  <option value={'Buyer'}>Buyer</option>
                  <option value={'Seller'}>Seller</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your email</span>
                </label>
                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be 6 character or longer',
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login">
                    <p
                      style={{ color: 'blue' }}
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      have an Account?
                    </p>
                  </Link>
                </label>
                <label className="label">
                  <a className="label-text-alt link link-hover">{error}</a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-black">Register</button>
                <button
                  onClick={handleFacebook}
                  className="btn mt-3 btn-outline btn-info text-black"
                >
                  Continue with Facebook
                </button>

                <button
                  onClick={handleGoogleSignUp}
                  className="btn mt-3 btn-outline btn-info text-black"
                >
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
