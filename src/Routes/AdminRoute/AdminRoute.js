import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../Hookes/UseAdmin';
import Loader from '../../Pages/Shared/Loader/Loader';


const AdminRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin , isAdminLoading] = useAdmin(user?.email);
    if(loading || isAdminLoading){
        return <Loader></Loader>
    }



   if(user?.email && isAdmin){
    return children;
   }
   else{
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
   }
};

export default AdminRoute;