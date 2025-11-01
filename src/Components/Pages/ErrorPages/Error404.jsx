import React from 'react';
import { NavLink } from 'react-router';
import appnotFound from '../../../assets/App-Error.png'


const Error404 = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
                <h1 className="text-9xl merriweather font-extrabold text-red-500 animate-pulse">404</h1>
                <h2 className="text-4xl font-bold mt-4">Oops! Page Not Found</h2>
                <img className='my-6' src={appnotFound} alt="" />
                <NavLink
                    to="/"
                    className="mt-6 merriweather inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
                >
                    Go Back Home
                </NavLink>
            </div>
        </>

    );
};

export default Error404;
