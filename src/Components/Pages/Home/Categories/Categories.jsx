import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';


const Categories = ({ toy }) => {
    const { toyName, pictureURL, rating, availableQuantity, price, toyId } = toy;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className='w-[300px] h-[300px] rounded-md shadow-2xl mt-3'
                        src={pictureURL}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-2 bg-amber-300 px-4 py-2 rounded-2xl text-blue-500' >
                            <FaRegStarHalfStroke className='text-green-500' />
                            <p className='font-semibold merriweather'> {rating}</p>
                        </div>

                        <div className='bg-green-400 px-4 py-2 rounded-2xl'>
                            <p className='font-semibold merriweather ml-6 text-base-100'>Available Quantity: {availableQuantity}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <p className='py-2 lobster font-semibold text-red-700 text-lg'>Price: ${price}</p>
                        <Link to={`/toyDetails/${toyId}`} className="btn btn-primary">View More...</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;