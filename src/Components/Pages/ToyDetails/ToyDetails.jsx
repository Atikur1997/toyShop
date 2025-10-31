import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    const { id } = useParams()
    console.log(id);
    return (
        <div className=' text-center text-9xl font-bold'>
            {id}
        </div>
    );
};

export default ToyDetails;