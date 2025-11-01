import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    if (loading) {
        return <>
            <div className='flex justify-center items-center text-6xl'>
                <span className=" loading loading-spinner text-info "></span>
            </div>
        </>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to="/login" replace></Navigate>;
    }
};

export default PrivateRoute;