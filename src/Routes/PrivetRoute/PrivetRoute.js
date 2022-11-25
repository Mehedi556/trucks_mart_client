import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider';


const PrivetRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <div className='flex items-center justify-center'>
                    <DotLoader color="#36d7b7" />
                </div>
    }



   if(user?.email){
    return children;
   }
   else{
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
   }
};

export default PrivetRoute;